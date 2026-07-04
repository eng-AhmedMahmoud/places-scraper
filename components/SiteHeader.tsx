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
    <header className="mx-auto max-w-6xl px-5 pt-8 pb-6 flex items-center justify-between gap-4">
      <Link href={`/${locale}`} className="flex flex-col gap-1">
        <span className="chip w-fit">{t("brand.tagline")}</span>
        <span className="text-lg font-semibold text-white">{t("brand.product")}</span>
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
              className="surface px-4 py-2 text-sm hover:bg-ink-800/70 transition"
            >
              {t("nav.signIn")}
            </Link>
            <Link
              href={`/handler/sign-up?after_auth_return_to=${encodeURIComponent(`/${locale}/app`)}`}
              className="px-4 py-2 text-sm rounded-lg bg-accent-500 hover:bg-accent-400 text-ink-900 font-semibold transition"
            >
              {t("nav.signUp")}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
