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
      <main className="max-w-[1240px] mx-auto px-8 pb-24">
        <section className="pt-12 pb-8">
          <span className="eyebrow">
            <span className="eyebrow__dot" />
            {t("brand.tagline")}
          </span>
          <h1 className="mt-6 font-display font-semibold text-3xl md:text-5xl tracking-tight leading-tight max-w-3xl">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-text-soft max-w-2xl text-base md:text-lg">
            {t("hero.subtitle")}
          </p>
        </section>

        <ScrapeWorkspace locale={locale as "en" | "ar"} countries={countries} />

        <footer className="mt-16 pt-8 border-t border-line text-center text-xs text-text-muted">
          {t("footer.note")}
        </footer>
      </main>
    </>
  );
}
