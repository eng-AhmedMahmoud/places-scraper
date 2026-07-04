import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { stackServerApp } from "@/stack";
import { SiteHeader } from "@/components/SiteHeader";
import { MENA_COUNTRIES } from "@/lib/mena-data";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();
  const user = await stackServerApp.getUser();

  const primaryHref = user ? `/${locale}/app` : `/handler/sign-up?after_auth_return_to=${encodeURIComponent(`/${locale}/app`)}`;
  const primaryLabel = user ? t("nav.workspace") : t("landing.cta");

  const countryCount = Object.keys(MENA_COUNTRIES).length;
  const centerCount = Object.values(MENA_COUNTRIES).reduce(
    (n, c) =>
      n +
      Object.values(c.divisions).reduce(
        (m, d) => m + (locale === "ar" ? d.centersAr.length : d.centersEn.length),
        0,
      ),
    0,
  );

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="mx-auto max-w-6xl px-5 pb-16">
        <section className="surface-strong p-8 md:p-12 mb-10">
          <span className="chip">{t("landing.eyebrow")}</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            {t("landing.title")}
          </h1>
          <p className="mt-4 text-ink-300 max-w-2xl md:text-lg">{t("landing.subtitle")}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={primaryHref}
              className="px-6 py-3 rounded-lg bg-accent-500 hover:bg-accent-400 text-ink-900 font-semibold"
            >
              {primaryLabel}
            </Link>
            <span className="text-xs text-ink-400">
              {countryCount} {t("landing.countries")} · {centerCount.toLocaleString()} {t("landing.totalCenters")}
            </span>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">{t("landing.featuresTitle")}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="surface p-6">
              <h3 className="font-semibold text-white mb-2">{t("landing.feature1Title")}</h3>
              <p className="text-sm text-ink-300 leading-relaxed">{t("landing.feature1Body")}</p>
            </div>
            <div className="surface p-6">
              <h3 className="font-semibold text-white mb-2">{t("landing.feature2Title")}</h3>
              <p className="text-sm text-ink-300 leading-relaxed">{t("landing.feature2Body")}</p>
            </div>
            <div className="surface p-6">
              <h3 className="font-semibold text-white mb-2">{t("landing.feature3Title")}</h3>
              <p className="text-sm text-ink-300 leading-relaxed">{t("landing.feature3Body")}</p>
            </div>
          </div>
        </section>

        <footer className="text-center text-xs text-ink-400">{t("footer.note")}</footer>
      </main>
    </>
  );
}
