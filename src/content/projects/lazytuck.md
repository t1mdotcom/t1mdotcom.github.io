---
title: lazytuck
description: lazygit-artige TUI für Tuckr-Dotfile-Repos — Zustand jeder Datei, Diff bei Abweichungen, Übernehmen per Taste, Commit mit Secret-Scan. macOS und Linux.
tech:
  - Go
  - Bubble Tea
  - Lip Gloss
  - Git
  - GoReleaser
  - Homebrew
  - GitHub Actions
repoUrl: https://github.com/t1mdotcom/lazytuck
date: 2026-10-09
featured: true
draft: false
---

## Context

Mein chezmoi-Setup war gewachsen: Hunderte fremde Plugin-Dateien samt `.git`-Ordnern im Repo, lokal geänderte Configs, die nie zurück ins Repo kamen. Nach dem Umstieg auf Tuckr (Symlinks, eigene Gruppen pro Betriebssystem) fehlte eine Übersicht pro Datei — Tuckr meldet nur ganze Gruppen. lazytuck zeigt jede einzelne Datei und was mit ihr zu tun ist.

## Features

- Zustand pro Datei: verlinkt, fehlt, gleich, abweichend, fremd, ins Leere, verdeckt, inaktiv auf diesem Betriebssystem.
- Diff Repo ↔ Home, dann per Taste übernehmen (Home → Repo) oder wiederherstellen (Repo → Home), auch für ganze Gruppen.
- Neue Dateien aus `~` aufnehmen, auch in OS-Gruppen wie `zsh_macos`.
- Commit, Pull (`--ff-only`) und Push direkt aus der TUI, mit Secret-Scan davor.
- `lazytuck status --json` mit Exit-Codes für Skripte und CI.
- Installation per `brew install --cask t1mdotcom/tap/lazytuck`.

## Engineering

- Spec-first: `SPEC.md` mit 14 Invarianten und 13 Tasks, jeder Task ein eigener Commit; Bugs landen mit Ursache und Invariante in der Spec.
- Sicherheitsnetz: Backup vor jeder Änderung in `~`, Links per Temp-Symlink und `rename` — eine Config fehlt nie, auch nicht für Millisekunden. Programme mit Config-Watcher wie AeroSpace laden deshalb nie ihre Default-Config. Pfade, die über einen Ordner-Symlink ins Repo führen, fasst lazytuck nicht an.
- Gemessen statt angenommen: Ohne `--only-files` lieferte Tuckr in 4 von 20 identischen Läufen fehlende oder falsche Links oder schrieb Symlinks ins Repo; lazytuck verlinkt deshalb grundsätzlich einzelne Dateien.
- Secret-Scan prüft beim Commit genau das, was `git add -A` aufnehmen würde (in einem temporären Index, der echte bleibt unberührt), beim Push jeden ausgehenden Commit einzeln — ein Token, das hinzugefügt und wieder gelöscht wurde, fällt trotzdem auf.
- Tests: Matrix aus 4 Operationen × 11 Ausgangslagen (alle Zustände plus Ordner und gefaltete Ordner-Symlinks), TUI-Tests direkt gegen das Bubble-Tea-Modell, Git-Tests gegen echte Bare-Remotes. Kritische Pfade per Mutation gegengeprüft. CI auf Ubuntu und macOS.
- Release mit GoReleaser für vier Targets, Cask im eigenen [Homebrew-Tap](https://github.com/t1mdotcom/homebrew-tap), Installation auf macOS und Linux geprüft.

## Why it matters

Zeigt, wie ich an Werkzeuge für den eigenen Alltag herangehe: erst das bestehende Setup vermessen, vorhandene Lösungen ausprobieren, dann nur das bauen, was fehlt — mit einem Sicherheitsnetz für Dateien, die man nicht verlieren will.
