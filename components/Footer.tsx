import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const calculatorLinks = [
  { href: "/calculators/shopify-profit", label: "Shopify Profit" },
  { href: "/calculators/dropshipping-profit", label: "Dropshipping Profit" },
  { href: "/calculators/saas-mrr", label: "SaaS MRR" },
  { href: "/calculators/breakeven", label: "Breakeven" },
  {
    href: "/calculators/freelance-project-profit",
    label: "Freelance Project Profit",
  },
  { href: "/calculators/subscription-leak", label: "Subscription Leak" },
  { href: "/calculators/revenue-share", label: "Revenue Share" },
  { href: "/calculators/cost-of-delay", label: "Cost of Delay" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200/80 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-sm md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium text-slate-200">
                ProfitHub
              </div>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
                Better business decisions start with clearer numbers
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                Use ProfitHub to calculate margins, pricing, recurring revenue,
                breakeven pressure, project profitability, and partnership math
                with tools built for real operators.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/calculators/shopify-profit"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Open a Calculator
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2 xl:grid-cols-4 xl:p-10">
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-md transition duration-300 group-hover:bg-blue-500/20" />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-sm">
                  PH
                </span>
              </div>

              <div>
                <p className="text-lg font-bold text-slate-900">ProfitHub</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  profithub.cloud
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              ProfitHub is a free business calculator platform for founders,
              freelancers, SaaS operators, and ecommerce sellers who want better
              decisions backed by numbers.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                Free Tools
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                No Login
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                Built for Founders
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-600">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Calculators
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-600">
              {calculatorLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Legal
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-600">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-500">
              Free calculators for ecommerce margins, SaaS MRR, freelance
              pricing, breakeven analysis, subscription leakage, revenue share,
              and decision support.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ProfitHub.cloud — All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
              Ecommerce
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
              SaaS
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
              Freelance
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
              Business Finance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}