// Test 1.4.0: margine stângă și număr de pagină braille (⠼ + cifre) la exportul .BRF / text Unicode. Playwright, rețea nefolosită.
// Rulare: node tests/brf-margin.test.mjs   (PW_ROOT=<director cu node_modules/playwright> dacă playwright nu e instalat local)
import {createRequire} from 'module';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const require = createRequire(process.env.PW_ROOT || import.meta.url);
const {chromium} = require('playwright');
const HERE = path.dirname(fileURLToPath(import.meta.url));
const APP = 'file://' + path.join(HERE, '..', 'index.html');
const text = Array.from({length: 80}, (_, i) => 'Capitolul ' + i + '. Aceasta este o propoziție lungă pentru a testa așezarea în pagină a textului braille, cu cuvinte diferite și destul de lungi.').join('\n\n');
const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'atingere-')), 'carte.txt');
fs.writeFileSync(tmp, text);
let fail = 0;
const ok = (c, n, i) => { if (c) console.log('  ok   ' + n); else { fail++; console.log('  FAIL ' + n + ' ' + (i === undefined ? '' : JSON.stringify(i))); } };
const b = await chromium.launch();
const ctx = await b.newContext({acceptDownloads: true, viewport: {width: 1280, height: 900}});
const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(String(e)));
await p.goto(APP); await p.waitForTimeout(800);
await p.setInputFiles('#file', tmp); await p.waitForTimeout(2500);
const get = async (sel) => { const [dl] = await Promise.all([p.waitForEvent('download'), p.click(sel)]); return fs.readFileSync(await dl.path(), sel === '#exTxt' ? 'utf8' : 'latin1'); };
const pagesOf = (t, sep) => t.replace(/^﻿/, '').split(sep).map(x => x.split(/\r?\n/).filter((l, i, a) => !(i === a.length - 1 && l === '')));
// referință: implicit (fără margine și fără număr) rămâne ca înainte
await p.selectOption('#exW', '40'); await p.selectOption('#exR', '25'); await p.selectOption('#exM', '0'); await p.selectOption('#exN', 'none');
const base = await get('#exBrf'); const basePages = pagesOf(base, '\f');
ok(basePages.length > 10, 'implicit: mai multe pagini', basePages.length);
// margine 3
await p.selectOption('#exM', '3');
const m3 = pagesOf(await get('#exBrf'), '\f');
ok(m3.every(pg => pg.every(l => l === '' || l.startsWith('   '))) && Math.max(...m3.flat().map(l => l.length)) <= 40, 'margine 3: fiecare rând nenul începe cu 3 spații, lățime totală ≤ 40');
ok(m3.every(pg => pg.length <= 25), 'margine 3: ≤ 25 rânduri');
await p.selectOption('#exM', '0');
// număr sus
await p.selectOption('#exN', 'top');
const top = pagesOf(await get('#exBrf'), '\f');
ok(top[0][0].trim() === '#A' && top[0][0].length === 40, 'număr sus: pagina 1 = „#A” aliniat la dreapta (lungime 40)', top[0][0]);
ok(top[9][0].trim() === '#AJ' && top[11][0].trim() === '#AB', 'pagina 10 = „#AJ”, pagina 12 = „#AB” (⠼ + a-j)', [top[9][0], top[11][0]]);
ok(top.every(pg => pg.length <= 25), 'număr sus: ≤ 25 rânduri pe pagină (numărul intră în cele 25)');
// număr jos
await p.selectOption('#exN', 'bottom');
const bot = pagesOf(await get('#exBrf'), '\f');
ok(bot.every((pg, i) => pg.length === 25 && /^ +#/.test(pg[24]) && pg[24].trim().length >= 2), 'număr jos: fiecare pagină are exact 25 de rânduri, ultimul = număr', bot.map(x => x.length).slice(0, 3));
ok(bot[0][24].trim() === '#A' && bot[9][24].trim() === '#AJ', 'număr jos: #A, #AJ');
// independent: exportul Unicode conține ⠼⠁ (U+283C U+2801) pe prima linie, ⠼⠁⠚ pentru 10
await p.selectOption('#exN', 'top');
const uni = pagesOf(await get('#exTxt'), '\n\n');
const strip = (x) => x.replace(/\u2800/g, '');
const first = strip(uni[0][0]);
ok(first === '⠼⠁', 'Unicode: pagina 1 = ⠼⠁ (dots 3456 + dot 1)', first.split('').map(c => c.codePointAt(0).toString(16)));
ok(strip(uni[9][0]) === '\u283C\u2801\u281A', 'Unicode: pagina 10 = ⠼⠁⠚ (j = U+281A)', strip(uni[9][0]).split('').map(c => c.codePointAt(0).toString(16)));
// textul din pagini rămâne la fel (fără marjă/număr): aceleași cuvinte, în aceeași ordine
await p.selectOption('#exM', '2'); await p.selectOption('#exN', 'bottom');
const dec = pagesOf(await get('#exBrf'), '\f').map(pg => pg.slice(0, -1)).flat().join('').replace(/ /g, '');
const plain = basePages.flat().join('').replace(/ /g, '');
ok(dec === plain, 'conținutul braille e același (fără spații), doar așezat diferit', [dec.length, plain.length]);
await p.reload(); await p.waitForTimeout(800);
const v = await p.evaluate(() => [document.getElementById('exM').value, document.getElementById('exN').value]);
ok(v[0] === '2' && v[1] === 'bottom', 'alegerile se rețin după reîncărcare', v);
ok(errs.length === 0, 'fără pageerror', errs);
await b.close();
console.log(fail ? fail + ' eșuate' : 'toate trec'); process.exit(fail ? 1 : 0);
