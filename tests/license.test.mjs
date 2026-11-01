import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  generateKeyPair,
  createLicensePayload,
  signLicense,
  verifyLicense,
  b64urlEncode,
  publicJwkForEmbedding
} from '../tools/license-lib.mjs';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const read = name => readFileSync(join(ROOT, name), 'utf8');

test('firma y verifica una licencia vigente', async () => {
  const { privateJwk, publicJwk } = await generateKeyPair();
  assert.equal(publicJwk.kty, 'EC');
  assert.equal(publicJwk.crv, 'P-256');
  assert.ok(publicJwk.x && publicJwk.y);
  assert.ok(!('d' in publicJwk), 'La clave pública no debe contener la parte privada');

  const payload = createLicensePayload({ sub: 'Taller Prueba', days: 30, plan: 'pro' });
  const token = await signLicense(privateJwk, payload);
  assert.equal(token.split('.').length, 2);

  const result = await verifyLicense(publicJwk, token);
  assert.equal(result.valid, true);
  assert.equal(result.payload.sub, 'Taller Prueba');
  assert.equal(result.payload.plan, 'pro');
  assert.ok(result.daysLeft >= 29 && result.daysLeft <= 30);
});

test('rechaza una licencia manipulada', async () => {
  const { privateJwk, publicJwk } = await generateKeyPair();
  const token = await signLicense(privateJwk, createLicensePayload({ sub: 'Original', days: 10 }));
  const [payloadB64, signature] = token.split('.');
  const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8'));
  payload.sub = 'Manipulado';
  const tampered = `${b64urlEncode(Buffer.from(JSON.stringify(payload)))}.${signature}`;

  const result = await verifyLicense(publicJwk, tampered);
  assert.equal(result.valid, false);
  assert.match(result.error, /firma/i);
});

test('rechaza una licencia vencida', async () => {
  const { privateJwk, publicJwk } = await generateKeyPair();
  const oldNow = Date.now() - 40 * 86400 * 1000;
  const payload = createLicensePayload({ sub: 'Vencida', days: 30, now: oldNow });
  const token = await signLicense(privateJwk, payload);

  const result = await verifyLicense(publicJwk, token);
  assert.equal(result.valid, false);
  assert.equal(result.expired, true);
  assert.match(result.error, /venció/i);
});

test('rechaza una licencia de otra aplicación', async () => {
  const { privateJwk, publicJwk } = await generateKeyPair();
  const payload = createLicensePayload({ sub: 'Otra app', days: 10 });
  payload.app = 'otra-aplicacion';
  const token = await signLicense(privateJwk, payload);

  const result = await verifyLicense(publicJwk, token);
  assert.equal(result.valid, false);
  assert.match(result.error, /aplicación/i);
});

test('la clave pública embebida coincide con tools/license-public-key.json', () => {
  const html = read('index.html');
  const match = html.match(/const LICENSE_PUBLIC_KEY = (\{[^;]+\});/);
  assert.ok(match, 'index.html no declara LICENSE_PUBLIC_KEY');
  const embedded = JSON.parse(match[1]);
  assert.equal(embedded.kty, 'EC');
  assert.equal(embedded.crv, 'P-256');
  assert.ok(embedded.x && embedded.y);
  assert.ok(!('d' in embedded), 'index.html no debe contener la clave privada');

  const expected = JSON.parse(read('tools/license-public-key.json'));
  assert.deepEqual(embedded, publicJwkForEmbedding(expected));

  assert.ok(html.includes('data-license-required'), 'Falta el bloqueo de exportación sin licencia');
  assert.ok(html.includes('crypto.subtle.verify'), 'La app no verifica la firma');

  // La app puede mencionar la ruta de la clave privada en comentarios, pero
  // nunca debe incluir el material secreto (campo "d" de la JWK).
  assert.ok(!/"d"\s*:/.test(html), 'index.html no debe contener el campo privado "d" de una JWK');
  const privateKeyPath = join(ROOT, 'tools', 'license-private-key.json');
  if (existsSync(privateKeyPath)) {
    const privateJwk = JSON.parse(read('tools/license-private-key.json'));
    assert.ok(privateJwk.d, 'La clave privada de desarrollo no tiene campo d');
    assert.ok(!html.includes(privateJwk.d), 'index.html filtra el valor de la clave privada');
  }
});

