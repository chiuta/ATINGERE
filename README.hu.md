# ATINGERE

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · **Magyar**

**Verzió:** 1.1.1 · **Utolsó frissítés:** 2026-10-18

**Élő verzió / demó:** https://chiuta.github.io/ATINGERE/

![ATINGERE — képernyőkép](screenshot.png)

Bármely könyvet (EPUB, TXT, HTML, DOCX, PDF, BRF, képek) tapintható Braille-írássá alakít süketvak emberek számára, vagy hangoskönyvvé vak emberek számára. Egyetlen HTML-fájl, 137 nyelv és kód (1. fokú Braille-írás); az OCR, a hangparancsok és a fordítás funkciókhoz internet kell.

**Bármely könyv tapintható Braille-írásban vagy hangoskönyvként — egyetlen HTML-fájlból, fiók és szerver nélkül.**

*Egyfájlos, offline webalkalmazás, amely a könyvet érintőképernyős Braille-írássá (rezgés, süketvak olvasóknak) vagy TTS-hangoskönyvvé (vak olvasóknak) alakítja. 130+ nyelv, elsőként a román.*

**Élő alkalmazás:** jelenleg nincs megerősített nyilvános cím (a GitHub Pages nincs engedélyezve, vagy a címet nem ellenőrizték az auditkor). Töltsd le az `index.html` fájlt, és nyisd meg egy böngészőben; az alapfunkciók offline működnek.

## Kinek szól
- **Süketvak emberek:** a könyv Braille-írássá válik az érintőképernyőn. Minden cella 6 pontból áll; a kiemelkedő pontokat rezgésként érzi az ujj. Vannak automatikus rezgések is, a cellák ritmusában.
- **Vak emberek:** a könyv hangoskönyvvé válik az eszköz beszédszintézisével, automatikus folytatással, állítható sebességgel és elalvásidőzítővel.

## Mit tud
- **Bemeneti formátumok:** EPUB, TXT, HTML, DOCX, PDF (szöveges, offline), BRF/BRL és Unicode Braille-szövegek, beolvasott PDF-ek és PNG/JPG/WebP képek (OCR-rel).
- **Braille-írás:** több mint 130 nyelv; bővített román, saját kóddal. Mindegyikhez 1. fok, 10 nyelvhez (en, fr, de, pt, no, da, hu, ga, cy, ur) **2. fok** a liblouis révén.
- **Tapintásos olvasás:** cella, szó, bekezdés, fejezet; két szomszédos cella; tanulómód tesztekkel; Perkins-írás.
- **Eszközök:** könyvjelzők, keresés, bekezdés ismétlése, helyi kivonatoló összefoglaló, tanári oldal (szöveg + Braille, nyomtatógombbal és saját nyomtatási stílussal), vészleállítás (rázás, Esc), nagy kontraszt, megnövelt szöveg, hangparancsok (románul).
- **Export:** `.brf` (40 × 25) és Unicode Braille-szöveg.
- **Katalógus:** ingyenes könyvforrások románul és más nyelveken, valamint már Braille-írásban meglévő könyvek forrásai.
- **Automatikus fordítás** románra (opcionális, a modell egyszer töltődik le, ~700 MB).

## Mihez kell internet
Az OCR-hez (a motor és a nyelvi adatok egyszer töltődnek le), a hangparancsokhoz (a böngésző szolgáltatása) és az automatikus fordításhoz. Minden más offline működik.

## Korlátok — komoly használat előtt olvasd el
(Az alábbi figyelmeztetés az alkalmazás első képernyőjén is megjelenik.)
- A Braille-táblákat **nem ellenőrizték anyanyelvű Braille-olvasók**, és az alkalmazást **nem tesztelték valódi érintőeszközökön** (rezgés, képernyő) vagy képernyőolvasókkal. Az automatikus tesztek a következetességet ellenőrzik, nem azt, hogy a szöveg helyes-e az olvasó számára.
- Kínai, kantoni, japán és koreai nyelven a Braille-írást hozzávetőlegesen, a kiejtésből kapják; egyes olvasatok hibásak lehetnek.
- A 2. fok a liblouis 3.2.0-ból (régi táblák) származik. A románhoz nincs szabványosított 2. fok; 1. fokot használ.
- Az iPhone/iPad nem engedi a rezgést a böngészőből. Használj Android + Chrome kombinációt, vagy exportálj `.brf` fájlt.
- A hangparancsokat és az OCR-t szimulációkkal ellenőrizték, nem valódi hanggal vagy beolvasásokkal az interneten keresztül.
- Nem megvalósított: hardveres Braille-kijelző (WebHID), offline neurális hang, telepíthető alkalmazás (PWA).

## Hibajelentések
Ha egy szó hibás Braille-írással jelenik meg, használd az alkalmazásban a **⋯ → Braille-hiba jelentése** lehetőséget, majd csatold a fájlt egy *Issue*-hoz. A leghasznosabb egy anyanyelvű Braille-olvasó jelentése a nyelvvel, a szóval és a helyes alakkal.

## Adatvédelem
Az alkalmazásnak nincs saját szervere, fiókja, statisztikája és követése; a könyvek a böngészőben maradnak, az előrehaladás és a könyvjelzők helyben mentődnek. **Egyes opcionális funkciók azonban harmadik felekkel lépnek kapcsolatba:**
- **OCR** (képek/beolvasott PDF): az első használatkor a `tesseract.js`-t a `cdn.jsdelivr.net`-ről (SRI-integritásellenőrzés nélkül), a nyelvi adatokat pedig a `raw.githubusercontent.com`-ról tölti be; ezek a szerverek az IP-címet látják, a könyv szövegét nem.
- **Automatikus fordítás** (opcionális): a `transformers.js`-t a `cdn.jsdelivr.net`-ről, a modellt (~700 MB) a `huggingface.co`-ról tölti be; a fordítás helyben fut.
- **Hangparancsok**: a böngésző beszédfelismerését használják (`SpeechRecognition`); például a Chrome-ban a hang a böngészőgyártó beszédszolgáltatásához kerül.
- A könyvkatalógus hivatkozásai csak kattintásra vezetnek külső oldalakra.
E funkciók nélkül az alkalmazás nem indít hálózati kéréseket.

