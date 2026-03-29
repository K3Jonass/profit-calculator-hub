import Link from "next/link";
import type { Metadata } from "next";
import { calculators } from "@/lib/calculators-data";

export const metadata: Metadata = {
  title: "Free Profit Calculators for Online Businesses | ProfitHub",
  description:
    "ProfitHub.cloud offers free online calculators for ecommerce, SaaS, freelance work, subscriptions, revenue sharing, breakeven analysis, and smarter business decisions.",
  alternates: {
    canonical: "/",
  },
};

const featuredPosts = [
  {
    title: "What Is Cost of Delay? The Hidden Revenue Loss Behind Slow Decisions",
    description:
      "Learn how delayed launches and slow decisions quietly destroy revenue and momentum.",
    href: "/blog/what-is-cost-of-delay",
    category: "Business Decision",
  },
  {
    title: "What Is Subscription Leak? The Quiet Revenue Loss Most Businesses Ignore",
    description:
      "See how failed payments, weak retention, and churn silently drain recurring revenue.",
    href: "/blog/what-is-subscription-leak",
    category: "Subscriptions",
  },
  {
    title: "What Is a Breakeven Point? The Number Every Business Should Know",
    description:
      "Understand the number that defines when your business stops losing money.",
    href: "/blog/what-is-breakeven-point",
    category: "Business Finance",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ProfitHub",
    url: "https://profithub.cloud",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://profithub.cloud/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ProfitHub Calculators",
    itemListElement: calculators.slice(0, 10).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `https://profithub.cloud${item.href}`,
    })),
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-14 text-white shadow-sm md:px-10 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.18),transparent_28%)]" />
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-slate-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium text-slate-200 backdrop-blur">
              Free tools for operators, founders, freelancers, and ecommerce sellers
            </div>

            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-bold text-slate-950 shadow-sm">
                PH
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight">ProfitHub</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  profithub.cloud
                </p>
              </div>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl md:leading-[1.02]">
              Free Profit Calculators for Smarter Business Decisions
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              ProfitHub helps you calculate margins, MRR, breakeven points,
              subscription leakage, project profitability, revenue splits, and
              cost of delay with fast tools built for real business decisions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/calculators/shopify-profit"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Start with a Calculator
              </Link>

              <a
                href="#calculators"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore All Tools
              </a>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Read the Blog
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-sm text-slate-400">Focus</p>
                <p className="mt-2 text-xl font-semibold">Profitability</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-sm text-slate-400">Built for</p>
                <p className="mt-2 text-xl font-semibold">Ecommerce, SaaS, Freelance</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-sm text-slate-400">Cost</p>
                <p className="mt-2 text-xl font-semibold">Free to use</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-300">
                  Operator Snapshot
                </p>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Live Thinking
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-400">Margin Pressure</p>
                  <p className="mt-2 text-2xl font-bold text-white">Visible</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Understand if revenue is translating into real profit.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-400">Revenue Leakage</p>
                  <p className="mt-2 text-2xl font-bold text-white">Traceable</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Spot churn, pricing gaps, and delayed decisions faster.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-400">Breakeven Clarity</p>
                  <p className="mt-2 text-2xl font-bold text-white">Actionable</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Know the minimum sales volume your model needs.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-400">Pricing Logic</p>
                  <p className="mt-2 text-2xl font-bold text-white">Sharper</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Make decisions with numbers instead of assumptions.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-medium text-slate-300">
                Built for decisions that affect money
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Profit Margins",
                  "MRR",
                  "Breakeven",
                  "Revenue Share",
                  "Subscription Leak",
                  "Cost of Delay",
                  "Freelance Pricing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">What ProfitHub does</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Turn numbers into decisions
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            ProfitHub is not just a calculator site. It is a practical decision
            layer for pricing, margins, retention, launch timing, and business
            tradeoffs.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Why it matters</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Revenue can hide weak economics
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Founders often scale traffic or sales before understanding margin
            quality, revenue leakage, or breakeven pressure. That creates fake
            momentum.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">How to use it</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Pick a calculator. Stress-test a decision.
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Whether you run a Shopify store, a SaaS product, or freelance
            projects, start with the calculator tied to your most important
            financial question.
          </p>
        </div>
      </section>

      <section id="calculators" className="mt-16">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Explore ProfitHub Calculators
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Free calculators built for ecommerce profitability, SaaS metrics,
              freelance pricing, partnership math, and smarter business calls.
            </p>
          </div>

          <Link
            href="/blog"
            className="text-sm font-semibold text-slate-900 transition hover:text-slate-700"
          >
            Explore guides and insights →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Free Tool
              </div>

              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mb-5 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              <span className="text-sm font-semibold text-slate-900">
                Open calculator →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm md:p-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium text-slate-600">
            Built for real-world business use
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Why use ProfitHub for your online business?
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            Understanding your numbers is the difference between scaling a
            profitable business and growing a machine that leaks money.
            ProfitHub helps ecommerce sellers, SaaS founders, and freelancers
            calculate margins, costs, pricing, recurring revenue, and breakeven
            pressure faster.
          </p>

          <p className="mt-4 text-slate-600 leading-8">
            Whether you are launching products, buying traffic, setting prices,
            or evaluating partnership terms, these calculators help you move
            with more clarity and less financial blind spot.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Featured Insights
            </h2>
            <p className="mt-2 text-slate-600">
              Read practical articles connected to ProfitHub calculators and
              real business decisions.
            </p>
          </div>

          <Link
            href="/blog"
            className="text-sm font-semibold text-slate-900 transition hover:text-slate-700"
          >
            Visit the full blog →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {post.category}
              </div>

              <h3 className="text-2xl font-semibold leading-snug text-slate-900">
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {post.description}
              </p>

              <span className="mt-5 inline-flex text-sm font-semibold text-slate-900">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-900 px-6 py-12 text-white shadow-sm md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Final CTA
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Start with one decision that affects money
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Open a calculator, run the numbers, and turn a vague business
              question into something measurable.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/calculators/breakeven"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Calculate Breakeven
            </Link>
            <Link
              href="/calculators/saas-mrr"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Calculate MRR
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}