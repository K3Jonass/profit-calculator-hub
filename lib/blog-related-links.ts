import { blogPosts } from "@/lib/blog-posts";

type RelatedLink = {
  href: string;
  label: string;
};

const CALCULATOR_BY_SLUG: Record<string, { href: string; label: string }> = {
  "what-is-mrr": { href: "/calculators/saas-mrr", label: "SaaS MRR Calculator" },
  "how-to-calculate-mrr": { href: "/calculators/saas-mrr", label: "SaaS MRR Calculator" },
  "why-mrr-matters": { href: "/calculators/saas-mrr", label: "SaaS MRR Calculator" },
  "what-is-subscription-leak": { href: "/calculators/subscription-leak", label: "Subscription Leak Calculator" },
  "how-to-reduce-subscription-churn": { href: "/calculators/subscription-leak", label: "Subscription Leak Calculator" },
  "subscription-leak-calculator-guide": { href: "/calculators/subscription-leak", label: "Subscription Leak Calculator" },
  "what-is-breakeven-point": { href: "/calculators/breakeven", label: "Breakeven Calculator" },
  "how-to-calculate-breakeven-point": { href: "/calculators/breakeven", label: "Breakeven Calculator" },
  "why-breakeven-analysis-matters": { href: "/calculators/breakeven", label: "Breakeven Calculator" },
  "what-is-cost-of-delay": { href: "/calculators/cost-of-delay", label: "Cost of Delay Calculator" },
  "cost-of-delay-explained": { href: "/calculators/cost-of-delay", label: "Cost of Delay Calculator" },
  "how-to-calculate-cost-of-delay": { href: "/calculators/cost-of-delay", label: "Cost of Delay Calculator" },
  "cost-of-delay-examples": { href: "/calculators/cost-of-delay", label: "Cost of Delay Calculator" },
  "what-is-a-revenue-share-agreement": { href: "/calculators/revenue-share", label: "Revenue Share Calculator" },
  "how-to-calculate-revenue-share": { href: "/calculators/revenue-share", label: "Revenue Share Calculator" },
  "revenue-share-vs-profit-share": { href: "/calculators/revenue-share", label: "Revenue Share Calculator" },
  "how-to-negotiate-revenue-share-deals": { href: "/calculators/revenue-share", label: "Revenue Share Calculator" },
  "revenue-share-contract-red-flags": { href: "/calculators/revenue-share", label: "Revenue Share Calculator" },
  "revenue-share-contract-terms-that-protect-both-sides": { href: "/calculators/revenue-share", label: "Revenue Share Calculator" },
  "how-to-calculate-shopify-profit": { href: "/calculators/shopify-profit", label: "Shopify Profit Calculator" },
  "shopify-profit-margin-explained": { href: "/calculators/shopify-profit", label: "Shopify Profit Calculator" },
  "why-your-shopify-store-is-not-profitable": { href: "/calculators/shopify-profit", label: "Shopify Profit Calculator" },
  "dropshipping-profit-margin": { href: "/calculators/dropshipping-profit", label: "Dropshipping Profit Calculator" },
  "dropshipping-profit-per-product": { href: "/calculators/dropshipping-profit", label: "Dropshipping Profit Calculator" },
  "is-dropshipping-profitable": { href: "/calculators/dropshipping-profit", label: "Dropshipping Profit Calculator" },
  "how-to-price-freelance-work": { href: "/calculators/freelance-rate", label: "Freelance Rate Calculator" },
  "freelance-hourly-vs-project": { href: "/calculators/freelance-rate", label: "Freelance Rate Calculator" },
  "freelance-income-goals": { href: "/calculators/freelance-rate", label: "Freelance Rate Calculator" },
  "how-to-price-freelance-projects-profitably": { href: "/calculators/freelance-project-profit", label: "Freelance Project Profit Analyzer" },
  "freelance-project-profit-explained": { href: "/calculators/freelance-project-profit", label: "Freelance Project Profit Analyzer" },
  "freelance-project-profit-mistakes": { href: "/calculators/freelance-project-profit", label: "Freelance Project Profit Analyzer" },
};

function slugFromHref(href: string) {
  return href.replace("/blog/", "");
}

export function getBlogPrimaryCalculator(href: string): RelatedLink | null {
  const slug = slugFromHref(href);
  const match = CALCULATOR_BY_SLUG[slug];
  return match ?? null;
}

export function getBlogRelatedArticles(href: string, limit = 3): RelatedLink[] {
  const current = blogPosts.find((post) => post.href === href);
  if (!current) {
    return blogPosts.slice(0, limit).map((post) => ({ href: post.href, label: post.title }));
  }

  const sameCategory = blogPosts.filter(
    (post) => post.href !== href && post.primaryCategory === current.primaryCategory,
  );

  const pool = sameCategory.length >= limit ? sameCategory : blogPosts.filter((post) => post.href !== href);

  return pool.slice(0, limit).map((post) => ({ href: post.href, label: post.title }));
}

export function getBlogRelatedCalculators(href: string): RelatedLink[] {
  const primary = getBlogPrimaryCalculator(href);
  const defaults = [
    { href: "/calculators/shopify-profit", label: "Shopify Profit Calculator" },
    { href: "/calculators/saas-mrr", label: "SaaS MRR Calculator" },
    { href: "/calculators/freelance-rate", label: "Freelance Rate Calculator" },
  ];

  if (!primary) {
    return defaults;
  }

  return [primary, ...defaults.filter((item) => item.href !== primary.href)].slice(0, 3);
}
