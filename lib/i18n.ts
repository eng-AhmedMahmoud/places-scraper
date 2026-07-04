import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, type Locale } from "./i18n-config";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const isLocale = (locales as readonly string[]).includes(requested ?? "");
  const locale = (isLocale ? (requested as Locale) : defaultLocale) as Locale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
