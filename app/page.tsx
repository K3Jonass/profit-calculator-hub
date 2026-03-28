import Link from "next/link";
import type { Metadata } from "next";
import { calculators } from "@/lib/calculators-data";

export const metadata: Metadata = {
  title: "Free Profit Calculators for Online Businesses",
  description:
    "ProfitHub.cloud offers free online profit calculators for ecommerce, SaaS, freelancers, subscriptions, revenue share deals, and cost of delay analysis.",
  alternates: {
    canonical: "/",
  },
};

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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ProfitHub Featured Insights",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://profithub.cloud/blog/cost-of-delay-explained",
        name: "What Is Cost of Delay and Why It’s Destroying Your Business",
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-16 shadow-sm md:px-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white shadow-sm">
                PH
              </div>
              <div className="text-left">
                <p className="text-lg font-bold tracking-tight text-slate-900">
                  ProfitHub
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  profithub.cloud
                </p>
              </div>
            </div>

            <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600">
              Free tools for founders, freelancers, ecommerce sellers, and operators
            </div>

            <h1 className="mb-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl md:leading-[1.05]">
              Free Profit Calculators for Smarter Business Decisions
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-600">
              ProfitHub.cloud helps you calculate margins, profit, MRR, subscription waste,
              freelance project value, revenue share fairness, and cost of delay with simple
              free tools built for real decision making.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/calculators/shopify-profit"
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Start with a Calculator
              </Link>
              <a
                href="#calculators"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore All Tools
              </a>
              <Link
                href="/blog"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Read the Blog
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Built for</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                Ecommerce
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Built for</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                SaaS
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Built for</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                Freelance
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Cost</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                Free to use
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">What ProfitHub does</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Turn numbers into decisions
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            ProfitHub is not just a calculator website. It is a decision engine for pricing,
            margins, launch timing, subscriptions, and business tradeoffs.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Why it matters</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Stop guessing with money
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Many founders and freelancers lose money because they do not measure hidden costs,
            wasted subscriptions, weak deals, or the price of delaying action.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">What you get</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Fast free business clarity
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Use free calculators and practical guides to make better decisions before you spend,
            launch, split revenue, or accept a project.
          </p>
        </div>
      </section>

      <section id="calculators" className="mt-16">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Popular Calculators
            </h2>
            <p className="mt-2 text-slate-600">
              Choose a calculator based on the business metric or decision you want to understand.
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
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Free Tool
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mb-4 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
              <span className="text-sm font-semibold text-slate-900">
                Open calculator →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Why Use Profit Calculators for Your Online Business?
          </h2>

          <p className="mt-4 text-slate-600">
            Understanding your numbers is the difference between scaling a profitable business
            and losing money without realizing it. ProfitHub helps ecommerce sellers, SaaS founders,
            and freelancers calculate margins, costs, pricing, and break-even points instantly.
          </p>

          <p className="mt-4 text-slate-600">
            Whether you are running Shopify ads, building a SaaS product, launching a side project,
            or selling freelance services, these calculators help you make faster and smarter decisions.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Latest Insights
          </h2>
          <p className="mt-2 text-slate-600">
            Read practical articles connected to ProfitHub calculators and real business decisions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/cost-of-delay-explained"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              Business Decision
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">
              What Is Cost of Delay and Why It’s Destroying Your Business
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Learn how delaying a launch, decision, or project can silently destroy revenue,
              momentum, and growth.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-slate-900">
              Read article →
            </span>
          </Link>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-sm">
            <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
              ProfitHub Blog
            </div>
            <h3 className="mt-4 text-2xl font-semibold">
              More articles are coming
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              We are building practical content around pricing, subscriptions, freelance profitability,
              revenue share deals, and business opportunity cost.
            </p>
            <Link
              href="/blog"
              className="mt-5 inline-block rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Visit the blog
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Why use ProfitHub?
          </h2>
          <p className="text-slate-600">
            ProfitHub helps you stop guessing. Whether you are running ads, pricing services,
            reviewing subscriptions, analyzing a revenue split, or measuring the cost of waiting,
            these tools help you understand the numbers clearly.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-slate-900">
            Common use cases
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li>• Check Shopify margins before scaling ads</li>
            <li>• Validate a dropshipping product before launch</li>
            <li>• Estimate SaaS MRR and ARR quickly</li>
            <li>• Price freelance work with more confidence</li>
            <li>• Analyze whether a project is worth taking</li>
            <li>• Find hidden subscription waste</li>
            <li>• Measure the cost of delaying a launch</li>
            <li>• Judge if a revenue share deal is fair</li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Are these calculators free?
            </h3>
            <p className="text-slate-600">
              Yes. ProfitHub.cloud provides free business calculators for ecommerce sellers,
              SaaS founders, freelancers, and anyone who wants clearer financial decisions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Are the results exact?
            </h3>
            <p className="text-slate-600">
              The results are estimates based on the numbers you enter. They are useful for
              decision making, but they should not replace professional accounting, legal,
              or tax advice.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              What makes ProfitHub different?
            </h3>
            <p className="text-slate-600">
              ProfitHub focuses on calculators that support real business decisions, not just
              raw math. The goal is to help you understand profitability, tradeoffs, hidden costs,
              and opportunity loss faster.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Will more calculators and articles be added?
            </h3>
            <p className="text-slate-600">
              Yes. ProfitHub can grow into a larger business calculator and insights platform
              with more tools, templates, articles, and educational content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}