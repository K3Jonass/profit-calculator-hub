import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/contracts/revenue-share", label: "Deal Engine" }, // NEW
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:border-slate-800/80 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">

        {/* LOGO */}
        <Link
          href="/"
          className="group inline-flex items-center gap-3 transition"
          aria-label="ProfitHub Home"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-md transition duration-300 group-hover:bg-blue-500/40" />
            <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-lg">
              PH
            </span>
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              ProfitHub
            </span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
              Business Engine
            </span>
          </div>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-2 py-2 shadow-md backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 md:flex">
          {navLinks.map((link) => {
            const isDeal = link.href.includes("contracts");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200
                  ${
                    isDeal
                      ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md hover:shadow-lg hover:scale-[1.05]"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  }
                `}
              >
                {link.label}

                {/* Glow effect for Deal Engine */}
                {isDeal && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-blue-500/20 blur-md opacity-70" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contracts/revenue-share"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.05] hover:shadow-lg"
          >
            Generate Contract
          </Link>

          <Link
  href="/calculators"
  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
>
  Calculators
</Link>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <Link
            href="/contracts/revenue-share"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-md"
          >
            Contracts
          </Link>
        </div>
      </div>
    </header>
  );
}