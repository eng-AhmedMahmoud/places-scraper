import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "./lib/i18n-config";
import { stackServerApp } from "./stack";

const intl = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

const PROTECTED = /^\/(?:en|ar)\/app(?:\/|$)/;

export default async function middleware(req: NextRequest) {
  if (PROTECTED.test(req.nextUrl.pathname)) {
    const user = await stackServerApp.getUser({ tokenStore: req });
    if (!user) {
      const url = new URL("/handler/sign-in", req.url);
      url.searchParams.set("after_auth_return_to", req.nextUrl.pathname);
      return NextResponse.redirect(url);
    }
  }
  return intl(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|handler|.*\\..*).*)"],
};
