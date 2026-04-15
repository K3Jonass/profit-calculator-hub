"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { LOCALE_LABELS, SUPPORTED_LOCALES, stripLocaleFromPathname, withLocale } from "@/lib/i18n/config";

type Props = { currentLocale: (typeof SUPPORTED_LOCALES)[number]; label: string };

export default function LanguageSwitcher({ currentLocale, label }: Props) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const basePath = stripLocaleFromPathname(pathname);
  const query = searchParams.toString();

  return (
    <div className="flex items-center gap-2">
      <label className="sr-only" htmlFor="language-switcher">{label}</label>
      <select
        id="language-switcher"
        aria-label={label}
        className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        value={currentLocale}
        onChange={(event) => {
          const next = withLocale(basePath, event.target.value as (typeof SUPPORTED_LOCALES)[number]);
          const href = query ? `${next}?${query}` : next;
          window.location.assign(href);
        }}
      >
        {SUPPORTED_LOCALES.map((locale) => (
          <option key={locale} value={locale}>{LOCALE_LABELS[locale]}</option>
        ))}
      </select>
      <div className="hidden">
        {SUPPORTED_LOCALES.map((locale) => {
          const href = withLocale(basePath, locale);
          return <Link key={locale} href={href}>{LOCALE_LABELS[locale]}</Link>;
        })}
      </div>
    </div>
  );
}
