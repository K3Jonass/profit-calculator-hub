import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProfitHub Blog",
  description:
    "Read practical articles about business calculators, pricing, profitability, ecommerce, SaaS, freelance work, and smarter money decisions.",
  alternates: {
    canonical: "/blog",
  },
};

const posts = [
  {
    title: "What Is Cost of Delay and Why It’s Destroying Your Business",
    description:
      "Learn what cost of delay means, how to calculate it, and why waiting can silently destroy revenue, momentum, and opportunity.",
    href: "/blog/cost-of-delay-explained",
    category: "Business Decision",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-14 shadow-sm md:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600">
            ProfitHub Blog
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Business Calculators, Pricing, and Profitability Insights
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Read practical articles to help you understand margins, pricing,
            business decisions, and the real numbers behind growth.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Latest Articles
          </h2>
          <p className="mt-2 text-slate-600">
            Explore guides connected to ProfitHub calculators and decision tools.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {post.category}
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                {post.title}
              </h3>

              <p className="mb-5 text-sm leading-6 text-slate-600">
                {post.description}
              </p>

              <span className="text-sm font-semibold text-slate-900">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}