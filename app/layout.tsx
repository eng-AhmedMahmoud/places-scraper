import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { Inter, Space_Grotesk, Cairo } from "next/font/google";
import { stackServerApp } from "@/stack";
import type { Locale } from "@/lib/i18n-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });

export const metadata: Metadata = {
  title: "PlaceHarvest by Devya — MENA business directory scraper",
  description:
    "Scrape any industry across 18 MENA countries. Export clean Excel of every business Google Maps knows.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = (await getLocale()) as Locale;
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const fontClass = locale === "ar" ? "font-arabic" : "font-sans";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${grotesk.variable} ${cairo.variable}`}
    >
      <body className={`${fontClass} antialiased`} suppressHydrationWarning>
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-glow bg-glow--one" aria-hidden="true" />
        <div className="bg-glow bg-glow--two" aria-hidden="true" />
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
