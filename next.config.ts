import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n.ts");

const config: NextConfig = {
  experimental: {
    serverActions: { bodySizeLimit: "5mb" },
  },
};

export default withNextIntl(config);
