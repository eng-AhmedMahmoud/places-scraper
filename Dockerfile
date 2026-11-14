# Production image for PlaceHarvest (placeharvest.devya-solutions.com), run on the
# Devya VPS behind nginx (scripts/deploy.sh). Left Vercel after the 2026-11-13
# account pause. Next.js standalone output, pnpm via corepack (packageManager).
FROM node:24.22.1-alpine AS base
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0 \
    NEXT_TELEMETRY_DISABLED=1
RUN corepack enable

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# NEXT_PUBLIC_* are inlined into the client bundle at build time.
ARG NEXT_PUBLIC_HEXCLAVE_API_URL
ARG NEXT_PUBLIC_HEXCLAVE_PROJECT_ID
ENV NEXT_PUBLIC_HEXCLAVE_API_URL=$NEXT_PUBLIC_HEXCLAVE_API_URL \
    NEXT_PUBLIC_HEXCLAVE_PROJECT_ID=$NEXT_PUBLIC_HEXCLAVE_PROJECT_ID
# Stack Auth only needs a server key to be present while Next collects page
# data (no API call is made at build time). The real key reaches the running
# container from the VPS env file and is never baked into the image.
RUN HEXCLAVE_SECRET_SERVER_KEY=build-time-placeholder pnpm run build

FROM node:24.22.1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001 -G nodejs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
