# ATINGERE

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · **Deutsch** · [Magyar](README.hu.md)

**Version:** 1.2.0 · **Zuletzt aktualisiert:** 2026-10-19

Oberflächensprachen: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

**Live / Demo:** https://chiuta.github.io/ATINGERE/

![ATINGERE — Screenshot](screenshot.png)

Wandelt jedes Buch (EPUB, TXT, HTML, DOCX, PDF, BRF, Bilder) in taktile Braille-Schrift für taubblinde Menschen oder in ein Hörbuch für blinde Menschen um. Eine einzige HTML-Datei, 137 Sprachen und Codes (Braille Grad 1); die Funktionen OCR, Sprachbefehle und Übersetzung benötigen Internet.

**Jedes Buch, als taktile Braille-Schrift oder als Hörbuch — aus einer einzigen HTML-Datei, ohne Konto, ohne Server.**

*Eigenständige Offline-Web-App, die ein Buch in Braille auf dem Touchscreen (Vibration, für taubblinde Leserinnen und Leser) oder in ein TTS-Hörbuch (für blinde Leserinnen und Leser) verwandelt. Über 130 Sprachen, Rumänisch zuerst.*

**Live-App:** derzeit gibt es keine bestätigte öffentliche Adresse (GitHub Pages ist nicht aktiviert oder die Adresse wurde beim Audit nicht überprüft). Lade `index.html` herunter und öffne sie in einem Browser; die Grundfunktionen laufen offline.

## Für wen
- **Taubblinde Menschen:** Das Buch wird auf dem Touchscreen zu Braille. Jede Zelle hat 6 Punkte; die erhabenen Punkte spürt man als Vibration unter dem Finger. Es gibt außerdem automatische Vibrationen im Rhythmus der Zellen.
- **Blinde Menschen:** Das Buch wird mit der Sprachsynthese des Geräts zu einem Hörbuch, mit automatischer Wiederaufnahme, einstellbarer Geschwindigkeit und Einschlaf-Timer.

## Was es kann
- **Eingabeformate:** EPUB, TXT, HTML, DOCX, PDF (mit Text, offline), BRF/BRL und Unicode-Brailletexte, gescannte PDFs und PNG/JPG/WebP-Bilder (per OCR).
- **Braille:** über 130 Sprachen; erweitertes Rumänisch mit eigenem Code. Grad 1 für alle, **Grad 2** für 10 Sprachen (en, fr, de, pt, no, da, hu, ga, cy, ur) über liblouis.
- **Taktiles Lesen:** Zelle, Wort, Absatz, Kapitel; zwei benachbarte Zellen; Lernmodus mit Tests; Perkins-Schreiben.
- **Werkzeuge:** Lesezeichen, Suche, Absatzwiederholung, lokale extraktive Zusammenfassung, Lehrerseite (Text + Braille, mit Druckschaltfläche und eigenem Druckstil), Notstopp (Schütteln, Esc), hoher Kontrast, vergrößerter Text, Sprachbefehle (auf Rumänisch).
- **Export:** `.brf` (40 × 25) und Unicode-Brailletext.
- **Katalog:** kostenlose Buchquellen auf Rumänisch und in anderen Sprachen sowie Quellen für Bücher, die bereits in Braille vorliegen.
- **Automatische Übersetzung** ins Rumänische (optional, Modell wird einmal heruntergeladen, ~700 MB).

## Was Internet braucht
OCR (die Engine und die Sprachdaten werden einmal heruntergeladen), Sprachbefehle (der Dienst des Browsers) und die automatische Übersetzung. Alles andere funktioniert offline.

