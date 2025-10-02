#!/usr/bin/env bash
set -euo pipefail

echo "[down] parando banco"
docker compose stop db || true
