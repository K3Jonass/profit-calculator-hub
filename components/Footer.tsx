import Link from "next/link";
import type { AppLocale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

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

export default function Footer({ locale }: { locale: AppLocale }) {
  const t = getMessages(locale);
  const importantLinks = [
    { href: "/", label: t.nav.home },
    { href: "/calculators", label: t.calculatorsHub },
    { href: "/blog", label: t.blogGuides },
    { href: "/about", label: t.aboutProfithub },
    { href: "/privacy-policy", label: t.privacyPolicy },
    { href: "/terms", label: t.terms },
  ];

  return (
    <footer className="mt-24 border-t border-slate-200/80 bg-transparent dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950 px-6 py-10 text-white shadow-[0_24px_70px_rgba(2,6,23,0.4)] md:px-10">
          <div className="relative">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">{t.footerCtaTitle}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">{t.footerCtaDescription}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={withLocale("/calculators", locale)} className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 dark:bg-slate-100 dark:hover:bg-white">{t.footerOpenCalculators}</Link>
              <Link href={withLocale("/contracts", locale)} className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15">{t.footerBrowseContracts}</Link>
            </div>
          </div>
        </section>

        <div className="surface-card mt-10 grid gap-8 rounded-3xl p-8 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn locale={locale} title={t.topCalculators} links={topCalculatorLinks} />
          <FooterColumn locale={locale} title={t.topBlogGuides} links={topBlogLinks} />
          <FooterColumn locale={locale} title={t.contractTools} links={contractLinks} />
          <FooterColumn locale={locale} title={t.importantPages} links={importantLinks} />
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ProfitHub.cloud — {t.rights}</p>
          <p className="text-xs">{t.builtFor}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, locale }: { title: string; links: { href: string; label: string }[]; locale: AppLocale }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{title}</h3>
      <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
        {links.map((link) => (
          <Link key={link.href} href={withLocale(link.href, locale)} className="animated-link w-fit transition hover:text-slate-900 dark:hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
