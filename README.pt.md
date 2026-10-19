# ATINGERE

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · **Português** · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versão:** 1.2.0 · **Última atualização:** 2026-10-19

Idiomas da interface: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

**Online / demonstração:** https://chiuta.github.io/ATINGERE/

![ATINGERE — captura de ecrã](screenshot.png)

Converte qualquer livro (EPUB, TXT, HTML, DOCX, PDF, BRF, imagens) em braille tátil para pessoas surdocegas ou em audiolivro para pessoas cegas. Um único ficheiro HTML, 137 idiomas e códigos (braille de grau 1); as funcionalidades de OCR, comandos de voz e tradução precisam de internet.

**Qualquer livro, em braille tátil ou em audiolivro — a partir de um único ficheiro HTML, sem conta, sem servidor.**

*Aplicação web autónoma e offline que transforma um livro em braille no ecrã tátil (vibração, para leitores surdocegos) ou em audiolivro com síntese de voz (para leitores cegos). Mais de 130 idiomas, o romeno primeiro.*

**Aplicação online:** neste momento não existe um endereço público confirmado (o GitHub Pages não está ativado ou o endereço não foi verificado na auditoria). Descarregue `index.html` e abra-o num navegador; as funcionalidades básicas funcionam offline.

## Para quem
- **Pessoas surdocegas:** o livro torna-se braille no ecrã tátil. Cada célula tem 6 pontos; os pontos em relevo sentem-se como vibração sob o dedo. Existem também vibrações automáticas, ao ritmo das células.
- **Pessoas cegas:** o livro torna-se um audiolivro com a síntese de voz do dispositivo, com retoma automática, velocidade ajustável e temporizador de sono.

## O que faz
- **Formatos de entrada:** EPUB, TXT, HTML, DOCX, PDF (com texto, offline), BRF/BRL e textos braille Unicode, PDF digitalizados e imagens PNG/JPG/WebP (através de OCR).
- **Braille:** mais de 130 idiomas; romeno alargado, com código próprio. Grau 1 para todos, **grau 2** para 10 idiomas (en, fr, de, pt, no, da, hu, ga, cy, ur) através do liblouis.
- **Leitura tátil:** célula, palavra, parágrafo, capítulo; duas células contíguas; modo de aprendizagem com testes; escrita Perkins.
- **Ferramentas:** marcadores, pesquisa, repetição do parágrafo, resumo extrativo local, página do professor (texto + braille, com botão de impressão e estilo de impressão próprio), paragem de emergência (abanão, Esc), contraste elevado, texto ampliado, comandos de voz (em romeno).
- **Exportação:** `.brf` (40 × 25) e texto braille Unicode.
- **Catálogo:** fontes gratuitas de livros em romeno e noutros idiomas, além de fontes de livros já em braille.
- **Tradução automática** para romeno (opcional, modelo descarregado uma vez, ~700 MB).

## O que precisa de internet
O OCR (o motor e os dados do idioma são descarregados uma vez), os comandos de voz (o serviço do navegador) e a tradução automática. Tudo o resto funciona offline.

## Limites — leia antes de uma utilização séria
(O aviso abaixo é também apresentado no primeiro ecrã da aplicação.)
- As tabelas braille **não foram validadas por leitores nativos de braille** e a aplicação **não foi testada em dispositivos táteis reais** (vibrações, ecrã) nem com leitores de ecrã. Os testes automáticos verificam a coerência, não que o texto esteja correto para o leitor.
- Para chinês, cantonês, japonês e coreano o braille é obtido de forma aproximada, a partir da pronúncia; algumas leituras podem estar erradas.
- O grau 2 vem do liblouis 3.2.0 (tabelas antigas). Para o romeno não existe um grau 2 normalizado; usa-se o grau 1.
- O iPhone/iPad não permitem vibrações a partir do navegador. Use Android + Chrome ou exporte `.brf`.
- Os comandos de voz e o OCR foram verificados com simulações, não com voz ou digitalizações reais pela internet.
- Não implementado: linha braille de hardware (WebHID), voz neuronal offline, aplicação instalável (PWA).

## Relatórios de erros
Se uma palavra surgir com braille errado, use na aplicação **⋯ → Comunicar um erro de braille** e anexe depois o ficheiro a uma *Issue*. O mais útil é o relatório de um leitor nativo de braille, com o idioma, a palavra e a forma correta.

## Privacidade
A aplicação não tem servidor próprio, conta, estatísticas nem rastreamento; os livros ficam no navegador, e o progresso e os marcadores são guardados localmente. **Mas algumas funcionalidades opcionais contactam terceiros:**
- **OCR** (imagens/PDF digitalizado): na primeira utilização carrega o `tesseract.js` a partir de `cdn.jsdelivr.net` (sem verificação de integridade SRI) e os dados do idioma a partir de `raw.githubusercontent.com`; esses servidores veem o endereço IP, não o texto do livro.
- **Tradução automática** (opcional): carrega o `transformers.js` a partir de `cdn.jsdelivr.net` e o modelo (~700 MB) a partir de `huggingface.co`; a tradução corre localmente.
- **Comandos de voz**: usam o reconhecimento de voz do navegador (`SpeechRecognition`); no Chrome, por exemplo, o áudio é enviado ao serviço de voz do fornecedor do navegador.
- As ligações do catálogo de livros levam a sítios externos, apenas ao clicar.
Sem estas funcionalidades, a aplicação não faz pedidos de rede.

