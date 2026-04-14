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
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950 px-6 py-12 text-white shadow-[0_28px_80px_rgba(15,23,42,0.45)] motion-fade-up md:px-10 md:py-16">
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-px w-1/2 bg-linear-to-r from-transparent via-white/35 to-transparent" />

        <div className="relative">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
            ProfitHub Calculator Platform
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
            Free business calculators built like an AI-era operating console
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Use ProfitHub to calculate profit margins, MRR, breakeven targets, subscription leakage, revenue share payouts, and decision impact with practical tools designed for operators.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/calculators" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-slate-200">
              Explore all business calculators
            </Link>
            <Link href="/calculators/shopify-profit" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15">
              Start with Shopify Profit
            </Link>
            <Link href="/blog" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15">
              Read practical guides
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3 motion-stagger">
        {categories.map((category) => (
          <article key={category.title} className="hover-lift rounded-3xl border-soft surface-card p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{category.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{category.description}</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {category.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="animated-link font-medium text-slate-900 dark:text-slate-100 hover:text-blue-700 dark:hover:text-blue-300">
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
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Popular calculators</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Start with the calculators most used by founders and operators.</p>
          </div>
          <Link href="/calculators" className="animated-link text-sm font-semibold text-slate-900 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-300">
            View all calculators
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 motion-stagger">
          {popularCalculators.map((item) => (
            <Link key={item.href} href={item.href} className="hover-lift group rounded-3xl border-soft surface-card p-5">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 overflow-hidden rounded-3xl border border-blue-200/60 bg-linear-to-b from-blue-50 to-white p-6 dark:border-blue-900/50 dark:from-slate-900 dark:to-slate-950">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Common use cases</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Link key={useCase.href} href={useCase.href} className="hover-lift rounded-2xl border border-blue-100 bg-white/85 p-5 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{useCase.title}</h3>
              <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">{useCase.label}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Latest blog guides</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Learn the strategy and formulas behind each calculator output.</p>
          </div>
          <Link href="/blog" className="animated-link text-sm font-semibold text-slate-900 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-300">
            Browse all guides
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 motion-stagger">
          {latestGuides.map((post) => (
            <Link key={post.href} href={post.href} className="hover-lift group rounded-3xl border-soft surface-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{post.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">More tools to explore</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4 motion-stagger">
          {featuredTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="hover-lift group rounded-3xl border-soft surface-card p-5">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{tool.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{tool.description}</p>
              <p className="mt-4 text-sm font-semibold text-blue-700 transition group-hover:translate-x-0.5 dark:text-blue-300">Open {tool.title} →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-[2rem] border border-slate-200/90 bg-slate-100/85 p-8 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Turn insights into faster decisions</h2>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
          Pick one calculator, run your numbers, then use linked guides to improve pricing, retention, and profitability decisions this week.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/calculators" className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500">
            Go to the calculators hub
          </Link>
          <Link href="/contracts" className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
            Explore contracts and deal tools
          </Link>
        </div>
      </section>
    </div>
  );
}
