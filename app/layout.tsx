import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { Inter, Cairo } from "next/font/google";
import { stackServerApp } from "@/stack";
import type { Locale } from "@/lib/i18n-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
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
    <html lang={locale} dir={dir} className={`${inter.variable} ${cairo.variable}`}>
      <body className={`${fontClass} antialiased`} suppressHydrationWarning>
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