## Licença
Código próprio: MIT (consulte [LICENSE](LICENSE)). Os componentes de terceiros (liblouis, pdf.js e outros) têm licenças próprias; consulte [NOTICE.md](NOTICE.md). Algumas entradas aí estão marcadas «a verificar» (a tabela de kanji derivada do pykakasi, possivelmente GPL-3.0; as tabelas de chinês/cantonês com fonte não documentada; o modelo NLLB-200, CC-BY-NC, descarregado a pedido) e têm de ser esclarecidas pelo autor antes de a licença MIT ser considerada definitiva.

Auditoria: 2026-10-10; ronda 2 (2026-10-11): aviso de validação no primeiro ecrã; a licença MIT e o NOTICE.md mantidos sem alterações (os conflitos pykakasi/GPL, liblouis/LGPL e NLLB/CC-BY-NC continuam por esclarecer pelo autor); não foi possível acrescentar SRI aos scripts do jsDelivr (sem rede para calcular os hashes).

## Novidades (v1.1.0)

- **Etiqueta de transparência** (clique em `v 1.1.0 · 2026-10-14` no rodapé, kit comum): mostra que armazenamento local a aplicação usa (progresso, marcadores, definições) e que as funcionalidades básicas não fazem pedidos de rede.
- **Cópia de segurança `.fff.json`** do progresso de leitura, dos marcadores e das definições (exportação/importação, opcionalmente cifrada com palavra-passe; os livros em si não estão incluídos).
- **A conversão em braille, a leitura tátil e o audiolivro mantêm-se**: em relação à 1.0.0 foram acrescentados apenas o bloco do kit e a versão. A CSP não foi modificada (continua sem `script-src`, pelas razões do histórico). Não foi acrescentado nada que toque nas tabelas braille.
- Os textos novos estão em ro, en, fr, it, es, pt, hu, de; as traduções são automáticas e não verificadas por falantes nativos.
- Testes: `tests/fff-r8.test.mjs` (rede bloqueada, 1280 e 360 px, axe 0 violações na nova caixa de diálogo). Limitação: a aplicação não foi testada em dispositivos táteis reais, como antes.

## Histórico / Changelog

### 1.1.1 — 2026-10-18
- Corrigido: a deteção de idioma já não vota catalão por qualquer ponto médio «·» (usado em títulos, p. ex. Nota Zero); mantém-se apenas a geminada «l·l». Os ficheiros .md romenos com «·» passam a ser reconhecidos como `ro`.

### 1.1.0 — 2026-10-14
- Novo: etiqueta de transparência e cópia de segurança `.fff.json` (kit comum). Conversão em braille inalterada.

### 1.0.0 — 2026-10-12
- A versão e a data da última atualização são apresentadas na aplicação (rodapé).

### 11 de outubro de 2026 (ronda 7)
- Corrigido: a exportação .BRF/.txt passa a capturar erros (mensagem «A exportação falhou» em vez de uma falha silenciosa) e desativa os botões enquanto decorre, para não iniciar duas transferências em simultâneo; não foi possível reproduzir uma falha de transferência no Chromium (as transferências funcionam), pelo que a causa reportada continua por confirmar.
- Melhorado: o aviso do primeiro ecrã é curto em romeno, com a versão inglesa (marcada `lang="en"`) num painel «English»; nota sobre a codificação ASCII braille da exportação .BRF.
- Inalterado: sem `script-src` na CSP e sem SRI (liblouis/`new Function`, workers e WASM do jsDelivr; não podem ser verificados sem rede); as licenças continuam a ser decisão do autor.

### 11 de outubro de 2026 (ronda 6)
- Acrescentado: botão «Imprimir» na página do professor, com um estilo de impressão que mantém apenas o braille e o texto do parágrafo; respeita `prefers-reduced-motion` e `prefers-contrast: more`.
- Inalterado: sem `script-src` na CSP (exigiria `unsafe-eval` para o liblouis, workers/WASM do jsDelivr para OCR e tradução, impossível de verificar sem rede).

### 11 de outubro de 2026
- Corrigido: os botões de exportação (.BRF e texto braille Unicode) estão agora visíveis diretamente no ecrã principal (passo 3), e não numa secção recolhida.
- Corrigido: o campo de pesquisa de idioma tinha fundo branco com texto claro (contraste insuficiente); os ecrãs Braille, Áudio, Aprender e Escrever têm agora um título de nível 1 (0 violações axe-core a 1280 e 360 px, inclusive após carregar um texto).
- Inalterado (decisão do autor): as licenças dos componentes pykakasi/NLLB/liblouis continuam por esclarecer; mantém-se `new Function` (carregamento do liblouis), necessário para o braille de grau 2.
