---
title: PGP/GPG Identity and Signing Workflow
description: Long-lived GPG identity with signed commits, e-mail signing, and a published public key on the Ubuntu keyserver.
tech:
  - GPG
  - Git
  - Shell
liveUrl: https://keyserver.ubuntu.com/pks/lookup?search=tim%40heinemann.foo&fingerprint=on&op=index
date: 2024-06-01
featured: true
draft: false
---

## Why

Having a stable cryptographic identity across machines, git hosts, and e-mail makes collaboration safer and makes ownership verifiable. The public key is pinned on a keyserver so anyone can verify signed commits or encrypted e-mail without trust anchors beyond the key fingerprint.

## What

- Primary GPG key generated with a sensible expiration policy and revocation certificate stored offline.
- Subkeys per machine for signing-only and encryption, rotated independently of the primary key.
- `git config --global commit.gpgsign true` so every commit carries a signature.
- Public key published at [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?search=tim%40heinemann.foo&fingerprint=on&op=index).

## Usage

Contact e-mail: `tim@heinemann.foo`. Verify signed commits via the fingerprint on the keyserver.
