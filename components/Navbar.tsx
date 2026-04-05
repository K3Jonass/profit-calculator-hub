"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/calculators", label: "Calculators" },
  { href: "/blog", label: "Blog" },
  { href: "/contracts", label: "Contracts & Deal Tools" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:border-slate-800/80 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">

          <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-lg">
            PH
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">ProfitHub</span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">Business Engine</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-2 py-2 shadow-md backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 md:flex">
          {navLinks.map((link) => {
            const isDeal = link.href.includes("contracts");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 animated-link ${
                  isDeal
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:scale-[1.03]"
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
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
