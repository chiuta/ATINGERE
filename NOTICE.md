# Componente terțe și licențe

`index.html` este un singur fișier care conține, pe lângă codul propriu (MIT, vezi `LICENSE`), componente terțe.
Fiecare își păstrează licența. Starea verificării este notată sincer mai jos.

Licența MIT din `LICENSE` se aplică codului scris pentru ATINGERE. Componentele terțe încorporate sau descărcate la cerere își păstrează licențele proprii (mai jos).

## Încorporate în fișier

| Componentă | Rol | Licență | Stare |
|---|---|---|---|
| [liblouis](https://liblouis.io/) 3.2.0 (build emscripten) și tabelele sale braille | Braille grad 2 (10 limbi) | LGPL-2.1-or-later | Licența și sursa sunt publice la liblouis.io. Pentru conformitate LGPL, sursa originală a părților liblouis este disponibilă la adresa proiectului. |
| [pdf.js](https://mozilla.github.io/pdf.js/) 3.11.174 (Mozilla) | Citirea PDF-urilor offline | Apache-2.0 | Verificat. |
| World Braille Usage, ed. a 3-a (UNESCO / Perkins) | Tabele de litere și punctuație pe limbă, transcrise manual | Informații factuale despre coduri braille; sursa este citată | De verificat dacă vrei redistribuire comercială. |
| Tabele de citire pentru chineză și cantoneză (pinyin / jyutping) | Braille din pronunție | **Sursa exactă a datelor nu a fost documentată în proiect** | **În curs de rezolvare (decizia aparține autorului).** Stabilește sursa și licența și completează aici. Până atunci tabelele pot fi dezactivate din Setări. |
| Tabel kanji → hiragana (derivat din pykakasi) | Japoneză | pykakasi este GPL-3.0, din câte știu; datele derivate pot purta aceleași condiții | **În curs de rezolvare (decizia aparține autorului).** Dacă licența GPL se aplică, fie declari aplicația GPL-3.0, fie înlocuiești tabelul cu date permisive/din domeniul public, fie scoți limba. Până atunci tabelul (și cel chinezesc/cantonez) poate fi dezactivat din Setări; licența MIT nu a fost schimbată. |
| Abrevieri de silabe coreene | Coreeană | Din tabelul liblouis `ko-g2` | LGPL, ca liblouis. |

## Vendorizate în depozit (`vendor/`, servite din aceeași origine; fără CDN la runtime)

Fișierele sunt copiate bit-cu-bit din pachetele npm cu versiunea fixată (același conținut pe care îl servește jsDelivr). Scripturile se încarcă cu `integrity` (SRI sha384) din `index.html`; sumele SHA-256 de mai jos permit verificarea independentă (`npm pack <pachet>@<versiune>`).

| Componentă | Fișier | Licență | SHA-256 |
|---|---|---|---|
| [tesseract.js](https://github.com/naptha/tesseract.js) 5.1.1 | `vendor/tesseract.js@5.1.1/tesseract.min.js` | Apache-2.0 | `a8e29918d098b2b06e1012bdaeffb4aec0445c5d5654709023e0bd1f442a80e8` |
| tesseract.js 5.1.1 (worker) | `vendor/tesseract.js@5.1.1/worker.min.js` | Apache-2.0 | `aca1229639fc9907d86f96e825955a2b7c5716d17f3bc3acd71f9c7ab66181fc` |
| [tesseract.js-core](https://github.com/naptha/tesseract.js-core) 5.1.0 (build SIMD, doar LSTM) | `vendor/tesseract.js-core@5.1.0/tesseract-core-simd-lstm.wasm.js` | Apache-2.0 | `18797eef96bab787636c40b53efaa445cf5ca1c97abd735c4fd8dc3d03652959` |
| [transformers.js](https://github.com/huggingface/transformers.js) 3.8.1 (`@huggingface/transformers`) | `vendor/transformers@3.8.1/transformers.min.js` | Apache-2.0 | `aa5002b70e789798da263f5f99c62bd3e8fcd0c119258a493c40c180648365fa` |
| onnxruntime-web 1.22.0-dev.20250409-89f8206ba4 (încărcătorul JS din pachetul transformers.js) | `vendor/transformers@3.8.1/ort-wasm-simd-threaded.jsep.mjs` | MIT | `08fb86ec433c78bfb032c5d84a68b8e8e5a8d81268fa39e24314179a5767a5b9` |

Textele licențelor sunt lângă fișiere (`LICENSE`, `LICENSE.md`). Motorul OCR vendorizat este build-ul cu SIMD (WebAssembly SIMD: Chrome 91+, Firefox 89+, Safari 16.4+); fără SIMD, OCR nu pornește.

## Descărcate la cerere, cu hash fixat (verificate înainte de folosire)

| Componentă | Sursă (imuabilă) | Licență | Verificare |
|---|---|---|---|
| ONNX Runtime Web `ort-wasm-simd-threaded.jsep.wasm` (21,6 MB) | `https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/dist/ort-wasm-simd-threaded.jsep.wasm` (versiune npm fixată) | MIT | SHA-256 `c46655e8a94afc45338d4cb2b840475f88e5012d524509916e505079c00bfa39` verificat în pagină (`fetch` → `crypto.subtle.digest`); la nepotrivire se refuză. CSP permite doar această cale. |
| [tessdata_fast](https://github.com/tesseract-ocr/tessdata_fast) (19 limbi) | `https://raw.githubusercontent.com/tesseract-ocr/tessdata_fast/87416418657359cb625c412a48b6e1d6d41c29bd/<limba>.traineddata` (commit fixat) | Apache-2.0 | SHA-256 pe limbă (tabelul `TESS_SHA` din `index.html`); datele ajung în cache doar după verificare. CSP permite doar acest commit. |

## Descărcate la cerere, fără hash fixat

| Componentă | Când | Licență | Notă |
|---|---|---|---|
| [NLLB-200 distilled 600M](https://huggingface.co/Xenova/nllb-200-distilled-600M) (prin transformers.js) | Traducere automată în română | **CC-BY-NC 4.0 (necomercial), din câte știu** — verifică pagina modelului | Greutățile și tokenizatorul sunt date (nu cod), dar revizia nu este fixată pe un commit și nu are hash verificat: depozitul Hugging Face nu era accesibil la pregătirea acestei versiuni. CSP restrânge cererea la `huggingface.co/Xenova/nllb-200-distilled-600M/` (și la CDN-urile HF, `*.hf.co` / `*.huggingface.co`, la care Hugging Face redirecționează fișierele mari). |

## Surse de cărți menționate în aplicație
Catalogul din aplicație trimite doar la site-uri externe (Project Gutenberg, Wikisource, Internet Archive etc.). Nu include și nu redistribuie conținutul lor.
