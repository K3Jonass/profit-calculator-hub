import Link from "next/link";

const calculators = [
  {
    title: "Shopify Profit Calculator",
    description:
      "Estimate product profit after cost, shipping, fees, and ad spend.",
    href: "/calculators/shopify-profit",
    category: "Ecommerce",
  },
  {
    title: "Dropshipping Profit Calculator",
    description:
      "Understand your real profit margin before scaling your store.",
    href: "/calculators/dropshipping-profit",
    category: "Ecommerce",
  },
  {
    title: "SaaS MRR Calculator",
    description:
      "Measure recurring revenue growth and understand subscription momentum.",
    href: "/calculators/saas-mrr",
    category: "SaaS",
  },
  {
    title: "Freelance Rate Calculator",
    description:
      "Set a sustainable freelance rate based on time, expenses, and target income.",
    href: "/calculators/freelance-rate",
    category: "Freelance",
  },
  {
    title: "Breakeven Calculator",
    description:
      "Find the minimum sales volume needed to cover your costs.",
    href: "/calculators/breakeven",
    category: "Business",
  },
  {
    title: "Freelance Project Profit Analyzer",
    description:
      "Check whether a client project is actually worth taking.",
    href: "/calculators/freelance-project-profit",
    category: "Freelance",
  },
  {
    title: "Subscription Leak Calculator",
    description:
      "Identify lost revenue caused by churn, pricing gaps, and weak retention.",
    href: "/calculators/subscription-leak",
    category: "SaaS",
  },
  {
    title: "Revenue Share Calculator",
    description:
      "Model partnership splits and see how revenue is shared between parties.",
    href: "/calculators/revenue-share",
    category: "Deal Making",
  },
  {
    title: "Cost of Delay Calculator",
    description:
      "Measure how much money slow execution is costing your business.",
    href: "/calculators/cost-of-delay",
    category: "Decision Making",
  },
  {
    title: "Business Decision Score Calculator",
    description:
      "Compare decisions with a clearer scoring framework before committing.",
    href: "/calculators/business-decision-score",
    category: "Decision Making",
  },
];

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              ProfitHub Tools
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              All Business Calculators
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Explore ProfitHub’s full collection of free calculators for
              ecommerce, SaaS, freelance work, pricing, and smarter business
              decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {calculators.map((calculator) => (
            <Link
              key={calculator.href}
              href={calculator.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="mb-4">
                <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 transition group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700">
                  {calculator.category}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-slate-900 transition group-hover:text-blue-700">
                {calculator.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {calculator.description}
              </p>

              <div className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 transition group-hover:text-blue-700">
                Open Calculator
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}