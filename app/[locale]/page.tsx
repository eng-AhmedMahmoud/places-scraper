import { getTranslations } from "next-intl/server";
import { LangSwitcher } from "@/components/LangSwitcher";
import { ScrapeWorkspace } from "@/components/ScrapeWorkspace";
import { EGYPT_GOVERNORATES } from "@/lib/egypt-data";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  const govs = Object.entries(EGYPT_GOVERNORATES).map(([key, g]) => ({
    key,
    label: locale === "ar" ? g.ar : key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1"),
    centerCount: (locale === "ar" ? g.centersAr : g.centersEn).length,
  }));

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <header className="flex items-center justify-between mb-10">
        <div>
          <span className="chip">{t("brand.tagline")}</span>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            {t("brand.name")}
          </h1>
        </div>
        <LangSwitcher currentLocale={locale} />
      </header>

      <section className="surface-strong p-7 md:p-10 mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight max-w-2xl">
          {t("hero.title")}
        </h2>
        <p className="mt-3 text-ink-300 max-w-2xl">{t("hero.subtitle")}</p>
      </section>

      <ScrapeWorkspace locale={locale as "en" | "ar"} governorates={govs} />

      <footer className="mt-14 text-center text-xs text-ink-400">
        {t("footer.note")}
      </footer>
    </main>
  );
}
