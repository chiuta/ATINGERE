# Componente terțe și licențe

`index.html` este un singur fișier care conține, pe lângă codul propriu (MIT, vezi `LICENSE`), componente terțe.
Fiecare își păstrează licența. Starea verificării este notată sincer mai jos.

## Încorporate în fișier

| Componentă | Rol | Licență | Stare |
|---|---|---|---|
| [liblouis](https://liblouis.io/) 3.2.0 (build emscripten) și tabelele sale braille | Braille grad 2 (10 limbi) | LGPL-2.1-or-later | Licența și sursa sunt publice la liblouis.io. Pentru conformitate LGPL, sursa originală a părților liblouis este disponibilă la adresa proiectului. |
| [pdf.js](https://mozilla.github.io/pdf.js/) 3.11.174 (Mozilla) | Citirea PDF-urilor offline | Apache-2.0 | Verificat. |
| World Braille Usage, ed. a 3-a (UNESCO / Perkins) | Tabele de litere și punctuație pe limbă, transcrise manual | Informații factuale despre coduri braille; sursa este citată | De verificat dacă vrei redistribuire comercială. |
| Tabele de citire pentru chineză și cantoneză (pinyin / jyutping) | Braille din pronunție | **Sursa exactă a datelor nu a fost documentată în proiect** | **De verificat înainte de publicare**: stabilește sursa și licența și completează aici. |
| Tabel kanji → hiragana (derivat din pykakasi) | Japoneză | pykakasi este GPL-3.0, din câte știu; datele derivate pot purta aceleași condiții | **De verificat înainte de publicare.** Dacă licența GPL se aplică, fie declari aplicația GPL-3.0, fie înlocuiești tabelul. |
| Abrevieri de silabe coreene | Coreeană | Din tabelul liblouis `ko-g2` | LGPL, ca liblouis. |

## Descărcate la cerere (nu sunt în fișier)

| Componentă | Când | Licență |
|---|---|---|
| [tesseract.js](https://github.com/naptha/tesseract.js) 5.1.1 și tesseract.js-core | OCR, de pe jsDelivr | Apache-2.0 |
| [tessdata_fast](https://github.com/tesseract-ocr/tessdata_fast) | Datele limbii pentru OCR, de pe GitHub | Apache-2.0 |
| [NLLB-200 distilled 600M](https://huggingface.co/Xenova/nllb-200-distilled-600M) (prin transformers.js) | Traducere automată în română | **CC-BY-NC 4.0 (necomercial), din câte știu** — verifică pagina modelului |

## Surse de cărți menționate în aplicație
Catalogul din aplicație trimite doar la site-uri externe (Project Gutenberg, Wikisource, Internet Archive etc.). Nu include și nu redistribuie conținutul lor.
