# Jurnal de modificări — ATINGERE

## 1.5.6 — 2026-11-08
Glosar: BRF — «implicit 40 de celule × 25 de rânduri; dimensiunea se poate configura» (în loc de «aici 40 × 25»), în 8 limbi.

## 1.5.3 — 2026-11-03

Destinații «Trimite către…» pentru pașaportul de învățare: adăugate FENARIUM și MENSURA (registrul de aplicații-țintă reinjectat din hub).

## 1.5.2 — 2026-11-03

Pașaport de învățare comun (FFF): „Notează în pașaport”, repetări eșalonate, export/import passport/fff și certificat tipărabil auto-declarat; local, fără server.

## 1.5.1 — 2026-11-02 (reîmprospătare kit)

- Nou (kit): **Sincronizare între dispozitive** (`FFF.sync`) — în dialogul «Transparență» (clic pe versiune → Copie de siguranță): conectezi două dispozitive direct (WebRTC, cod/QR, fără server și fără cont) și își schimbă datele aplicației; cea mai recentă valoare câștigă, secretele (chei API, parole) nu se trimit, ștergerile nu se propagă. Aplicarea trece prin importul kitului (confirmare, chei permise, rollback).
- Nou (kit): **Istoric local — «mașina timpului»** (`FFF.history`) — instantanee automate ale datelor (IndexedDB, fără secrete), diferență față de starea curentă și restaurare reversibilă; «Șterge datele aplicației» șterge și istoricul.
- Module adăugate: `qr`, `p2p`, `sync`, `history` (+~140 KB). Versiunea aplicației nu se schimbă.

## 1.5.1 — 2026-11-02

### Surse actualizate (runda 2, verificat la 2026-11-02)
- Pontes: `pontes.ro/ro/carti/index.php` -> `https://biblioteca.pontes.ro` (adresa „Biblioteca Pontes” din meniul site-ului Pontes).

## 1.5.0 — 2026-11-01

- Corectat: adaptorul «Trimite la…» nu mai aruncă eroare când kitul FFF lipsește (gardian pe fiecare bloc; găsit de testul «fără kit» din CI).

Nou: «Trimite la…» (fff-kit, modulul FFF.bridge) — după orice export de fișier (GPX, ICS, CSV, Markdown) apare butonul «Trimite la…» către aplicațiile compatibile, iar importul de fișiere al aplicației primește plicuri .fff.json trimise de ele, cu confirmare înainte de import. Fără rețea, fără telemetrie.

## 1.4.0 — 2026-10-27 (anterior: 1.3.0)
- Nou, opțional (oprit implicit; fără ele fișierul .BRF/Unicode rămâne identic): **margine stângă** de 0–6 celule goale și **număr de pagină braille** (⠼ + cifre a–j) sus sau jos, în dreapta, la exportul `.BRF`, la textul Unicode și la `.brf`-ul din ecranul de scriere Perkins. Numărul intră în rândurile pe pagină; pe pagină jos, paginile sunt completate cu rânduri goale până la ultimul rând. Se rețin în setări. Conversia braille și tabelele NU s-au atins.
- Texte noi în ro și în cele 7 limbi cu dicționar (en, fr, it, es, pt, de, hu; traduceri automate, neverificate de vorbitori nativi).
- Test nou `tests/brf-margin.test.mjs` (trece): margine 3, numere sus/jos, pagina 10 = `#AJ` / ⠼⠁⠚ (verificat independent pe exportul Unicode), conținut identic, persistență. `tests/brf-layout.test.mjs` trece. `tests/fff-r8.test.mjs` nu rulează în sandbox (axe-core lipsește).
- Nu s-a făcut: grad 2 pentru română (niciun cod standardizat cunoscut; nu se inventează o tabelă), format hârtie / față-verso / margini alternante (programul imprimantei), validare externă (depinde de terți). Grad 2 pentru 10 limbi (liblouis 3.2.0) există din versiuni anterioare; braille grad 2 englez nu s-a atins și nu s-a re-testat cu exemple oficiale UEB.

## 1.3.0 — 2026-10-27 (anterior: 1.2.9)
- Nou: dimensiunea paginii la exportul `.BRF` este configurabilă (celule pe rând 28–42, rânduri pe pagină 20–28; implicit 40 × 25, ca până acum). Alegerea se reține în setări și se aplică și la `.brf`-ul din ecranul de scriere Perkins. Textele noi sunt traduse în cele 8 limbi (traduceri automate, neverificate de vorbitori nativi). Conversia braille, tabelele și lectura tactilă NU s-au schimbat.
- Documentare onestă: „Validare dorită (nefăcută)”: nu există colaborare cu Asociația Nevăzătorilor din România sau cu altă organizație, iar tabelele nu au fost validate de cititori de braille; „Braille grad 2 și BRF: stare”: grad 2 există pentru 10 limbi (liblouis 3.2.0), pentru română nu este implementat (nu se cunoaște un cod standardizat; de verificat).
- „Stare: experimental”; „Offline: complet pentru funcțiile de bază; cere internet pentru datele de limbă OCR, comenzile vocale și traducerea automată” în toate cele 8 README.
- Neimplementat: grad 2 pentru română, setări avansate de embosare (format hârtie, margini, față-verso), validare externă.
