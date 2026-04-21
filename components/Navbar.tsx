"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";
import ThemeSelector from "@/components/theme/ThemeSelector";
import type { AppLocale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export default function Navbar({ locale }: { locale: AppLocale }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = getMessages(locale);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/calculators", label: t.nav.calculators },
    { href: "/blog", label: t.nav.blog },
    { href: "/contracts", label: t.nav.contracts },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl supports-backdrop-filter:bg-white/65 dark:border-slate-800/80 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href={withLocale("/", locale)} className="group inline-flex items-center gap-3 rounded-2xl p-1">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 via-indigo-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition group-hover:scale-[1.03]">PH</span>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">ProfitHub</span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{t.brandTagline}</span>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeSelector />
          <LanguageSwitcher currentLocale={locale} label={t.switchLanguage} />
        </div>

        <nav className="hidden items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 p-1.5 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 md:flex">
          {navLinks.map((link) => {
            const isDeal = link.href.includes("contracts");
            return (
              <Link key={link.href} href={withLocale(link.href, locale)} className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isDeal
                  ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:-translate-y-0.5"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button type="button" onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="ui-button-secondary inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold shadow-sm md:hidden" aria-label={t.nav.toggle} aria-expanded={isMobileMenuOpen ? "true" : "false"}>
          {isMobileMenuOpen ? t.nav.close : t.nav.menu}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <div className="mb-3 flex items-center justify-between gap-3">
            <ThemeSelector />
            <LanguageSwitcher currentLocale={locale} label={t.switchLanguage} />
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={withLocale(link.href, locale)} onClick={() => setIsMobileMenuOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
