import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-sm">
                PH
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">ProfitHub</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  profithub.cloud
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-600">
              ProfitHub is a free business calculator platform helping founders,
              freelancers, and ecommerce sellers make smarter financial decisions.
            </p>

            {/* TRUST LINE */}
            <p className="mt-4 text-xs text-slate-500">
              Built for real-world decisions • No signup required • 100% free tools
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Navigation
            </h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <Link href="/blog" className="hover:text-slate-900">
                Blog
              </Link>
              <Link href="/about" className="hover:text-slate-900">
                About
              </Link>
              <Link href="/contact" className="hover:text-slate-900">
                Contact
              </Link>
            </div>
          </div>

          {/* CALCULATORS */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Calculators
            </h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/calculators/shopify-profit" className="hover:text-slate-900">
                Shopify Profit
              </Link>
              <Link href="/calculators/saas-mrr" className="hover:text-slate-900">
                SaaS MRR
              </Link>
              <Link href="/calculators/freelance-project-profit" className="hover:text-slate-900">
                Freelance Project
              </Link>
              <Link href="/calculators/subscription-leak" className="hover:text-slate-900">
                Subscription Leak
              </Link>
              <Link href="/calculators/cost-of-delay" className="hover:text-slate-900">
                Cost of Delay
              </Link>
              <Link href="/calculators/revenue-share" className="hover:text-slate-900">
                Revenue Share
              </Link>
            </div>
          </div>

          {/* LEGAL + SEO TEXT */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Legal
            </h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/privacy-policy" className="hover:text-slate-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-900">
                Terms of Service
              </Link>
            </div>

            {/* SEO micro text */}
            <p className="mt-6 text-xs leading-5 text-slate-500">
              Free profit calculators for ecommerce, SaaS, freelance pricing,
              subscription tracking, revenue share analysis, and business decision making.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} ProfitHub.cloud — All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <span className="rounded-full border border-slate-200 px-3 py-1">
              Free Tools
            </span>
            <span className="rounded-full border border-slate-200 px-3 py-1">
              No Login
            </span>
            <span className="rounded-full border border-slate-200 px-3 py-1">
              Built for Founders
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}