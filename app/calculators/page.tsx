import Link from "next/link";

const calculatorGroups = [
  {
    heading: "Ecommerce Calculators",
    intro:
      "Use these ecommerce calculator tools to validate offer economics, improve contribution margin, and avoid scaling low-profit campaigns.",
    calculators: [
      {
        title: "Shopify Profit Calculator",
        href: "/calculators/shopify-profit",
        description:
          "Estimate Shopify net profit after product cost, ad spend, shipping, and platform fees.",
      },
      {
        title: "Dropshipping Profit Calculator",
        href: "/calculators/dropshipping-profit",
        description:
          "Measure real dropshipping margin so you can decide whether to increase ad spend confidently.",
      },
      {
        title: "Breakeven Calculator",
        href: "/calculators/breakeven",
        description:
          "Find the minimum sales volume required to cover fixed and variable business costs.",
      },
    ],
  },
  {
    heading: "SaaS Calculators",
    intro:
      "Track recurring revenue quality, revenue leakage, and prioritization impact with these SaaS-focused calculators.",
    calculators: [
      {
        title: "SaaS MRR Calculator",
        href: "/calculators/saas-mrr",
        description:
          "Calculate Monthly Recurring Revenue and annualized ARR to monitor subscription growth.",
      },
      {
        title: "Subscription Leak Calculator",
        href: "/calculators/subscription-leak",
        description:
          "Estimate lost recurring revenue caused by churn, failed payments, and retention gaps.",
      },
      {
        title: "Cost of Delay Calculator",
        href: "/calculators/cost-of-delay",
        description:
          "Quantify revenue impact when product launches and growth initiatives are delayed.",
      },
    ],
  },
  {
    heading: "Freelancer & Deal Tools",
    intro:
      "Use these calculators to set sustainable pricing, evaluate client project economics, and negotiate fair partnership structures.",
    calculators: [
      {
        title: "Freelance Rate Calculator",
        href: "/calculators/freelance-rate",
        description:
          "Set a profitable hourly rate based on expenses, tax, utilization, and income goals.",
      },
      {
        title: "Freelance Project Profit Analyzer",
        href: "/calculators/freelance-project-profit",
        description:
          "Check client project profit after labor, revisions, and hidden delivery overhead.",
      },
      {
        title: "Revenue Share Calculator",
        href: "/calculators/revenue-share",
        description:
          "Model partnership payout splits and test fairness before finalizing revenue share terms.",
      },
      {
        title: "Business Decision Score Calculator",
        href: "/calculators/decision-score",
        description:
          "Compare opportunities with weighted scores for profit potential, effort, and strategic fit.",
      },
    ],
  },
];

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="motion-fade-up border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            ProfitHub Calculators Hub
          </span>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Free Business Calculators for Profitability, Pricing, and
            Decision-Making
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Explore every ProfitHub calculator in one place. Each tool is grouped
            by use case so you can move from question to answer faster.
          </p>
        </div>
      </section>

      <section className="motion-fade-up mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {calculatorGroups.map((group) => (
            <section key={group.heading}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                {group.heading}
              </h2>
              <p className="mt-3 max-w-4xl text-slate-600">{group.intro}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {group.calculators.map((calculator) => (
                  <Link
                    key={calculator.href}
                    href={calculator.href}
                    className="hover-lift group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:border-blue-200 hover:shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 transition group-hover:text-blue-700">
                      {calculator.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {calculator.description}
                    </p>

                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 transition group-hover:text-blue-700">
                      Open {calculator.title}
                      <span className="ml-2 transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
