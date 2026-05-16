---
title: yt-playlist-mp3
description: CLI-Wrapper um yt-dlp, der ganze YouTube-Playlists als MP3 herunterlädt — inklusive Metadaten und eingebettetem Thumbnail.
tech:
  - Python
  - yt-dlp
  - ffmpeg
  - pytest
  - ruff
  - GitHub Actions
repoUrl: https://github.com/t1mdotcom/yt-playlist-mp3
date: 2026-05-16
featured: true
draft: false
---

## Context

Ein kleines, sauber aufgesetztes CLI-Tool — gedacht als Referenz für meine eigene Python-Hygiene: src-Layout, `pyproject.toml` mit Hatchling, Ruff, pytest, CI-Matrix.

## Features

- Best-Quality-MP3 (`--audio-quality 0`) aus dem besten verfügbaren Audio-Stream.
- Playlist-Ordner und nummerierte Tracks via Default-Template.
- Metadaten und Thumbnail direkt in die MP3 eingebettet.
- `--dry-run` zeigt den `yt-dlp`-Befehl, ohne ihn auszuführen.
- Klare Fehlermeldungen, wenn `yt-dlp` oder `ffmpeg` fehlen.
- Browser-Cookies für private oder altersbeschränkte Inhalte.

## Engineering

- Parsing, Command-Bau und Subprocess-Aufruf sind getrennt, jede Stufe testbar.
- `@dataclass(frozen=True) Options` als immutables Bindeglied zwischen Argparse und Command-Builder.
- Tests decken Default-Argumente, Overrides, fehlende Abhängigkeiten und den Dry-Run-Pfad ab — `subprocess.run` und `shutil.which` werden via `monkeypatch` ersetzt.
- CI läuft auf Ubuntu und macOS gegen Python 3.9 bis 3.13.
- Ruff mit `E`, `F`, `I`, `UP`, `B`, `SIM` — nicht nur Style, sondern auch Modernisierung und Bug-Pattern.

## Why it matters

Klein genug, um in einer Stunde gelesen zu sein, vollständig genug, um zu zeigen, wie ich Python-Projekte aufsetze, wenn niemand zuschaut.