test('el generador HTML contiene firma y verificación', () => {
  const html = read('generador-licencias.html');
  assert.ok(html.includes('crypto.subtle.sign'), 'El generador no firma licencias');
  assert.ok(html.includes('crypto.subtle.verify'), 'El generador no verifica licencias');
  assert.ok(html.includes('generateLicense'), 'Falta la generación de licencia');
  assert.ok(html.includes('license-private-key.json'), 'No se documenta la clave privada');
});

test('el acceso de propietario usa PBKDF2 y no guarda la contraseña en claro', () => {
  const html = read('index.html');
  const saltMatch = html.match(/const OWNER_PASSWORD_SALT = '([^']+)';/);
  const hashMatch = html.match(/const OWNER_PASSWORD_HASH = '([^']+)';/);
  assert.ok(saltMatch, 'Falta OWNER_PASSWORD_SALT');
  assert.ok(hashMatch, 'Falta OWNER_PASSWORD_HASH');
  assert.match(saltMatch[1], /^[A-Za-z0-9_-]+$/);
  assert.match(hashMatch[1], /^[A-Za-z0-9_-]{43}$/);
  assert.ok(html.includes('PBKDF2'), 'La contraseña de propietario no usa PBKDF2');
  assert.ok(html.includes('activateOwnerAccess'), 'Falta la función de acceso del propietario');
  assert.ok(html.includes('ownerAccessForm'), 'Falta el formulario de contraseña de propietario');
  assert.ok(html.includes('ng_owner_unlock_v1'), 'Falta la marca de acceso de propietario');

  // La contraseña en claro nunca debe viajar en el HTML publicado.
  assert.ok(!/nestor69/i.test(html), 'index.html contiene la contraseña de propietario en claro');
});

test('el generador de hash de propietario produce constantes válidas', () => {
  const result = spawnSync(process.execPath, [
    'tools/owner-password.mjs',
    'clave-de-prueba-larga',
    '--salt', 'AAAAAAAAAAAAAAAAAAAAAA'
  ], { cwd: ROOT, encoding: 'utf8' });

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /OWNER_PASSWORD_SALT = 'AAAAAAAAAAAAAAAAAAAAAA'/);
  assert.match(result.stdout, /OWNER_PASSWORD_HASH = '[A-Za-z0-9_-]{43}'/);
  assert.match(result.stdout, /OWNER_PASSWORD_ITERATIONS = 210000/);
});

test('CLI: keygen, issue y verify funcionan con archivos temporales', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ng-license-'));
  const privateKey = join(dir, 'private.json');
  const publicKey = join(dir, 'public.json');
  const licenseFile = join(dir, 'license.json');

  const keygen = spawnSync(process.execPath, [
    'tools/license-generator.mjs', 'keygen',
    '--private', privateKey,
    '--public', publicKey
  ], { cwd: ROOT, encoding: 'utf8' });
  assert.equal(keygen.status, 0, keygen.stderr);

  const issue = spawnSync(process.execPath, [
    'tools/license-generator.mjs', 'issue',
    '--private', privateKey,
    '--days', '10',
    '--sub', 'CLI Test',
    '--base', 'https://example.com/index.html',
    '--out', licenseFile
  ], { cwd: ROOT, encoding: 'utf8' });
  assert.equal(issue.status, 0, issue.stderr);

  const license = JSON.parse(readFileSync(licenseFile, 'utf8'));
  assert.ok(license.token);
  assert.match(license.url, /^https:\/\/example\.com\/index\.html\?lic=/);
  assert.equal(license.payload.sub, 'CLI Test');

  const verify = spawnSync(process.execPath, [
    'tools/license-generator.mjs', 'verify',
    '--public', publicKey,
    '--token', license.token
  ], { cwd: ROOT, encoding: 'utf8' });
  assert.equal(verify.status, 0, verify.stderr);
  const result = JSON.parse(verify.stdout);
  assert.equal(result.valid, true);
  assert.equal(result.payload.sub, 'CLI Test');
});
