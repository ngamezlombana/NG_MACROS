import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync, readdirSync, existsSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (name) => readFileSync(join(ROOT, name), 'utf8');

const EXPECTED_IDS = [
  'O8101', 'O8103', 'O8104', 'O8105', 'O8106', 'O8107',
  'O8111', 'O8112', 'O8110', 'O8108', 'O8109'
];

function loadMacroData() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(read('macros_data.js'), sandbox);
  return sandbox;
}

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}(`);
  assert.notEqual(start, -1, `No se encontró la función ${name}`);
  let depth = 0;
  let started = false;
  for (let i = start; i < source.length; i++) {
    const ch = source[i];
    if (ch === '{') { depth++; started = true; }
    else if (ch === '}') {
      depth--;
      if (started && depth === 0) return source.slice(start, i + 1);
    }
  }
  throw new Error(`Función ${name} sin cierre`);
}

function buildGenerator(mode) {
  const html = read('index.html');
  const names = ['formatCNCValue', 'buildProgramHeader', 'buildCallerGCode', 'buildExpandedGCode', 'buildGCodeString'];
  const code = names.map(n => extractFunction(html, n)).join('\n\n');
  const context = {
    activeMacro: null,
    cncDialect: 'fanuc',
    gcodeMode: mode,
    outputOptions: { g21: true, g54: true },
    Number, isFinite, parseFloat, parseInt, console
  };
  vm.createContext(context);
  vm.runInContext(code, context);
  return context;
}

test('parse_macros.py genera datos consistentes', () => {
  const result = spawnSync('python3', ['parse_macros.py'], { cwd: ROOT, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);

  const sandbox = loadMacroData();
  const macros = sandbox.MACROS_DATA;
  const categories = sandbox.MACRO_CATEGORIES_DATA;

  assert.ok(Array.isArray(macros));
  assert.equal(macros.length, 11);
  const sortedIds = macros.map(m => m.id).sort();
  assert.equal(sortedIds.join(','), [...EXPECTED_IDS].sort().join(','));

  const ncFiles = readdirSync(ROOT).filter(f => f.toLowerCase().endsWith('.nc'));
  assert.equal(ncFiles.length, macros.length, 'Cada .nc debe tener entrada en macros_data.js');

  for (const macro of macros) {
    assert.ok(existsSync(join(ROOT, macro.filename)), `Falta ${macro.filename}`);
    assert.ok(macro.title && macro.subtitle, `${macro.id} sin metadatos`);
    assert.ok(macro.variables.length > 0, `${macro.id} sin variables`);
    assert.ok(macro.full_content.length > 100, `${macro.id} sin contenido`);

    const varNums = macro.variables.map(v => v.num);
    assert.equal(new Set(varNums).size, varNums.length, `${macro.id} tiene variables duplicadas`);
    for (const v of macro.variables) {
      assert.ok(Number.isFinite(v.value), `${macro.id} #${v.num} sin valor numérico`);
      assert.ok(v.letter, `${macro.id} #${v.num} sin letra de dirección`);
      assert.ok(v.comment, `${macro.id} #${v.num} sin comentario`);
    }
  }

  assert.deepEqual(Object.keys(categories).sort(), ['cajeras', 'patrones_agujeros', 'ranuras']);
  for (const [key, cat] of Object.entries(categories)) {
    assert.ok(cat.title && cat.icon && cat.items.length > 0, `Categoría ${key} incompleta`);
    for (const item of cat.items) {
      const macro = macros.find(m => m.id === item.id);
      assert.ok(macro, `Categoría ${key} referencia macro inexistente ${item.id}`);
      assert.equal(item.name, macro.title);
    }
  }
});

