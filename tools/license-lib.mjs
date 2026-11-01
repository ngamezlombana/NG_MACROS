/**
 * NG_MACROS - Núcleo de licencias firmadas.
 *
 * Las licencias se firman con ECDSA P-256. La aplicación incluye únicamente
 * la clave pública; la clave privada nunca debe publicarse en el repositorio.
 *
 * Formato del token: base64url(payloadJSON) + "." + base64url(firma)
 */

import { webcrypto } from 'node:crypto';

const subtle = webcrypto.subtle;
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

export const APP_ID = 'ng-macros';
export const LICENSE_VERSION = 1;
export const ECDSA_ALG = { name: 'ECDSA', namedCurve: 'P-256' };
export const ECDSA_SIGN_ALG = { name: 'ECDSA', hash: 'SHA-256' };

export function b64urlEncode(input) {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  return Buffer.from(bytes).toString('base64url');
}

export function b64urlDecode(value) {
  return new Uint8Array(Buffer.from(String(value), 'base64url'));
}

/** Deja solo los campos públicos necesarios para embeberlos en la app. */
export function publicJwkForEmbedding(jwk) {
  if (!jwk || jwk.kty !== 'EC' || jwk.crv !== 'P-256' || !jwk.x || !jwk.y) {
    throw new Error('La clave pública no es una JWK EC P-256 válida.');
  }
  return { kty: 'EC', crv: 'P-256', x: jwk.x, y: jwk.y, ext: true };
}

export async function generateKeyPair() {
  const keyPair = await subtle.generateKey(ECDSA_ALG, true, ['sign', 'verify']);
  const privateJwk = await subtle.exportKey('jwk', keyPair.privateKey);
  const publicJwk = publicJwkForEmbedding(await subtle.exportKey('jwk', keyPair.publicKey));
  return { privateJwk, publicJwk };
}

export function createLicensePayload({ sub = 'Cliente', days = 30, plan = 'pro', now = Date.now() } = {}) {
  const numericDays = Number(days);
  if (!Number.isFinite(numericDays) || numericDays <= 0) {
    throw new Error('Los días de licencia deben ser un número mayor que cero.');
  }
  const issuedAt = Math.floor(now / 1000);
  const expiresAt = issuedAt + Math.round(numericDays * 86400);
  return {
    v: LICENSE_VERSION,
    app: APP_ID,
    sub: String(sub || 'Cliente').trim().slice(0, 120),
    plan: String(plan || 'pro').trim().slice(0, 32),
    iat: issuedAt,
    exp: expiresAt,
    jti: webcrypto.randomUUID()
  };
}

export async function signLicense(privateJwk, payload) {
  if (!privateJwk || privateJwk.kty !== 'EC' || !privateJwk.d) {
    throw new Error('La clave privada no es una JWK EC válida.');
  }
  const key = await subtle.importKey('jwk', privateJwk, ECDSA_ALG, false, ['sign']);
  const payloadB64 = b64urlEncode(textEncoder.encode(JSON.stringify(payload)));
  const signature = await subtle.sign(ECDSA_SIGN_ALG, key, textEncoder.encode(payloadB64));
  return `${payloadB64}.${b64urlEncode(new Uint8Array(signature))}`;
}

export async function verifyLicense(publicJwk, token, now = Date.now()) {
  const reject = (error, payload = null) => ({ valid: false, error, payload, daysLeft: 0 });

  if (typeof token !== 'string' || token.trim() === '') {
    return reject('No se recibió ninguna licencia.');
  }

  const parts = token.trim().split('.');
  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    return reject('El formato de la licencia no es válido.');
  }

  let payload;
  try {
    payload = JSON.parse(textDecoder.decode(b64urlDecode(parts[0])));
  } catch {
    return reject('El contenido de la licencia no se pudo leer.');
  }

  if (!payload || typeof payload !== 'object') {
    return reject('El contenido de la licencia no es válido.');
  }

  let signatureValid = false;
  try {
    const key = await subtle.importKey('jwk', publicJwk, ECDSA_ALG, false, ['verify']);
    signatureValid = await subtle.verify(
      ECDSA_SIGN_ALG,
      key,
      b64urlDecode(parts[1]),
      textEncoder.encode(parts[0])
    );
  } catch {
    return reject('No se pudo comprobar la firma de la licencia.', payload);
  }

  if (!signatureValid) {
    return reject('La firma de la licencia no es válida.', payload);
  }
  if (payload.v !== LICENSE_VERSION || payload.app !== APP_ID) {
    return reject('La licencia no corresponde a esta aplicación.', payload);
  }
  if (!Number.isFinite(payload.iat) || !Number.isFinite(payload.exp) || payload.exp <= payload.iat) {
    return reject('Las fechas de la licencia no son válidas.', payload);
  }
  if (payload.iat * 1000 > now + 5 * 60 * 1000) {
    return reject('La licencia todavía no es válida. Revisa la fecha del equipo.', payload);
  }
  if (payload.exp * 1000 <= now) {
    return {
      valid: false,
      error: `La licencia venció el ${formatDate(payload.exp)}.`,
      payload,
      daysLeft: 0,
      expired: true
    };
  }

  return {
    valid: true,
    error: '',
    payload,
    daysLeft: Math.max(1, Math.ceil((payload.exp * 1000 - now) / 86400000))
  };
}

export function formatDate(unixSeconds) {
  return new Date(unixSeconds * 1000).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

export function formatDateTime(unixSeconds) {
  return new Date(unixSeconds * 1000).toLocaleString('es-ES', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });
}