## Licenc
Saját kód: MIT (lásd [LICENSE](LICENSE)). A harmadik féltől származó összetevők (liblouis, pdf.js és mások) saját licenccel rendelkeznek; lásd [NOTICE.md](NOTICE.md). Az ottani bejegyzések közül néhány „ellenőrzendő” jelölésű (a pykakasiból származtatott kanjitábla, esetleg GPL-3.0; a dokumentálatlan forrású kínai/kantoni táblák; az NLLB-200 modell, CC-BY-NC, kérésre letöltve), és a szerzőnek tisztáznia kell őket, mielőtt az MIT licenc véglegesnek tekinthető.

Audit: 2026-10-10; 2. kör (2026-10-11): érvényesítési figyelmeztetés az első képernyőn; az MIT licenc és a NOTICE.md változatlan maradt (a pykakasi/GPL, liblouis/LGPL és NLLB/CC-BY-NC ütközések tisztázása továbbra is a szerzőre vár); a jsDelivr-szkriptekhez nem sikerült SRI-t adni (nincs hálózat a hashek kiszámításához).

## Újdonságok (v1.1.0)

- **Átláthatósági címke** (kattintás a láblécben a `v 1.1.0 · 2026-10-14` feliratra, közös kit): megmutatja, milyen helyi tárolást használ az alkalmazás (előrehaladás, könyvjelzők, beállítások), és hogy az alapfunkciók nem indítanak hálózati kéréseket.
- **`.fff.json` biztonsági mentés** az olvasási előrehaladásról, a könyvjelzőkről és a beállításokról (export/import, opcionálisan jelszóval titkosítva; magukat a könyveket nem tartalmazza).
- **A Braille-átalakítás, a tapintásos olvasás és a hangoskönyv változatlan**: az 1.0.0-hoz képest csak a kit blokkja és a verzió került hozzá. A CSP nem módosult (továbbra is `script-src` nélkül, az előzményekben leírt okokból). Semmi olyat nem adtak hozzá, ami a Braille-táblákat érintené.
- Az új szövegek ro, en, fr, it, es, pt, hu, de nyelven vannak; a fordítások gépiek, anyanyelvi beszélők nem ellenőrizték őket.
- Tesztek: `tests/fff-r8.test.mjs` (letiltott hálózat, 1280 és 360 px, axe 0 szabálysértés az új párbeszédablakban). Korlát: az alkalmazást, mint korábban, nem tesztelték valódi érintőeszközökön.

## Előzmények / Changelog

### 1.1.1 — 2026-10-18
- Javítva: a nyelvfelismerés már nem szavaz katalánra minden középső pontra „·” (címekben használják, pl. Nota Zero); csak az „l·l” geminata marad. A „·” jelet tartalmazó román .md fájlokat most már `ro`-ként ismeri fel.

### 1.1.0 — 2026-10-14
- Új: átláthatósági címke és `.fff.json` biztonsági mentés (közös kit). A Braille-átalakítás változatlan.

### 1.0.0 — 2026-10-12
- A verzió és az utolsó frissítés dátuma megjelenik az alkalmazásban (lábléc).

### 2026. október 11. (7. kör)
- Javítva: a .BRF/.txt export mostantól elkapja a hibákat („Az exportálás nem sikerült” üzenet néma kudarc helyett), és futás közben letiltja a gombokat, hogy ne induljon egyszerre két letöltés; a letöltési hibát Chromiumban nem sikerült reprodukálni (a letöltések működnek), ezért a jelzett ok megerősítetlen marad.
- Javítva: az első képernyő figyelmeztetése románul rövid, az angol változat (`lang="en"` jelöléssel) egy „English” panelben; megjegyzés a .BRF export ASCII Braille-kódolásáról.
- Változatlan: nincs `script-src` a CSP-ben és nincs SRI (liblouis/`new Function`, workerek és WASM a jsDelivr-ről; hálózat nélkül nem ellenőrizhetők); a licencek a szerző döntésére várnak.

### 2026. október 11. (6. kör)
- Hozzáadva: „Nyomtatás” gomb a tanári oldalon, olyan nyomtatási stílussal, amely csak a Braille-írást és a bekezdés szövegét tartja meg; figyelembe veszi a `prefers-reduced-motion` és a `prefers-contrast: more` beállítást.
- Változatlan: nincs `script-src` a CSP-ben (a liblouishoz `unsafe-eval`, az OCR-hez és a fordításhoz workerek/WASM kellene a jsDelivr-ről, ami hálózat nélkül nem ellenőrizhető).

### 2026. október 11.
- Javítva: az exportgombok (.BRF és Unicode Braille-szöveg) mostantól közvetlenül a főképernyőn láthatók (3. lépés), nem egy összecsukott szakaszban.
- Javítva: a nyelvkereső mezőnek fehér háttere volt világos szöveggel (elégtelen kontraszt); a Braille, Hang, Tanulás és Írás képernyők mostantól 1. szintű címsorral rendelkeznek (0 axe-core szabálysértés 1280 és 360 px mellett, szöveg betöltése után is).
- Változatlan (a szerző döntése): a pykakasi/NLLB/liblouis összetevők licencei tisztázásra várnak; a `new Function` (a liblouis betöltése) megmarad, a 2. fokú Braille-íráshoz szükséges.
