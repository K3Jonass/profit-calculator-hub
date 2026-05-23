import Link from "next/link";
import type { AppLocale } from "@/lib/i18n/config";
import { DEFAULT_LOCALE, withLocale } from "@/lib/i18n/config";
import { getPublicPageMessages } from "@/lib/i18n/public-pages";
import { getCalculators } from "@/lib/calculators-data";
import { getBlogPosts } from "@/lib/blog-posts";
import ContextualSeoLinks from "@/components/seo/ContextualSeoLinks";
import FAQSection from "@/components/seo/FAQSection";
import { HOME_FAQ } from "@/lib/structured-data";
import { SEO_RESOURCE_FOOTER_LINKS, getHomepageSeoLinks } from "@/lib/seo-internal-links";

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

const cardLinkClassName =
  "text-inherit no-underline after:absolute after:inset-0 after:rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 group-hover:text-blue-700 dark:group-hover:text-blue-300";

const useCaseLinkClassName =
  "text-inherit no-underline after:absolute after:inset-0 after:rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export default function HomePageClient({ locale }: { locale: AppLocale }) {
  const t = getPublicPageMessages(locale);
  const localizedBlogPosts = getBlogPosts(locale);
  const localizedCalculators = getCalculators(locale);
  const latestGuides = localizedBlogPosts.slice(0, 6);
  const popularCalculators = localizedCalculators.slice(0, 6);
  const featuredTools = localizedCalculators.slice(6, 10);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-6 md:pt-12">
      <section
        aria-labelledby="home-hero-heading"
        className="relative isolate min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/20 bg-slate-950 px-6 py-12 text-white shadow-[0_24px_80px_rgba(2,6,23,0.55)] motion-fade-up md:min-h-[32rem] md:px-10 md:py-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.3),transparent_34%),linear-gradient(110deg,rgba(15,23,42,0.98)_0%,rgba(30,41,59,0.95)_45%,rgba(2,6,23,1)_100%)]" />
        <div className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-blue-400/30 blur-3xl" />
        <div className="pointer-events-none absolute right-12 top-20 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
              {t.home.heroBadge}
            </p>

            <h1
              id="home-hero-heading"
              className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.03]"
            >
              {t.home.heroTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200/95">{t.home.heroDescription}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={withLocale("/calculators", locale)}
                className="inline-flex min-h-11 items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 hover:bg-slate-200"
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

          <aside aria-label="Platform highlights" className="motion-stagger grid min-h-[12.5rem] gap-3 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
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
          </aside>
        </div>
      </section>

      <section aria-labelledby="home-calculator-categories-heading" className="mt-10">
        <h2
          id="home-calculator-categories-heading"
          className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
          {t.home.categories}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3 motion-stagger">
          {categories.map((category) => (
            <article key={category.title} className="surface-card hover-lift rounded-3xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{category.title}</h3>
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
        </div>
      </section>

      <section aria-labelledby="home-popular-calculators-heading" className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2
              id="home-popular-calculators-heading"
              className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
            >
              {t.home.popular}
            </h2>
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
            <article key={item.href} className="surface-card hover-lift group relative rounded-3xl p-5 backdrop-blur-sm">
              <p className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                Calculator
              </p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                <Link href={withLocale(item.href, locale)} className={cardLinkClassName}>
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="home-use-cases-heading"
        className="mt-14 overflow-hidden rounded-3xl border border-blue-200/70 bg-[linear-gradient(145deg,rgba(239,246,255,0.95)_0%,rgba(255,255,255,0.95)_45%,rgba(224,242,254,0.7)_100%)] p-6 shadow-soft dark:border-blue-900/60 dark:bg-[linear-gradient(145deg,rgba(15,23,42,0.96)_0%,rgba(2,6,23,0.95)_100%)]"
      >
        <h2 id="home-use-cases-heading" className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {t.home.useCases}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <article
              key={useCase.href}
              className="hover-lift relative rounded-2xl border border-blue-100/90 bg-white/90 p-5 backdrop-blur-sm dark:border-blue-900/50 dark:bg-slate-900/80"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                <Link href={withLocale(useCase.href, locale)} className={useCaseLinkClassName}>
                  {useCase.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">{useCase.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="home-latest-guides-heading" className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2
              id="home-latest-guides-heading"
              className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
            >
              {t.home.latest}
            </h2>
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
            <article key={post.href} className="surface-card hover-lift group relative rounded-3xl p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                {post.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                <Link href={withLocale(post.href, locale)} className={cardLinkClassName}>
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="home-featured-tools-heading" className="mt-14">
        <h2
          id="home-featured-tools-heading"
          className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
          {t.home.featuredTools}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4 motion-stagger">
          {featuredTools.map((tool) => (
            <article key={tool.href} className="surface-card hover-lift group relative rounded-3xl p-5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                <Link href={withLocale(tool.href, locale)} className={cardLinkClassName}>
                  {tool.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{tool.description}</p>
              <p className="mt-4 text-sm font-semibold text-blue-700 transition group-hover:translate-x-0.5 dark:text-blue-300">
                Open {tool.title} →
              </p>
            </article>
          ))}
        </div>
      </section>

      {locale === DEFAULT_LOCALE ? (
        <section aria-labelledby="home-document-guides-heading" className="mt-14">
          <h2
            id="home-document-guides-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
          >
            Freelance document guides
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
            Explore Profithub generators, templates, and guides for contracts, invoices, and client proposals.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 motion-stagger">
            {getHomepageSeoLinks().map((link) => (
              <Link
                key={link.href}
                href={withLocale(link.href, locale)}
                className="surface-card hover-lift rounded-2xl p-5 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{link.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{link.description}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">
            Practical guides:{" "}
            {SEO_RESOURCE_FOOTER_LINKS.filter((link) => link.href.startsWith("/blog/")).map((link, index, items) => (
              <span key={link.href}>
                <Link href={withLocale(link.href, locale)} className="animated-link font-medium text-blue-700 hover:underline dark:text-blue-300">
                  {link.label}
                </Link>
                {index < items.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </section>
      ) : null}

      {t.home.seo ? (
        <section
          aria-labelledby="home-seo-heading"
          className="surface-subtle relative mt-14 overflow-hidden rounded-[2rem] p-6 shadow-soft backdrop-blur-sm md:p-10"
        >
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-300/20 blur-2xl dark:bg-blue-700/20" />
          <h2
            id="home-seo-heading"
            className="relative text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl"
          >
            {t.home.seo.title}
          </h2>
          <div className="relative mx-auto mt-8 max-w-3xl space-y-10">
            {t.home.seo.sections.map((section) => (
              <article key={section.heading}>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-2xl">
                  {section.heading}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{section.body}</p>
              </article>
            ))}
          </div>
          <ContextualSeoLinks
            links={getHomepageSeoLinks().slice(0, 4)}
            prefix="Popular document tools:"
          />
          <div className="relative mt-10">
            <Link
              href={withLocale("/contracts", locale)}
              className="inline-flex rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              {t.home.seo.cta}
            </Link>
          </div>
        </section>
      ) : null}

      {locale === DEFAULT_LOCALE ? (
        <FAQSection title="Frequently asked questions about Profithub" items={HOME_FAQ} />
      ) : null}

      <section
        aria-labelledby="home-cta-heading"
        className="surface-subtle relative mt-14 overflow-hidden rounded-[2rem] p-8 shadow-soft backdrop-blur-sm"
      >
        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-300/20 blur-2xl dark:bg-blue-700/20" />
        <h2 id="home-cta-heading" className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {t.home.ctaSection}
        </h2>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">{t.home.ctaSectionDescription}</p>
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
