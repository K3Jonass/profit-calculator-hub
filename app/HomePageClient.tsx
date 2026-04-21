import Link from "next/link";
import type { AppLocale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/config";
import { getPublicPageMessages } from "@/lib/i18n/public-pages";
import { getCalculators } from "@/lib/calculators-data";
import { getBlogPosts } from "@/lib/blog-posts";

const categories = [
  {
    title: "Ecommerce Calculators",
    description:
      "Calculate Shopify and dropshipping profitability before scaling ad spend or launching new products.",
    links: [
      { href: "/calculators/shopify-profit", label: "Shopify Profit Calculator" },
      { href: "/calculators/dropshipping-profit", label: "Dropshipping Profit Calculator" },
      { href: "/calculators/breakeven", label: "Breakeven Calculator for Product Pricing" },
    ],
  },
  {
    title: "SaaS Calculators",
    description:
      "Track recurring revenue, churn leakage, and the opportunity cost of delayed product work.",
    links: [
      { href: "/calculators/saas-mrr", label: "SaaS MRR Calculator" },
      { href: "/calculators/subscription-leak", label: "Subscription Leak Calculator" },
      { href: "/calculators/cost-of-delay", label: "Cost of Delay Calculator" },
    ],
  },
  {
    title: "Freelancer & Deal Tools",
    description:
      "Price client work, analyze project profit, and model partnership split scenarios before committing.",
    links: [
      { href: "/calculators/freelance-rate", label: "Freelance Rate Calculator" },
      { href: "/calculators/freelance-project-profit", label: "Freelance Project Profit Analyzer" },
      { href: "/calculators/revenue-share", label: "Revenue Share Calculator" },
    ],
  },
];

const useCases = [
  {
    title: "Validate a new Shopify product offer",
    href: "/calculators/shopify-profit",
    label: "Estimate Shopify product margin before launch",
  },
  {
    title: "Set your freelance pricing floor",
    href: "/calculators/freelance-rate",
    label: "Calculate a sustainable freelance hourly rate",
  },
  {
    title: "Prioritize roadmap work by revenue impact",
    href: "/calculators/cost-of-delay",
    label: "Quantify the cost of delaying product decisions",
  },
  {
    title: "Audit recurring revenue health",
    href: "/calculators/subscription-leak",
    label: "Estimate lost MRR from churn and payment failures",
  },
];

const trustMetrics = [
  { label: "Calculators", value: "20+" },
  { label: "Playbooks", value: "50+" },
  { label: "Use cases", value: "10" },
];

export default function HomePageClient({ locale }: { locale: AppLocale }) {
  const t = getPublicPageMessages(locale);
  const localizedBlogPosts = getBlogPosts(locale);
  const localizedCalculators = getCalculators(locale);
  const latestGuides = localizedBlogPosts.slice(0, 6);
  const popularCalculators = localizedCalculators.slice(0, 6);
  const featuredTools = localizedCalculators.slice(6, 10);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-6 md:pt-12">
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/20 bg-slate-950 px-6 py-12 text-white shadow-[0_24px_80px_rgba(2,6,23,0.55)] motion-fade-up md:px-10 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.3),transparent_34%),linear-gradient(110deg,rgba(15,23,42,0.98)_0%,rgba(30,41,59,0.95)_45%,rgba(2,6,23,1)_100%)]" />
        <div className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-blue-400/30 blur-3xl" />
        <div className="pointer-events-none absolute right-12 top-20 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
              {t.home.heroBadge}
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.03]">
              {t.home.heroTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200/95">
              {t.home.heroDescription}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={withLocale("/calculators", locale)}
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 hover:bg-slate-200"
              >
                {t.home.explore}
              </Link>
              <Link
                href={withLocale("/calculators/shopify-profit", locale)}
                className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
              >
                {t.home.shopify}
              </Link>
              <Link
                href={withLocale("/blog", locale)}
                className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
              >
                {t.home.guides}
              </Link>
            </div>
          </div>

          <div className="motion-stagger grid gap-3 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
            <p className="text-sm font-medium text-slate-100/90">Built for operator-grade decision making</p>
            <div className="grid grid-cols-3 gap-3">
              {trustMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/20 bg-slate-900/40 p-3 text-center">
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
            <p className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-50">
              Run numbers in minutes, then act with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3 motion-stagger">
        {categories.map((category) => (
          <article key={category.title} className="surface-card hover-lift rounded-3xl p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{category.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{category.description}</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {category.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={withLocale(link.href, locale)}
                    className="animated-link font-medium text-slate-900 dark:text-slate-100 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{t.home.popular}</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Start with the calculators most used by founders and operators.
            </p>
          </div>
          <Link
            href={withLocale("/calculators", locale)}
            className="animated-link text-sm font-semibold text-slate-900 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-300"
          >
            View all calculators
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 motion-stagger">
          {popularCalculators.map((item) => (
            <Link
              key={item.href}
              href={withLocale(item.href, locale)}
              className="surface-card hover-lift group rounded-3xl p-5 backdrop-blur-sm"
            >
              <p className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                Calculator
              </p>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 overflow-hidden rounded-3xl border border-blue-200/70 bg-[linear-gradient(145deg,rgba(239,246,255,0.95)_0%,rgba(255,255,255,0.95)_45%,rgba(224,242,254,0.7)_100%)] p-6 shadow-soft dark:border-blue-900/60 dark:bg-[linear-gradient(145deg,rgba(15,23,42,0.96)_0%,rgba(2,6,23,0.95)_100%)]">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{t.home.useCases}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Link
              key={useCase.href}
              href={withLocale(useCase.href, locale)}
              className="hover-lift rounded-2xl border border-blue-100/90 bg-white/90 p-5 backdrop-blur-sm dark:border-blue-900/50 dark:bg-slate-900/80"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{useCase.title}</h3>
              <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">{useCase.label}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{t.home.latest}</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Learn the strategy and formulas behind each calculator output.
            </p>
          </div>
          <Link
            href={withLocale("/blog", locale)}
            className="animated-link text-sm font-semibold text-slate-900 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-300"
          >
            Browse all guides
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 motion-stagger">
          {latestGuides.map((post) => (
            <Link
              key={post.href}
              href={withLocale(post.href, locale)}
              className="surface-card hover-lift group rounded-3xl p-5 backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                {post.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">More tools to explore</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4 motion-stagger">
          {featuredTools.map((tool) => (
            <Link
              key={tool.href}
              href={withLocale(tool.href, locale)}
              className="surface-card hover-lift group rounded-3xl p-5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{tool.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{tool.description}</p>
              <p className="mt-4 text-sm font-semibold text-blue-700 transition group-hover:translate-x-0.5 dark:text-blue-300">
                Open {tool.title} →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="surface-subtle relative mt-14 overflow-hidden rounded-[2rem] p-8 shadow-soft backdrop-blur-sm">
        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-300/20 blur-2xl dark:bg-blue-700/20" />
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Turn insights into faster decisions
        </h2>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
          Pick one calculator, run your numbers, then use linked guides to improve pricing, retention, and
          profitability decisions this week.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={withLocale("/calculators", locale)}
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            Go to the calculators hub
          </Link>
          <Link
            href={withLocale("/contracts", locale)}
            className="ui-button-secondary rounded-xl px-6 py-3 text-sm font-semibold"
          >
            Explore contracts and deal tools
          </Link>
        </div>
      </section>
    </div>
  );
}