## Grenzen — vor ernsthafter Nutzung lesen
(Der folgende Hinweis wird auch auf dem ersten Bildschirm der App angezeigt.)
- Die Brailletabellen **wurden nicht von muttersprachlichen Braille-Leserinnen und -Lesern validiert**, und die App **wurde nicht auf echten Touchgeräten** (Vibration, Bildschirm) oder mit Screenreadern getestet. Die automatischen Tests prüfen die Konsistenz, nicht, ob der Text für die Leserin oder den Leser richtig ist.
- Für Chinesisch, Kantonesisch, Japanisch und Koreanisch wird die Brailleschrift näherungsweise aus der Aussprache gewonnen; manche Lesungen können falsch sein.
- Grad 2 stammt aus liblouis 3.2.0 (alte Tabellen). Für Rumänisch gibt es keinen standardisierten Grad 2; es wird Grad 1 verwendet.
- iPhone/iPad erlauben keine Vibration aus dem Browser. Nutze Android + Chrome oder exportiere `.brf`.
- Sprachbefehle und OCR wurden mit Simulationen geprüft, nicht mit echter Stimme oder echten Scans über das Internet.
- Nicht implementiert: Hardware-Braillezeile (WebHID), neuronale Offline-Stimme, installierbare App (PWA).

## Fehlermeldungen
Wenn ein Wort mit falscher Brailleschrift erscheint, nutze in der App **⋯ → Braille-Fehler melden** und hänge die Datei dann an ein *Issue* an. Am nützlichsten ist die Meldung einer muttersprachlichen Braille-Leserin bzw. eines Braille-Lesers mit Sprache, Wort und korrekter Form.

## Datenschutz
Die App hat keinen eigenen Server, kein Konto, keine Statistik und kein Tracking; die Bücher bleiben im Browser, Fortschritt und Lesezeichen werden lokal gespeichert. **Einige optionale Funktionen kontaktieren jedoch Dritte:**
- **OCR** (Bilder/gescanntes PDF): Bei der ersten Nutzung lädt sie `tesseract.js` von `cdn.jsdelivr.net` (ohne SRI-Integritätsprüfung) und die Sprachdaten von `raw.githubusercontent.com`; diese Server sehen die IP-Adresse, nicht den Text des Buches.
- **Automatische Übersetzung** (optional): lädt `transformers.js` von `cdn.jsdelivr.net` und das Modell (~700 MB) von `huggingface.co`; die Übersetzung läuft lokal.
- **Sprachbefehle**: Sie nutzen die Spracherkennung des Browsers (`SpeechRecognition`); in Chrome zum Beispiel wird das Audio an den Sprachdienst des Browseranbieters gesendet.
- Die Links im Buchkatalog führen nur per Klick zu externen Websites.
Ohne diese Funktionen stellt die App keine Netzwerkanfragen.

## Lizenz
Eigener Code: MIT (siehe [LICENSE](LICENSE)). Die Drittanbieter-Komponenten (liblouis, pdf.js und andere) haben eigene Lizenzen; siehe [NOTICE.md](NOTICE.md). Einige Einträge dort sind als „zu prüfen“ markiert (die aus pykakasi abgeleitete Kanji-Tabelle, möglicherweise GPL-3.0; die Chinesisch-/Kantonesisch-Tabellen mit undokumentierter Quelle; das Modell NLLB-200, CC-BY-NC, auf Anfrage heruntergeladen) und müssen vom Autor geklärt werden, bevor die MIT-Lizenz als endgültig gilt.

Audit: 2026-10-10; Runde 2 (2026-10-11): Validierungshinweis auf dem ersten Bildschirm; die MIT-Lizenz und NOTICE.md bleiben unverändert (die Konflikte pykakasi/GPL, liblouis/LGPL und NLLB/CC-BY-NC müssen weiterhin vom Autor geklärt werden); SRI für die jsDelivr-Skripte konnte nicht hinzugefügt werden (kein Netzwerk zur Berechnung der Hashes).

## Neue Funktionen (v1.1.0)

