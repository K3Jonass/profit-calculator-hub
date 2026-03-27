import Link from "next/link";
import type { Metadata } from "next";
import { calculators } from "@/lib/calculators-data";

export const metadata: Metadata = {
  title: "Free Profit Calculators for Online Businesses",
  description:
    "Use free online calculators to estimate ecommerce profit, SaaS MRR, freelance rates, and breakeven points.",
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

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-16 shadow-sm md:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600">
            Free tools for founders, freelancers, and ecommerce sellers
          </div>

          <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Free Profit Calculators for Online Businesses
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-600">
            Calculate margins, net profit, MRR, freelance pricing, and breakeven points
            with simple free tools designed to help you make faster business decisions.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/calculators/shopify-profit"
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start with Shopify Calculator
            </Link>
            <a
              href="#calculators"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Explore All Calculators
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Built for</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">
            Ecommerce, SaaS, Freelance
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Use case</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">
            Pricing, Margin, Revenue
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Cost</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">Free to use</p>
        </div>
      </section>

      <section id="calculators" className="mt-16">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Popular Calculators
            </h2>
            <p className="mt-2 text-slate-600">
              Choose a calculator based on the business metric you want to understand.
            </p>
          </div>
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
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mb-4 text-sm leading-6 text-slate-600">{item.description}</p>
              <span className="text-sm font-semibold text-slate-900">
                Open calculator →
              </span>
            </Link>
          ))}
        </div>
      </section>

      
<section className="mt-16 max-w-4xl mx-auto text-center">
  <h2 className="text-2xl font-bold mb-4">
    Why Use Profit Calculators for Your Online Business?
  </h2>

  <p className="text-slate-600 mb-4">
    Understanding your numbers is the difference between scaling a profitable business and losing money without realizing it.
    ProfitHub helps ecommerce sellers, SaaS founders, and freelancers calculate their margins, costs, and break-even points instantly.
  </p>

  <p className="text-slate-600">
    Whether you're running Shopify ads, building a SaaS product, or selling freelance services, these calculators give you clarity before making decisions.
  </p>
</section>

      <section className="mt-16 grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Why use ProfitHub?
          </h2>
          <p className="text-slate-600">
            ProfitHub helps you stop guessing. Whether you are running ads, pricing services,
            or tracking subscriptions, these calculators help you understand the numbers clearly.
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
            <li>• Know your breakeven point before spending</li>
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
              Yes. ProfitHub provides free business calculators for ecommerce sellers,
              SaaS founders, and freelancers.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Are the results exact?
            </h3>
            <p className="text-slate-600">
              The results are estimates based on the numbers you enter. They are useful for decision
              making, but they should not replace professional accounting or tax advice.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Will more calculators be added?
            </h3>
            <p className="text-slate-600">
              Yes. ProfitHub can grow into a larger business calculator hub with more tools,
              templates, and educational content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}