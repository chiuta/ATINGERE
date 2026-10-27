// Test 1.3.0: dimensiunea paginii la exportul .BRF (celule pe rând / rânduri pe pagină). Playwright, rețea nefolosită.
// Rulare: node tests/brf-layout.test.mjs   (PW_ROOT=<director cu node_modules/playwright> dacă playwright nu e instalat local)
import {createRequire} from 'module';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const require = createRequire(process.env.PW_ROOT || import.meta.url);
const {chromium} = require('playwright');
const HERE = path.dirname(fileURLToPath(import.meta.url));
const APP = 'file://' + path.join(HERE, '..', 'index.html');
const text = Array.from({length: 60}, (_, i) => 'Capitolul ' + i + '. Aceasta este o propoziție lungă pentru a testa așezarea în pagină a textului braille, cu cuvinte diferite și destul de lungi.').join('\n\n');
const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'atingere-')), 'carte.txt');
fs.writeFileSync(tmp, text);
let fail = 0;
const ok = (c, n, i) => { if (c) console.log('  ok   ' + n); else { fail++; console.log('  FAIL ' + n + ' ' + (i === undefined ? '' : JSON.stringify(i))); } };
const b = await chromium.launch();
const ctx = await b.newContext({acceptDownloads: true, viewport: {width: 1280, height: 900}});
const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(String(e)));
await p.goto(APP); await p.waitForTimeout(800);
await p.setInputFiles('#file', tmp); await p.waitForTimeout(2500);
for (const [w, r] of [[40, 25], [32, 22], [28, 28], [42, 20]]) {
  await p.selectOption('#exW', String(w)); await p.selectOption('#exR', String(r));
  const [dl] = await Promise.all([p.waitForEvent('download'), p.click('#exBrf')]);
  const pages = fs.readFileSync(await dl.path(), 'latin1').split('\f').map(x => x.split('\r\n').filter(l => l.length));
  const maxLine = Math.max(...pages.flat().map(l => l.length)), maxRows = Math.max(...pages.map(x => x.length));
  ok(maxLine <= w && maxRows <= r && pages.length > 1, w + ' × ' + r + ': linii ≤ ' + w + ', rânduri ≤ ' + r, {maxLine, maxRows, pages: pages.length});
}
await p.reload(); await p.waitForTimeout(800);
const v = await p.evaluate(() => [document.getElementById('exW').value, document.getElementById('exR').value]);
ok(v[0] === '42' && v[1] === '20', 'alegerea se reține după reîncărcare', v);
ok(errs.length === 0, 'fără pageerror', errs);
await b.close();
console.log(fail ? fail + ' eșuate' : 'toate trec'); process.exit(fail ? 1 : 0);