- **Transparenzlabel** (Klick auf `v 1.1.0 · 2026-10-14` in der Fußzeile, gemeinsames Kit): zeigt, welchen lokalen Speicher die App verwendet (Fortschritt, Lesezeichen, Einstellungen) und dass die Grundfunktionen keine Netzwerkanfragen stellen.
- **`.fff.json`-Sicherung** von Lesefortschritt, Lesezeichen und Einstellungen (Export/Import, optional mit Passwort verschlüsselt; die Bücher selbst sind nicht enthalten).
- **Braille-Umwandlung, taktiles Lesen und Hörbuch sind unverändert**: Gegenüber 1.0.0 wurden nur der Kit-Block und die Version hinzugefügt. Die CSP wurde nicht verändert (sie bleibt ohne `script-src`, aus den im Verlauf genannten Gründen). Es wurde nichts hinzugefügt, das die Brailletabellen berührt.
- Die neuen Texte liegen in ro, en, fr, it, es, pt, hu, de vor; die Übersetzungen sind maschinell erstellt und nicht von Muttersprachlern geprüft.
- Tests: `tests/fff-r8.test.mjs` (Netzwerk blockiert, 1280 und 360 px, axe 0 Verstöße im neuen Dialog). Einschränkung: Die App wurde wie zuvor nicht auf echten Touchgeräten getestet.

## Verlauf / Changelog

### 1.1.1 — 2026-10-18
- Behoben: Die Spracherkennung stimmt nicht mehr bei jedem Mittelpunkt „·“ (in Titeln verwendet, z. B. Nota Zero) für Katalanisch; es bleibt nur die Geminate „l·l“. Rumänische .md-Dateien mit „·“ werden jetzt als `ro` erkannt.

### 1.1.0 — 2026-10-14
- Neu: Transparenzlabel und `.fff.json`-Sicherung (gemeinsames Kit). Braille-Umwandlung unverändert.

### 1.0.0 — 2026-10-12
- Version und Datum der letzten Aktualisierung werden in der App angezeigt (Fußzeile).

### 11. Oktober 2026 (Runde 7)
- Behoben: Der .BRF/.txt-Export fängt jetzt Fehler ab (Meldung „Export fehlgeschlagen“ statt eines stillen Fehlschlags) und deaktiviert die Schaltflächen, solange er läuft, damit nicht zwei Downloads gleichzeitig starten; ein Download-Fehler ließ sich in Chromium nicht reproduzieren (Downloads funktionieren), die gemeldete Ursache bleibt daher unbestätigt.
- Verbessert: Der Hinweis auf dem ersten Bildschirm ist auf Rumänisch kurz, mit der englischen Fassung (mit `lang="en"` markiert) in einem „English“-Panel; Hinweis zur ASCII-Braille-Kodierung des .BRF-Exports.
- Unverändert: kein `script-src` in der CSP und kein SRI (liblouis/`new Function`, Worker und WASM von jsDelivr; ohne Netzwerk nicht prüfbar); die Lizenzen bleiben Entscheidung des Autors.

### 11. Oktober 2026 (Runde 6)
- Hinzugefügt: Schaltfläche „Drucken“ auf der Lehrerseite, mit einem Druckstil, der nur das Braille und den Absatztext behält; berücksichtigt `prefers-reduced-motion` und `prefers-contrast: more`.
- Unverändert: kein `script-src` in der CSP (es bräuchte `unsafe-eval` für liblouis, Worker/WASM von jsDelivr für OCR und Übersetzung, ohne Netzwerk nicht prüfbar).

### 11. Oktober 2026
- Behoben: Die Exportschaltflächen (.BRF und Unicode-Brailletext) sind jetzt direkt auf dem Hauptbildschirm sichtbar (Schritt 3), nicht in einem eingeklappten Abschnitt.
- Behoben: Das Sprachsuchfeld hatte einen weißen Hintergrund mit hellem Text (unzureichender Kontrast); die Bildschirme Braille, Audio, Lernen und Schreiben haben jetzt eine Überschrift der Ebene 1 (0 axe-core-Verstöße bei 1280 und 360 px, auch nach dem Laden eines Textes).
- Unverändert (Entscheidung des Autors): Die Lizenzen der Komponenten pykakasi/NLLB/liblouis müssen weiterhin geklärt werden; `new Function` (Laden von liblouis) bleibt erhalten, nötig für Braille Grad 2.
