"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";
import ThemeSelector from "@/components/theme/ThemeSelector";
import type { AppLocale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export default function Navbar({ locale }: { locale: AppLocale }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuId = useId();
  const t = getMessages(locale);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/calculators", label: t.nav.calculators },
    { href: "/blog", label: t.nav.blog },
    { href: "/contracts", label: t.nav.contracts },
    { href: "/about", label: t.nav.about },
  ];

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl supports-backdrop-filter:bg-white/65 dark:border-slate-800/80 dark:bg-slate-950/70">
      <div className="relative mx-auto max-w-7xl px-4 py-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href={withLocale("/", locale)} className="group inline-flex items-center gap-3 rounded-2xl p-1">
            <span aria-hidden="true" className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 via-indigo-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition group-hover:scale-[1.03]">
              PH
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Profithub</span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{t.brandTagline}</span>
            </div>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeSelector />
            <LanguageSwitcher currentLocale={locale} label={t.switchLanguage} />
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 p-1.5 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 md:flex">
            {navLinks.map((link) => {
              const isDeal = link.href.includes("contracts");
              return (
                <Link
                  key={link.href}
                  href={withLocale(link.href, locale)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isDeal
                      ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:-translate-y-0.5"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="ui-button-secondary inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl px-3 py-2.5 text-sm font-semibold shadow-sm md:hidden"
            aria-label={t.nav.toggle}
            aria-expanded={isMobileMenuOpen}
            aria-controls={mobileMenuId}
          >
            {isMobileMenuOpen ? t.nav.close : t.nav.menu}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div
            id={mobileMenuId}
            className="absolute inset-x-0 top-full z-50 border-t border-slate-200 bg-white/95 px-4 py-4 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:hidden"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <ThemeSelector />
              <LanguageSwitcher currentLocale={locale} label={t.switchLanguage} />
            </div>
            <nav aria-label="Mobile primary" className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={withLocale(link.href, locale)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-h-11 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
