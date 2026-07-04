"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export function LangSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const nextLocale = currentLocale === "ar" ? "en" : "ar";
  const nextPath = pathname.replace(/^\/(en|ar)/, `/${nextLocale}`);

  return (
    <Link href={nextPath} className="btn btn--ghost btn--sm" prefetch={false}>
      {t("language")}
    </Link>
  );
}
