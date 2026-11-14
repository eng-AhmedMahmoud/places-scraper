#!/usr/bin/env bash
# The merge gate, step for step what Jenkins runs (Jenkinsfile). Run it from
# anywhere: bash scripts/ci-local.sh
set -euo pipefail
cd "$(dirname "$0")/.."

# Stack Auth wants these at build time. The project ID and API URL are public
# (shipped in client JS); the server key only has to be present while Next
# collects page data, no API call is made. Real values win when set.
export NEXT_PUBLIC_HEXCLAVE_API_URL="${NEXT_PUBLIC_HEXCLAVE_API_URL:-https://api.stack-auth.com}"
export NEXT_PUBLIC_HEXCLAVE_PROJECT_ID="${NEXT_PUBLIC_HEXCLAVE_PROJECT_ID:-00000000-0000-4000-8000-000000000000}"
export HEXCLAVE_SECRET_SERVER_KEY="${HEXCLAVE_SECRET_SERVER_KEY:-ci-placeholder}"

bash -n scripts/deploy.sh
pnpm install --frozen-lockfile
pnpm run lint
pnpm run typecheck
pnpm run build
echo "ci-local: all steps passed"
