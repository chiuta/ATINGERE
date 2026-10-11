# ATINGERE

**Live / demo:** https://chiuta.github.io/ATINGERE/

![ATINGERE — captură de ecran / screenshot](screenshot.png)

Convertește orice carte (EPUB, TXT, HTML, DOCX, PDF, BRF, imagini) în braille tactil pentru persoane surdo-oarbe sau în audiobook pentru nevăzători. Un singur fișier HTML, 137 de limbi și coduri (braille grad 1); funcțiile OCR, comenzi vocale și traducere au nevoie de internet.

**Orice carte, în braille tactil sau în audiobook — dintr-un singur fișier HTML, fără cont, fără server.**

*One-file, offline web app that turns a book into touch-screen braille (vibration, for deaf-blind readers) or a TTS audiobook (for blind readers). 130+ languages, Romanian first.*

**Aplicația live:** momentan nu există o adresă publică confirmată (GitHub Pages nu este activat sau adresa nu a fost verificată la audit). Descarcă `index.html` și deschide-l în browser; merge offline pentru funcțiile de bază.

## Pentru cine
- **Persoane surdo-oarbe:** cartea devine braille pe ecranul tactil. Fiecare celulă are 6 puncte; punctele ridicate se simt prin vibrație sub deget. Există și vibrații automate, în ritm de celule.
- **Persoane nevăzătoare:** cartea devine audiobook cu sinteza vocală a dispozitivului, cu reluare automată, viteză reglabilă și temporizator de somn.

## Ce face
- **Formate de intrare:** EPUB, TXT, HTML, DOCX, PDF (cu text, offline), BRF/BRL și texte Unicode braille, PDF-uri scanate și imagini PNG/JPG/WebP (prin OCR).
- **Braille:** peste 130 de limbi; română extinsă, cu cod propriu. Grad 1 pentru toate, **grad 2** pentru 10 limbi (en, fr, de, pt, no, da, hu, ga, cy, ur) prin liblouis.
- **Citire tactilă:** celulă, cuvânt, paragraf, capitol; două celule alăturate; mod învățare cu teste; scriere Perkins.
- **Instrumente:** semne de carte, căutare, repetarea paragrafului, rezumat extractiv local, pagina învățătorului (text + braille), oprire de urgență (scuturare, Esc), contrast mare, text mărit, comenzi vocale (în română).
- **Export:** `.brf` (40 × 25) și text Unicode braille.
- **Catalog:** surse gratuite de cărți în română și în alte limbi, plus surse de cărți deja în braille.
- **Traducere automată** în română (opțional, model descărcat o dată, ~700 MB).

## Ce are nevoie de internet
OCR (motorul și datele limbii se descarcă o dată), comenzile vocale (serviciul browserului) și traducerea automată. Restul funcționează offline.

## Limite — citește înainte de utilizare serioasă
(Avertismentul de mai jos este afișat și pe primul ecran al aplicației.)
- Tabelele braille **nu au fost validate de cititori nativi de braille** și aplicația **nu a fost testată pe dispozitive tactile reale** (vibrații, ecran) sau cu cititoare de ecran. Testele automate verifică consecvența, nu faptul că textul e corect pentru cititor.
- Pentru chineză, cantoneză, japoneză și coreeană braille-ul se obține aproximativ, din pronunție; unele citiri pot greși.
- Grad 2 vine din liblouis 3.2.0 (tabele vechi). Pentru română nu există grad 2 standardizat; se folosește grad 1.
- iPhone/iPad nu permit vibrații din browser. Folosește Android + Chrome sau exportă `.brf`.
- Comenzile vocale și OCR-ul au fost verificate cu simulări, nu cu voce sau scanări reale pe internet.
- Neimplementat: afișaj braille hardware (WebHID), voce neurală offline, aplicație instalabilă (PWA).

## Rapoarte de greșeli
Dacă un cuvânt apare cu braille greșit, folosește în aplicație **⋯ → Raportează o greșeală de braille**, apoi atașează fișierul într-un *Issue*. Cel mai util este raportul unui cititor nativ de braille, cu limba, cuvântul și forma corectă.

## Confidențialitate
Aplicația nu are server propriu, cont, statistici sau urmărire; cărțile rămân în browser, iar progresul și semnele de carte se salvează local. **Dar unele funcții opționale contactează terți:**
- **OCR** (imagini/PDF scanat): la prima folosire încarcă `tesseract.js` de pe `cdn.jsdelivr.net` (fără verificare de integritate SRI) și datele limbii de pe `raw.githubusercontent.com`; aceste servere văd adresa IP, nu textul cărții.
- **Traducere automată** (opțională): încarcă `transformers.js` de pe `cdn.jsdelivr.net` și modelul (~700 MB) de pe `huggingface.co`; traducerea rulează local.
- **Comenzi vocale**: folosesc recunoașterea vocală a browserului (`SpeechRecognition`); în Chrome, de exemplu, audio este trimis serviciului de voce al furnizorului browserului.
- Linkurile din catalogul de cărți duc la site-uri externe, doar la click.
Fără aceste funcții, aplicația nu face cereri de rețea.

## Licență
Codul propriu: MIT (vezi [LICENSE](LICENSE)). Componentele terțe (liblouis, pdf.js și altele) au licențe proprii; vezi [NOTICE.md](NOTICE.md). Unele intrări de acolo sunt marcate „de verificat" (tabelul kanji derivat din pykakasi, posibil GPL-3.0; tabelele chineză/cantoneză cu sursă nedocumentată; modelul NLLB-200, CC-BY-NC, descărcat la cerere) și trebuie clarificate de autor înainte ca licența MIT să fie considerată definitivă.

Audit: 2026-10-10; rundă 2 (2026-10-11): avertisment de validare pe primul ecran; licența MIT și NOTICE.md păstrate neschimbate (conflictele pykakasi/GPL, liblouis/LGPL și NLLB/CC-BY-NC rămân de clarificat de autor); SRI pentru scripturile jsDelivr nu a putut fi adăugat (fără rețea pentru calculul hash-urilor).
