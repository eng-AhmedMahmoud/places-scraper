# PlaceHarvest

MENA business-directory scraper: pick a country and regions, type an industry,
and stream every Google Places match into a clean Excel file. Next.js 15 +
pnpm, next-intl (`/en`, `/ar`), Stack Auth (Hexclave) sign-in guarding
`/[locale]/app`. Variables: `.env.example`. Local dev: `pnpm dev` (through portless).

## Hosting

Production runs on the Devya VPS (`72.61.81.59`), not Vercel (the Vercel team
was paused on 2026-11-13). The VPS never builds: `scripts/deploy.sh` builds the Next.js standalone server
on the Mac from a clean export of `origin/main`, swaps in Linux x86-64 native
binaries (sharp), and ships only that tree. A stock `node:24.22.1-alpine`
container (`docker-compose.prod.yml`, no build step) runs it on `127.0.0.1:3195`, and nginx
(`deploy/nginx.conf`) serves `placeharvest.devya-solutions.com`. The TLS certificate is issued by
`pending-certs` once DNS points at the VPS.

- Gate: Jenkins (`Jenkinsfile`) runs `bash scripts/ci-local.sh` on every PR;
  run it locally when Jenkins is down or busy.
- Deploy from merged `main`: `bash scripts/deploy.sh` (builds here, ships the
  release over SSH, restarts the container, checks the title and the public
  host). `bash scripts/deploy.sh --rollback` puts the previous release back.
- Runtime config: `/home/devya/projects/places-scraper.env` on the VPS (chmod 600, never
  committed): `GOOGLE_MAPS_API_KEY`, `MAX_API_CALLS` and the Stack Auth keys. The build reads the `NEXT_PUBLIC_HEXCLAVE_*` values from it
  and inlines them, so a change to those needs a redeploy; for the others
  recreate the container:
  `ssh root@72.61.81.59 'cd /home/devya/projects/places-scraper && docker compose -f docker-compose.prod.yml up -d --force-recreate'`.
