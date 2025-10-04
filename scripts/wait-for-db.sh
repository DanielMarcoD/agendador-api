#!/usr/bin/env bash
set -euo pipefail

echo "[wait] aguardando Postgres ficar ready..."
until docker compose exec -T db bash -lc 'pg_isready -U "$POSTGRES_USER" -d "$POSTGRES_DB"' >/dev/null 2>&1; do
  sleep 1
done
echo "[wait] Postgres pronto."
