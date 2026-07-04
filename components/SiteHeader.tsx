import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { stackServerApp } from "@/stack";
import { LangSwitcher } from "@/components/LangSwitcher";
import { UserMenu } from "@/components/UserMenu";

interface Props {
  locale: string;
}

export async function SiteHeader({ locale }: Props) {
  const t = await getTranslations();
  const user = await stackServerApp.getUser();

  return (
    <header className="max-w-[1240px] mx-auto px-8 py-6 flex items-center justify-between gap-4 sticky top-0 z-10 backdrop-blur-xl bg-[rgba(2,2,2,0.7)] border-b border-line">
      <Link href={`/${locale}`} className="flex items-center gap-3 group">
        <div className="w-9 h-9 rounded-brand-sm bg-gradient-to-br from-[#F4F6F9] to-[#8E97A5] flex items-center justify-center text-[#08090B] font-display font-bold text-lg">
          P
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-display font-semibold text-text tracking-tight">
            {t("brand.name")}
          </span>
          <span className="text-[11px] text-text-soft">{t("brand.tagline")}</span>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <LangSwitcher currentLocale={locale} />
        {user ? (
          <UserMenu
            email={user.primaryEmail ?? ""}
            name={user.displayName ?? ""}
            workspaceHref={`/${locale}/app`}
            workspaceLabel={t("nav.workspace")}
            signOutLabel={t("nav.signOut")}
          />
        ) : (
          <div className="flex gap-2">
            <Link
              href={`/handler/sign-in?after_auth_return_to=${encodeURIComponent(`/${locale}/app`)}`}
              className="btn btn--ghost btn--sm"
            >
              {t("nav.signIn")}
            </Link>
            <Link
              href={`/handler/sign-up?after_auth_return_to=${encodeURIComponent(`/${locale}/app`)}`}
              className="btn btn--primary btn--sm"
            >
              {t("nav.signUp")}
              <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
