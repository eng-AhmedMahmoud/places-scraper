# PlaceHarvest

MENA business-directory scraper: pick a country and regions, type an industry,
and stream every Google Places match into a clean Excel file. Next.js 15 +
pnpm, next-intl (`/en`, `/ar`), Stack Auth (Hexclave) sign-in guarding
`/[locale]/app`. Variables: `.env.example`. Local dev: `pnpm dev` (through portless).

## Hosting

Production runs on the Devya VPS (`72.61.81.59`), not Vercel (the Vercel team
was paused on 2026-11-13). A Docker container (`Dockerfile`,
`docker-compose.prod.yml`, Next.js standalone) listens on `127.0.0.1:3195` and
nginx (`deploy/nginx.conf`) serves `placeharvest.devya-solutions.com`. The TLS
certificate is issued by `pending-certs` once DNS points at the VPS.

- Gate: Jenkins (`Jenkinsfile`) runs `bash scripts/ci-local.sh` on every PR;
  run it locally when Jenkins is down or busy.
- Deploy from merged `main`: `bash scripts/deploy.sh` (ships `origin/main` over
  SSH, builds under the shared build lock, checks the title and the public
  host). `bash scripts/deploy.sh --rollback` puts the previous release back.
- Runtime config: `/home/devya/projects/places-scraper.env` on the VPS (chmod
  600, never committed): `GOOGLE_MAPS_API_KEY`, `MAX_API_CALLS` and the Stack
  Auth keys. Compose also reads it for the `NEXT_PUBLIC_HEXCLAVE_*` build args,
  so a change to those needs a redeploy; for the others recreate the container:
  `ssh root@72.61.81.59 'cd /home/devya/projects/places-scraper && docker compose --env-file ../places-scraper.env -f docker-compose.prod.yml up -d --force-recreate'`.
