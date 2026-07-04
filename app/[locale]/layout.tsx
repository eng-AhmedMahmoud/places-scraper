import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n-config";

function hasLocale(list: readonly string[], v: string): v is Locale {
  return list.includes(v);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) notFound();
  return <>{children}</>;
}
