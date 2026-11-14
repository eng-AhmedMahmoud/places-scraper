import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n.ts");

const config: NextConfig = {
  // Self-contained server for the Docker image (Dockerfile, scripts/deploy.sh).
  output: "standalone",
  experimental: {
    serverActions: { bodySizeLimit: "5mb" },
  },
};

export default withNextIntl(config);
