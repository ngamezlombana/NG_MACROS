#!/usr/bin/env node
/**
 * Generador de licencias NG_MACROS.
 *
 * Uso:
 *   node tools/license-generator.mjs keygen
 *   node tools/license-generator.mjs public-key
 *   node tools/license-generator.mjs issue --days 30 --sub "Cliente" --base "https://mi-sitio/index.html"
 *   node tools/license-generator.mjs verify --token "...."
 *
 * La clave privada se guarda por defecto en tools/license-private-key.json y
 * está excluida de Git. Haz una copia de seguridad: sin ella no se pueden
 * emitir nuevas licencias.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  generateKeyPair,
  createLicensePayload,
  signLicense,
  verifyLicense,
  formatDateTime,
  publicJwkForEmbedding
} from './license-lib.mjs';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DEFAULT_PRIVATE = join(ROOT, 'tools', 'license-private-key.json');
const DEFAULT_PUBLIC = join(ROOT, 'tools', 'license-public-key.json');

function getArg(name, fallback = null) {
  const index = process.argv.indexOf(name);
  if (index === -1) return fallback;
  return process.argv[index + 1] ?? fallback;
}

function hasFlag(name) {
  return process.argv.includes(name);
}

function readJson(file) {
  return JSON.parse(readFileSync(file, 'utf8'));
}

function writeJson(file, value) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function printHelp() {
  console.log(`NG_MACROS - Generador de licencias

Comandos:
  keygen [--force] [--private <ruta>] [--public <ruta>]
      Crea un par de claves ECDSA P-256. La privada no se sube a Git.

  public-key [--public <ruta>]
      Muestra la clave pública JWK lista para embeber en index.html.

  issue --days <n> [--sub "Cliente"] [--plan pro] [--base "https://.../index.html"]
        [--private <ruta>] [--out <archivo.json>]
      Firma una licencia y muestra el token y el enlace para compartir.

  verify --token "<token>" [--public <ruta>]
      Verifica una licencia con la clave pública.

Ejemplos:
  node tools/license-generator.mjs keygen
  node tools/license-generator.mjs issue --days 30 --sub "Taller Pérez" \\
    --base "https://ngamezlombana.github.io/NG_MACROS/index.html"
  node tools/license-generator.mjs verify --token "eyJ..."
`);
}

async function keygen() {
  const privatePath = resolve(getArg('--private', DEFAULT_PRIVATE));
  const publicPath = resolve(getArg('--public', DEFAULT_PUBLIC));

  if ((existsSync(privatePath) || existsSync(publicPath)) && !hasFlag('--force')) {
    console.error('Ya existen claves. Usa --force solo si quieres reemplazarlas.');
    console.error(`  Privada: ${privatePath}`);
    console.error(`  Pública: ${publicPath}`);
    process.exitCode = 1;
    return;
  }

  const { privateJwk, publicJwk } = await generateKeyPair();
  writeJson(privatePath, privateJwk);
  writeJson(publicPath, publicJwk);

  console.log('Par de claves creado.');
  console.log(`  Privada: ${privatePath}`);
  console.log(`  Pública: ${publicPath}`);
  console.log('');
  console.log('IMPORTANTE: guarda una copia segura de la clave privada y no la subas a Git.');
  console.log('La clave pública ya está lista para embeber en index.html.');
}

function printPublicKey() {
  const publicPath = resolve(getArg('--public', DEFAULT_PUBLIC));
  if (!existsSync(publicPath)) {
    console.error(`No existe la clave pública: ${publicPath}`);
    process.exitCode = 1;
    return;
  }
  const publicJwk = publicJwkForEmbedding(readJson(publicPath));
  console.log(JSON.stringify(publicJwk));
}

async function issue() {
  const privatePath = resolve(getArg('--private', DEFAULT_PRIVATE));
  if (!existsSync(privatePath)) {
    console.error(`No existe la clave privada: ${privatePath}`);
    console.error('Ejecuta primero: node tools/license-generator.mjs keygen');
    process.exitCode = 1;
    return;
  }

  const days = Number(getArg('--days', '30'));
  const sub = getArg('--sub', 'Cliente');
  const plan = getArg('--plan', 'pro');
  const base = getArg('--base', '');
  const out = getArg('--out', '');

  const payload = createLicensePayload({ sub, days, plan });
  const token = await signLicense(readJson(privatePath), payload);
  const url = base ? `${base}${base.includes('?') ? '&' : '?'}lic=${encodeURIComponent(token)}` : '';

  console.log('Licencia generada');
  console.log(`  Cliente: ${payload.sub}`);
  console.log(`  Plan: ${payload.plan}`);
  console.log(`  Emitida: ${formatDateTime(payload.iat)}`);
  console.log(`  Vence: ${formatDateTime(payload.exp)}`);
  console.log(`  Días: ${days}`);
  console.log('');
  console.log('Token:');
  console.log(token);
  if (url) {
    console.log('');
    console.log('Enlace para compartir:');
    console.log(url);
  }

  if (out) {
    const outPath = resolve(out);
    writeJson(outPath, { token, url, payload, createdAt: new Date().toISOString() });
    console.log('');
    console.log(`Archivo guardado: ${outPath}`);
  }
}

async function verify() {
  const token = getArg('--token', process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : '');
  const publicPath = resolve(getArg('--public', DEFAULT_PUBLIC));

  if (!token) {
    console.error('Falta el token. Usa: --token "<token>"');
    process.exitCode = 1;
    return;
  }
  if (!existsSync(publicPath)) {
    console.error(`No existe la clave pública: ${publicPath}`);
    process.exitCode = 1;
    return;
  }

  const result = await verifyLicense(readJson(publicPath), token);
  console.log(JSON.stringify(result, null, 2));
  if (!result.valid) process.exitCode = 1;
}

const command = process.argv[2];

if (!command || command === '--help' || command === '-h') {
  printHelp();
} else if (command === 'keygen') {
  await keygen();
} else if (command === 'public-key') {
  printPublicKey();
} else if (command === 'issue') {
  await issue();
} else if (command === 'verify') {
  await verify();
} else {
  console.error(`Comando desconocido: ${command}`);
  printHelp();
  process.exitCode = 1;
}
