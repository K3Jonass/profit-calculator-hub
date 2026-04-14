import Link from "next/link";

const topCalculatorLinks = [
  { href: "/calculators/shopify-profit", label: "Shopify Profit Calculator" },
  { href: "/calculators/saas-mrr", label: "SaaS MRR Calculator" },
  { href: "/calculators/freelance-rate", label: "Freelance Rate Calculator" },
  { href: "/calculators/breakeven", label: "Breakeven Calculator" },
  { href: "/calculators/cost-of-delay", label: "Cost of Delay Calculator" },
];

const topBlogLinks = [
  { href: "/blog/what-is-mrr", label: "What Is MRR?" },
  { href: "/blog/how-to-calculate-shopify-profit", label: "How to Calculate Shopify Profit" },
  { href: "/blog/what-is-breakeven-point", label: "What Is Breakeven Point?" },
  { href: "/blog/what-is-subscription-leak", label: "What Is Subscription Leak?" },
  { href: "/blog/how-to-calculate-revenue-share", label: "How to Calculate Revenue Share" },
];

const contractLinks = [
  { href: "/contracts/revenue-share", label: "Revenue Share Agreement Builder" },
  { href: "/contracts/freelancer", label: "Freelancer Contract Generator" },
  { href: "/contracts/invoice", label: "Invoice Generator" },
  { href: "/contracts/welcome-doc", label: "Client Welcome Document Tool" },
  { href: "/contracts/client-access-request", label: "Client Access Request Tool" },
];

const importantLinks = [
  { href: "/", label: "Home" },
  { href: "/calculators", label: "Calculators Hub" },
  { href: "/blog", label: "Blog Guides" },
  { href: "/about", label: "About ProfitHub" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200/80 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950 px-6 py-10 text-white shadow-[0_24px_70px_rgba(2,6,23,0.4)] md:px-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="relative">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">Use calculators, guides, and deal tools together</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              ProfitHub connects practical calculators with implementation guides so founders, operators, and freelancers can make better money decisions faster.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/calculators" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200">
                Open the calculators hub
              </Link>
              <Link href="/contracts" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15">
                Browse contract and deal tools
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-8 rounded-3xl border border-slate-200/80 bg-white/75 p-8 shadow-soft backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4 dark:border-slate-700 dark:bg-slate-900/70">
          <FooterColumn title="Top calculators" links={topCalculatorLinks} />
          <FooterColumn title="Top blog guides" links={topBlogLinks} />
          <FooterColumn title="Contract / deal tools" links={contractLinks} />
          <FooterColumn title="Important pages" links={importantLinks} />
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ProfitHub.cloud — All rights reserved.</p>
          <p className="text-xs">Built for ecommerce sellers, SaaS operators, freelancers, and business decision makers.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{title}</h3>
      <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="animated-link w-fit transition hover:text-slate-900 dark:hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
