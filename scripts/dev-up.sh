#!/usr/bin/env bash
set -euo pipefail

echo "[up] subindo banco (docker compose)"
docker compose up -d db

./scripts/wait-for-db.sh

echo "[up] prisma generate + migrate deploy"
npm run prisma:deploy

echo "[up] iniciando API (dev)"
npm run dev
