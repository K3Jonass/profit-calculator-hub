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
    title: "What Is Cost of Delay? The Hidden Revenue Loss Behind Slow Decisions",
    description:
      "Learn what Cost of Delay means, how to calculate it, and why slow product or business decisions quietly destroy revenue.",
    href: "/blog/what-is-cost-of-delay",
    category: "Business Decision",
  },
  {
    title: "How to Calculate Cost of Delay: A Simple Formula for Better Prioritization",
    description:
      "Learn how to calculate Cost of Delay using a simple formula, practical examples, and real business scenarios.",
    href: "/blog/how-to-calculate-cost-of-delay",
    category: "Business Decision",
  },
  {
    title: "Cost of Delay Examples: How Ecommerce, SaaS, and Freelancers Lose Money by Waiting",
    description:
      "See real Cost of Delay examples across ecommerce, SaaS, and freelance work and learn how delayed action reduces revenue.",
    href: "/blog/cost-of-delay-examples",
    category: "Business Decision",
  },
  {
    title: "What Is a Revenue Share Agreement? How to Structure Fair Profit Splits",
    description:
      "Learn what a revenue share agreement is, how revenue sharing works, and how to structure fair percentage splits.",
    href: "/blog/what-is-a-revenue-share-agreement",
    category: "Partnerships",
  },
  {
    title: "How to Calculate Revenue Share: Formula, Examples, and Fair Split Logic",
    description:
      "Learn how to calculate revenue share with a simple formula, practical examples, and fair split logic for partnerships.",
    href: "/blog/how-to-calculate-revenue-share",
    category: "Partnerships",
  },
  {
    title: "Revenue Share vs Profit Share: Which Partnership Model Makes More Sense?",
    description:
      "Compare revenue share vs profit share and learn which partnership model works best for creators, operators, and businesses.",
    href: "/blog/revenue-share-vs-profit-share",
    category: "Partnerships",
  },
  {
    title: "What Is Subscription Leak? The Quiet Revenue Loss Most Businesses Ignore",
    description:
      "Learn what subscription leak is, how recurring revenue silently slips away, and why failed payments and weak retention hurt growth.",
    href: "/blog/what-is-subscription-leak",
    category: "Subscriptions",
  },
  {
    title: "How to Reduce Subscription Churn and Stop Recurring Revenue Leakage",
    description:
      "Learn how to reduce subscription churn with better onboarding, payment recovery, cancellation flows, and retention systems.",
    href: "/blog/how-to-reduce-subscription-churn",
    category: "Subscriptions",
  },
  {
    title: "Subscription Leak Calculator: How to Estimate Lost MRR from Churn and Retention Gaps",
    description:
      "Learn how a Subscription Leak Calculator helps estimate lost MRR from churn, failed payments, and retention gaps.",
    href: "/blog/subscription-leak-calculator-guide",
    category: "Subscriptions",
  },
  {
    title: "Shopify Profit Margin Explained: How to Know If Your Store Is Actually Making Money",
    description:
      "Learn how Shopify profit margins really work, how to calculate them, and how to know if your store is truly profitable.",
    href: "/blog/shopify-profit-margin-explained",
    category: "Ecommerce",
  },
  {
    title: "How to Calculate Shopify Profit: A Simple Formula That Actually Works",
    description:
      "Learn how to calculate Shopify profit using a simple formula and understand your real business performance.",
    href: "/blog/how-to-calculate-shopify-profit",
    category: "Ecommerce",
  },
  {
    title: "Why Your Shopify Store Is Not Profitable (Even If You're Making Sales)",
    description:
      "Discover why many Shopify stores generate revenue but fail to be profitable, and how to fix it.",
    href: "/blog/why-your-shopify-store-is-not-profitable",
    category: "Ecommerce",
  },
  {
    title: "Dropshipping Profit Margin: What You Actually Keep Per Sale",
    description:
      "Learn how dropshipping profit margins work, what costs to include, and how to know if your store is actually profitable.",
    href: "/blog/dropshipping-profit-margin",
    category: "Ecommerce",
  },
  {
    title: "Is Dropshipping Still Profitable in 2026?",
    description:
      "Discover if dropshipping is still profitable and what determines success in modern ecommerce.",
    href: "/blog/is-dropshipping-profitable",
    category: "Ecommerce",
  },
  {
    title: "Dropshipping Profit Per Product: How to Price for Real Margins",
    description:
      "Learn how to calculate profit per product in dropshipping and avoid underpricing your offers.",
    href: "/blog/dropshipping-profit-per-product",
    category: "Ecommerce",
  },
  {
    title: "What Is MRR? The Core Metric of Every SaaS Business",
    description:
      "Learn what MRR means, how it works, and why it’s the most important metric for SaaS growth.",
    href: "/blog/what-is-mrr",
    category: "SaaS",
  },
  {
    title: "How to Calculate MRR: Simple SaaS Formula Explained",
    description:
      "Learn how to calculate Monthly Recurring Revenue (MRR) with simple formulas and examples.",
    href: "/blog/how-to-calculate-mrr",
    category: "SaaS",
  },
  {
    title: "Why MRR Matters More Than Revenue in SaaS",
    description:
      "Understand why Monthly Recurring Revenue (MRR) is more important than total revenue for SaaS businesses.",
    href: "/blog/why-mrr-matters",
    category: "SaaS",
  },
  {
    title: "How to Price Freelance Work: Stop Underselling Yourself",
    description:
      "Learn how to price freelance work based on value, time, and income targets instead of guesswork.",
    href: "/blog/how-to-price-freelance-work",
    category: "Freelance",
  },
  {
    title: "Hourly vs Project Pricing: Which One Makes More Money?",
    description:
      "Compare hourly and project pricing to understand which model helps freelancers earn more.",
    href: "/blog/freelance-hourly-vs-project",
    category: "Freelance",
  },
  {
    title: "How Much Should You Charge to Hit Your Income Goals?",
    description:
      "Learn how to reverse-engineer your freelance rate based on your target monthly or yearly income.",
    href: "/blog/freelance-income-goals",
    category: "Freelance",
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
            recurring revenue, business decisions, and the real numbers behind
            growth.
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

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {post.category}
              </div>

              <h3 className="mb-3 text-2xl font-semibold leading-snug text-slate-900">
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