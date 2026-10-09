---
title: trace-mem
description: Push-to-talk-Diktat und Meeting-Transkription für macOS — vollständig on-device mit Apples SpeechAnalyzer, der Text landet direkt in der fokussierten App.
tech:
  - Swift 6
  - SwiftPM
  - AppKit
  - Speech
  - FoundationModels
  - Core Audio
  - Swift Testing
  - Homebrew
repoUrl: https://github.com/t1mdotcom/trace-mem
date: 2026-10-05
featured: true
draft: false
---

## Context

Wispr Flow ohne Cloud: eine Menubar-App für macOS 27 auf Apple Silicon. Taste halten, sprechen, loslassen — der erkannte Text landet in der gerade fokussierten App. Audio verlässt den Rechner nie, optional geht nur der Text an ein Sprachmodell.

## Features

- Globaler Hotkey, frei wählbar (einzelner Modifier, Kombination oder F-Taste), im Halten- oder Umschalt-Modus.
- Spracherkennung lokal über Apples `SpeechAnalyzer` / `SpeechTranscriber`, Deutsch und Englisch.
- Floating-HUD mit Pegel und Zwischentext.
- Einfügen über Zwischenablage und synthetisches ⌘V, der vorherige Inhalt wird danach wiederhergestellt.
- Optionaler Text-Cleanup (Füllwörter, Interpunktion, gesprochene Befehle wie „neuer Absatz“) über Apples on-device-Modell (`FoundationModels`) oder `claude -p` / `codex exec` mit dem bestehenden CLI-Login.
- Eigenes Wörterbuch für Projektbegriffe, die der Transcriber nicht kennt.
- Meeting-Modus: Mikrofon und System-Audio laufen parallel durch je einen Transcriber und landen als chronologisches Markdown-Transkript, auf Wunsch mit Zusammenfassung.
- Installation per `brew install --cask t1mdotcom/tap/trace-mem`.

## Engineering

- Reines SwiftPM-Paket, Swift 6 mit strikter Concurrency, ausschließlich Apple-Frameworks — keine Third-Party-Dependencies.
- `SPEC.md` mit Invarianten als Quelle der Wahrheit: Jede Aufgabe wird gegen zitierte Invarianten gebaut und einzeln committed, jeder Bug bekommt einen Eintrag und bei Bedarf eine neue Invariante.
- Nichts schlägt still fehl: Scheitert der Cleanup oder läuft in den Timeout, wird der Rohtext eingefügt. Fehlende Berechtigungen stehen mit Grund in der Menü-Statuszeile.
- System-Audio über einen Core Audio Process Tap. Segmente beider Quellen werden nach Startzeit sortiert und inkrementell geschrieben, ein Absturz verliert höchstens die letzten Sekunden.
- `SpeechTranscriber` nimmt keine Vokabelliste an, deshalb korrigiert trace-mem nach der Transkription: Fenster aus ein bis vier Wörtern, Levenshtein-Toleranz abhängig von der Wortlänge, gebeugte Formen bleiben unangetastet.
- AppKit-freie Logik (Hotkey-Matching, Capture, Settings, Pasteboard, Wörterbuch, Transcript-Writer) ist mit Swift Testing abgedeckt, Hardware-nahes wird manuell geprüft.
- Release per Skript: Tests, signierter Release-Build, GitHub-Release und Cask-Bump im eigenen [Homebrew-Tap](https://github.com/t1mdotcom/homebrew-tap).

## Why it matters

Zeigt, wie ich mit brandneuen Plattform-APIs arbeite: Grenzen messen statt raten (der ältere `DictationTranscriber` kann Vokabellisten, erkannte im Test aber deutlich schlechter), Invarianten aufschreiben, Fehler sichtbar machen statt verschlucken.
