#!/usr/bin/env node
/**
 * Genera el salt y el hash PBKDF2 para la contraseña de propietario.
 *
 * Uso:
 *   node tools/owner-password.mjs "mi-contraseña-larga"
 *   node tools/owner-password.mjs "mi-contraseña-larga" --salt <salt-base64url>
 *
 * Copia OWNER_PASSWORD_SALT y OWNER_PASSWORD_HASH en index.html.
 * La contraseña no se guarda: solo se publica su hash con salt.
 */

import { randomBytes, pbkdf2Sync } from 'node:crypto';

const args = process.argv.slice(2);
const password = args[0] && !args[0].startsWith('--') ? args[0] : '';
const saltIndex = args.indexOf('--salt');

if (!password) {
  console.error('Uso: node tools/owner-password.mjs "mi-contraseña-larga" [--salt <salt-base64url>]');
  process.exitCode = 1;
} else {
  const iterations = 210000;
  let salt;
  if (saltIndex !== -1 && args[saltIndex + 1]) {
    salt = Buffer.from(args[saltIndex + 1], 'base64url');
  } else {
    salt = randomBytes(16);
  }

  const hash = pbkdf2Sync(password, salt, iterations, 32, 'sha256');
  console.log('Copia estos valores en index.html:');
  console.log('');
  console.log(`    const OWNER_PASSWORD_SALT = '${salt.toString('base64url')}';`);
  console.log(`    const OWNER_PASSWORD_HASH = '${hash.toString('base64url')}';`);
  console.log(`    const OWNER_PASSWORD_ITERATIONS = ${iterations};`);
  console.log('');
  console.log('Usa una contraseña larga y única. En una app estática el hash es público');
  console.log('y puede ser atacado por fuerza bruta; no sustituye a un servidor.');
}
