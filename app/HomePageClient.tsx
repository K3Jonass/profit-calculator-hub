import Link from "next/link";
import { calculators } from "@/lib/calculators-data";
import { blogPosts } from "@/lib/blog-posts";

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

export default function HomePageClient() {
  const latestGuides = blogPosts.slice(0, 6);
  const popularCalculators = calculators.slice(0, 6);
  const featuredTools = calculators.slice(6, 10);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <section className="rounded-[2rem] bg-slate-950 px-6 py-12 text-white md:px-10">
        <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
          ProfitHub Calculator Platform
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl md:leading-[1.04]">
          Free Business Calculators for Ecommerce, SaaS, and Freelancers
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          Use ProfitHub to calculate profit margins, MRR, breakeven targets, subscription leakage, revenue share payouts, and decision impact with practical tools designed for operators.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/calculators" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200">
            Explore all business calculators
          </Link>
          <Link href="/calculators/shopify-profit" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Start with the Shopify Profit Calculator
          </Link>
          <Link href="/blog" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Read practical calculator guides
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <article key={category.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {category.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-blue-700">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Popular calculators</h2>
            <p className="mt-2 text-slate-600">Start with the calculators most used by founders and operators.</p>
          </div>
          <Link href="/calculators" className="text-sm font-semibold text-slate-900 hover:text-blue-700">
            View all calculators →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {popularCalculators.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Common use cases</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Link key={useCase.href} href={useCase.href} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-slate-900">{useCase.title}</h3>
              <p className="mt-2 text-sm text-blue-700">{useCase.label}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Latest blog guides</h2>
            <p className="mt-2 text-slate-600">Learn the strategy and formulas behind each calculator output.</p>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-slate-900 hover:text-blue-700">
            Browse all guides →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {latestGuides.map((post) => (
            <Link key={post.href} href={post.href} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{post.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">More tools to explore</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <h3 className="text-xl font-semibold text-slate-900">{tool.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{tool.description}</p>
              <p className="mt-4 text-sm font-semibold text-blue-700">Open {tool.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-100 p-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Turn insights into faster decisions</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          Pick one calculator, run your numbers, then use linked guides to improve pricing, retention, and profitability decisions this week.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/calculators" className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700">
            Go to the calculators hub
          </Link>
          <Link href="/contracts" className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
            Explore contracts and deal tools
          </Link>
        </div>
      </section>
    </main>
  );
}
