import { getTranslations } from "next-intl/server";
import { stackServerApp } from "@/stack";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrapeWorkspace, type CountryOpt } from "@/components/ScrapeWorkspace";
import { MENA_COUNTRIES } from "@/lib/mena-data";

export const dynamic = "force-dynamic";

export default async function AppPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  await stackServerApp.getUser({ or: "redirect" });
  const t = await getTranslations();

  const countries: CountryOpt[] = Object.entries(MENA_COUNTRIES).map(([key, c]) => {
    const divisions = Object.entries(c.divisions).map(([dKey, d]) => ({
      key: dKey,
      label: locale === "ar" ? d.ar : d.en,
      centerCount: (locale === "ar" ? d.centersAr : d.centersEn).length,
    }));
    const totalCenters = divisions.reduce((n, d) => n + d.centerCount, 0);
    return {
      key,
      label: locale === "ar" ? c.nameAr : c.nameEn,
      labelAr: c.nameAr,
      labelEn: c.nameEn,
      divisions,
      totalCenters,
    };
  });

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="mx-auto max-w-6xl px-5 pb-16">
        <section className="surface-strong p-7 md:p-10 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight max-w-2xl">
            {t("hero.title")}
          </h2>
          <p className="mt-3 text-ink-300 max-w-2xl">{t("hero.subtitle")}</p>
        </section>

        <ScrapeWorkspace locale={locale as "en" | "ar"} countries={countries} />

        <footer className="mt-14 text-center text-xs text-ink-400">{t("footer.note")}</footer>
      </main>
    </>
  );
}
