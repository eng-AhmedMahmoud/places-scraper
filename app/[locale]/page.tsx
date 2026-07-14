import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { stackServerApp } from "@/stack";
import { SiteHeader } from "@/components/SiteHeader";
import { MENA_COUNTRIES } from "@/lib/mena-data";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();
  const user = await stackServerApp.getUser();

  const primaryHref = user
    ? `/${locale}/app`
    : `/handler/sign-up?after_auth_return_to=${encodeURIComponent(`/${locale}/app`)}`;
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
  const divisionCount = Object.values(MENA_COUNTRIES).reduce(
    (n, c) => n + Object.keys(c.divisions).length,
    0,
  );

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="max-w-[1240px] mx-auto px-8 pb-24">
        <section className="pt-16 md:pt-24 pb-12">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">
                <span className="eyebrow__dot" />
                {t("landing.eyebrow")}
              </span>
              <h1 className="mt-6 font-display font-semibold leading-[1.02] tracking-tight text-[clamp(40px,6.5vw,80px)] max-w-4xl">
                {t("landing.title").split(" ").slice(0, -3).join(" ")}{" "}
                <span className="grad">
                  {t("landing.title").split(" ").slice(-3).join(" ")}
                </span>
              </h1>
              <p className="mt-6 text-text-soft leading-relaxed text-[clamp(17px,1.6vw,20px)] max-w-2xl">
                {t("landing.subtitle")}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href={primaryHref} className="btn btn--primary btn--lg">
                  {primaryLabel}
                  <span className="btn__arrow" aria-hidden="true">→</span>
                </Link>
                <Link href={`/${locale}/app`} className="btn btn--ghost btn--lg">
                  {t("landing.authCta")}
                </Link>
              </div>
            </div>

            {/* Decorative, non-interactive scraper-results preview */}
            <div className="hp" aria-hidden>
              <span className="hp__glow" />
              <div className="hp__win">
                <div className="hp__bar">
                  <span className="hp__dot" />
                  <span className="hp__dot" />
                  <span className="hp__dot" />
                  <span className="hp__url">app.placeharvest.dev</span>
                </div>
                <div className="hp__body">
                  <div className="hp-tb__top">
                    <span className="hp-tb__loc font-cairo" dir="rtl">
                      <span className="hp-tb__pin" />
                      الرياض · مطاعم
                    </span>
                    <span className="hp-tb__export">Export XLSX ↓</span>
                  </div>
                  <div className="hp-tb">
                    <div className="hp-tb__head">
                      <span>Business</span>
                      <span>Category</span>
                      <span style={{ textAlign: "end" }}>★</span>
                    </div>
                    {[
                      { n: "مطعم الطازج", c: "مطاعم", r: "4.7" },
                      { n: "بيت المندي", c: "مطاعم", r: "4.8" },
                      { n: "كافيه لمسة", c: "مقاهي", r: "4.5" },
                      { n: "حلويات سعد", c: "حلويات", r: "4.6" },
                      { n: "شاورما الحطب", c: "وجبات سريعة", r: "4.4" },
                    ].map((row) => (
                      <div className="hp-tb__row" key={row.n}>
                        <span className="hp-tb__name font-cairo" dir="rtl">{row.n}</span>
                        <span className="hp-tb__cat font-cairo" dir="rtl">{row.c}</span>
                        <span className="hp-tb__star">★ {row.r}</span>
                      </div>
                    ))}
                  </div>
                  <div className="hp-tb__foot">
                    <span><b>1,284</b> results</span>
                    <span>2.9s → .xlsx</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-line">
            <div>
              <div className="grad font-display font-semibold text-[clamp(28px,3.4vw,40px)] tracking-tight -mb-1">
                {countryCount}
              </div>
              <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                {t("landing.countries")}
              </div>
            </div>
            <div>
              <div className="grad font-display font-semibold text-[clamp(28px,3.4vw,40px)] tracking-tight -mb-1">
                {divisionCount}
              </div>
              <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                {t("progress.divisions")}
              </div>
            </div>
            <div>
              <div className="grad font-display font-semibold text-[clamp(28px,3.4vw,40px)] tracking-tight -mb-1">
                {centerCount.toLocaleString()}
              </div>
              <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                {t("landing.totalCenters")}
              </div>
            </div>
            <div>
              <div className="grad font-display font-semibold text-[clamp(28px,3.4vw,40px)] tracking-tight -mb-1">
                {"<5m"}
              </div>
              <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                {t("landing.timeToXlsx")}
              </div>
            </div>
          </div>
        </section>

        <section className="pt-16">
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-8">
            {t("landing.featuresTitle")}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="surface p-7">
              <div className="w-10 h-10 rounded-brand-sm bg-white/[0.04] border border-line flex items-center justify-center text-accent text-lg mb-5">
                ⌘
              </div>
              <h3 className="font-display font-semibold text-text mb-3 text-lg">
                {t("landing.feature1Title")}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed">{t("landing.feature1Body")}</p>
            </div>
            <div className="surface p-7">
              <div className="w-10 h-10 rounded-brand-sm bg-white/[0.04] border border-line flex items-center justify-center text-accent text-lg mb-5">
                ⚡
              </div>
              <h3 className="font-display font-semibold text-text mb-3 text-lg">
                {t("landing.feature2Title")}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed">{t("landing.feature2Body")}</p>
            </div>
            <div className="surface p-7">
              <div className="w-10 h-10 rounded-brand-sm bg-white/[0.04] border border-line flex items-center justify-center text-accent text-lg mb-5">
                ↓
              </div>
              <h3 className="font-display font-semibold text-text mb-3 text-lg">
                {t("landing.feature3Title")}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed">{t("landing.feature3Body")}</p>
            </div>
          </div>
        </section>

        <footer className="mt-24 pt-8 border-t border-line text-center text-xs text-text-muted">
          {t("footer.note")}
        </footer>
      </main>
    </>
  );
}