test('archivos .nc tienen estructura Fanuc segura', () => {
  const ncFiles = readdirSync(ROOT).filter(f => f.toLowerCase().endsWith('.nc'));
  for (const file of ncFiles) {
    const content = readFileSync(join(ROOT, file), 'utf8');
    assert.ok(!content.includes('\r'), `${file} contiene CRLF/CR`);
    assert.ok(!content.includes('%\\n'), `${file} contiene el literal %\\n`);
    assert.ok(content.startsWith('%\n'), `${file} no inicia con %`);
    assert.ok(content.trimEnd().endsWith('%'), `${file} no termina con %`);

    const lines = content.split('\n').map(l => l.trim());
    assert.equal(lines.filter(l => l === '%').length, 2, `${file} debe tener exactamente dos %`);
    assert.ok(lines.some(l => /^O81\d\d\b/.test(l)), `${file} sin número de programa`);
    assert.ok(lines.some(l => /\bM99\b/.test(l)), `${file} sin M99`);
    assert.ok(!lines.some(l => /^#3000\s*=\s*0\b/.test(l)), `${file} usa alarma 0`);

    const labels = new Set(lines.filter(l => /^N\d+\b/.test(l)).map(l => l.match(/^N(\d+)/)[1]));
    const targets = lines.filter(l => /^GOTO\d+/.test(l)).map(l => l.match(/^GOTO(\d+)/)[1]);
    for (const target of targets) {
      assert.ok(labels.has(target), `${file} salta a N${target} inexistente`);
    }
  }
});

test('index.html no tiene JavaScript inválido', () => {
  const html = read('index.html');
  const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  assert.ok(scripts.length >= 1);
  const dir = mkdtempSync(join(tmpdir(), 'ng-macros-'));
  scripts.forEach((code, i) => {
    const file = join(dir, `inline-${i}.js`);
    writeFileSync(file, code);
    const result = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
    assert.equal(result.status, 0, `Script inline ${i}: ${result.stderr}`);
  });
});

test('index.html es offline y no filtra secretos de licencia', () => {
  const html = read('index.html');
  assert.ok(!/https?:\/\/(cdn\.tailwindcss\.com|cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com)/.test(html),
    'index.html todavía carga assets desde CDN');
  assert.ok(!/nestor69|ADMIN_HASH|LICENSING_SALT|ADMIN_SALT/.test(html),
    'index.html todavía contiene credenciales de licencia embebidas');
  assert.ok(html.includes('service-worker.js'), 'index.html no registra el service worker');
  assert.ok(html.includes('vendor/fonts.css'), 'index.html no usa las fuentes locales');
});

test('todos los IDs usados por getElementById existen', () => {
  const html = read('index.html');
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
  const refs = new Set([...html.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)].map(m => m[1]));
  // IDs opcionales de telemetría que pueden no renderizarse en todos los layouts.
  const optional = new Set(['droFVal', 'droSVal', 'droXVal', 'droYVal', 'droZVal', 'threeCanvasContainer']);
  const missing = [...refs].filter(id => !ids.has(id) && !optional.has(id));
  assert.deepEqual(missing, [], `IDs referenciados pero inexistentes: ${missing.join(', ')}`);
});

test('PWA: manifest, icono y app shell existen', () => {
  const manifest = JSON.parse(read('manifest.json'));
  assert.equal(manifest.start_url, './index.html');
  assert.equal(manifest.display, 'standalone');
  assert.ok(manifest.icons.length >= 1);
  for (const icon of manifest.icons) {
    assert.ok(existsSync(join(ROOT, icon.src)), `Falta el icono ${icon.src}`);
  }

  const sw = read('service-worker.js');
  const shell = [...sw.matchAll(/'(\.\/[^']*)'/g)].map(m => m[1]);
  assert.ok(shell.includes('./index.html'));
  for (const entry of shell) {
    const target = entry === './' ? 'index.html' : entry.replace(/^\.\//, '');
    assert.ok(existsSync(join(ROOT, target)), `App shell inexistente: ${entry}`);
  }
});

test('generador G65 produce un programa principal válido', () => {
  const sandbox = loadMacroData();
  const macro = sandbox.MACROS_DATA.find(m => m.id === 'O8101');
  const ctx = buildGenerator('caller');
  ctx.activeMacro = macro;

  const gcode = ctx.buildGCodeString();
  assert.ok(gcode.startsWith('%\n'), 'El programa no inicia con %');
  assert.ok(gcode.trimEnd().endsWith('%'), 'El programa no termina con %');
  assert.ok(gcode.includes('G21'), 'Falta G21');
  assert.ok(gcode.includes('G54'), 'Falta G54');
  assert.ok(gcode.includes('G65 P8101'), 'Falta la llamada G65');
  assert.ok(gcode.includes('X50.0') && gcode.includes('F250.0'), 'Faltan argumentos de la macro');
  assert.ok(gcode.includes('M30'), 'Falta M30');
  assert.ok(!gcode.includes('undefined'), 'El G-code contiene undefined');
  assert.equal((gcode.match(/%/g) || []).length, 2, 'Debe haber exactamente dos %');
});

test('generador expandido inserta parámetros y elimina M99/O', () => {
  const sandbox = loadMacroData();
  const macro = JSON.parse(JSON.stringify(sandbox.MACROS_DATA.find(m => m.id === 'O8101')));
  macro.variables.find(v => v.num === 24).value = 77.5;

  const ctx = buildGenerator('expanded');
  ctx.activeMacro = macro;
  const gcode = ctx.buildGCodeString();

  assert.ok(!/^G65\b/m.test(gcode), 'El modo expandido no debe contener G65');
  assert.ok(!/^M99\b/m.test(gcode), 'El modo expandido no debe contener M99');
  // El encabezado conserva el número de programa una sola vez; el cuerpo O... debe desaparecer.
  assert.equal((gcode.match(/^O81\d\d\b/gm) || []).length, 1, 'El modo expandido duplica el número O');
  assert.ok(gcode.includes('#24 = 77.5'), 'El parámetro editado no se sustituyó');
  assert.ok(!gcode.includes('#24 = 50.0'), 'Se conservó el valor original del parámetro');
  assert.ok(gcode.includes('GOTO9999'), 'Se perdió el salto a fin de programa');
  assert.ok(gcode.includes('M30'), 'Falta M30');
  assert.ok(gcode.trimEnd().endsWith('%'), 'El programa no termina con %');
});
