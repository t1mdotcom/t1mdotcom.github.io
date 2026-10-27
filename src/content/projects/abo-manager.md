---
title: abo-manager
description: Terminal-UI für laufende Abos — Kosten pro Monat und Jahr, angekündigte Preiserhöhungen, Monatsbudget und ob sich ein Kombi-Abo gegenüber den Einzelpreisen lohnt.
tech:
  - Python
  - Textual
  - Rich
  - uv
  - Homebrew
repoUrl: https://github.com/t1mdotcom/abo-manager
date: 2026-10-27
featured: true
draft: false
---

## Context

Was kosten meine Abos eigentlich pro Monat, wenn jährliche und quartalsweise Zahlungen dazukommen, Preiserhöhungen angekündigt sind und manche Dienste schon in einem Bundle stecken? abo-manager beantwortet das in einer Tabelle im Terminal, ohne Account und ohne Cloud.

## Features

- Tabelle aller Abos mit Preis, Turnus, Kosten pro Monat und Jahr, nächstem Zahltag und Status; zahlende Abos oben, nach Kosten sortiert.
- Preisänderungen mit Gültig-ab-Datum: angekündigte Erhöhungen erscheinen vorab mit Prozentangabe, die Summe zeigt die Kosten danach.
- Kombis: Ein Abo mit Mitgliedern ersetzt deren Einzelpreise. Als Idee angelegt (inaktiv) rechnet es nur aus, was es sparen oder kosten würde.
- Monatsbudget mit „frei“ bzw. „drüber“, Summen pro Kategorie.
- Alles per Taste: anlegen, bearbeiten, Preis ändern, aktiv an/aus, löschen.
- Daten als lesbares JSON in `~/.config/abo-manager/abos.json`.
- Installation per `brew install t1mdotcom/tap/abo-manager`, Start mit `abo`.

## Engineering

- Eine Datei, knapp 400 Zeilen: Rechnen als reine Funktionen auf dem JSON, die Textual-UI nur obendrauf.
- Ein einziger Dialog für alle Eingaben: Felder rein, Prüffunktion raus. Ungültige Eingaben bleiben im offenen Dialog stehen, statt halb gespeichert zu werden.
- Speichern atomar über Temp-Datei und `rename`, Monatsrechnung klemmt auf das Monatsende (31.01. + 1 Monat = 28.02.).
- Self-Check ohne Test-Framework: Asserts für die Rechnung, dazu ein UI-Durchlauf headless über Textuals Pilot — vom Anlegen bis zum Löschen.
- PEP-723-Header: `uv run abo.py` läuft ohne Setup. Für Homebrew zusätzlich `pyproject.toml` mit Entry-Point, Formula im eigenen [Tap](https://github.com/t1mdotcom/homebrew-tap) mit Virtualenv aus dem getaggten Tarball, `brew test` und `brew audit --strict --online`.

## Why it matters

Zeigt, wie klein ein nützliches Werkzeug sein kann: eine Datei, eine Abhängigkeit, ein Self-Check — und trotzdem sauber installierbar.
