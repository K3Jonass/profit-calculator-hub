"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { blogPosts } from "@/lib/blog-posts";

const blogFaqItems = [
  {
    question: "Which calculator should I use with this guide?",
    answer:
      "Use the calculator that matches the main metric in the article, then compare your result with one related tool for better decision context.",
  },
  {
    question: "How many internal links should each guide include?",
    answer:
      "Include one primary calculator link and at least two related guides using descriptive anchor text that reflects the reader intent.",
  },
];

function toDirectAnswer(description: string) {
  return description
    .replace(/^Learn\s+/i, "")
    .replace(/^Discover\s+/i, "")
    .replace(/^Understand\s+/i, "")
    .replace(/^A practical guide to\s+/i, "")
    .replace(/^A proven\s+/i, "")
    .replace(/^Design\s+/i, "")
    .replace(/^Turn\s+/i, "")
    .replace(/^Use\s+/i, "")
    .replace(/^Build\s+/i, "")
    .replace(/^Set up\s+/i, "")
    .replace(/^Spot\s+/i, "")
    .replace(/^Compare\s+/i, "")
    .replace(/^See\s+/i, "");
}

export default function BlogArticleEnhancer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBlogIndex = pathname === "/blog";

  if (isBlogIndex) {
    return <>{children}</>;
  }

  const post = blogPosts.find((item) => item.href === pathname);
  const articleUrl = `https://profithub.cloud${pathname}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://profithub.cloud/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://profithub.cloud/blog" },
      { "@type": "ListItem", position: 3, name: post?.title ?? "Article", item: articleUrl },
    ],
  };

  const articleSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        url: articleUrl,
        mainEntityOfPage: articleUrl,
        author: {
          "@type": "Organization",
          name: "ProfitHub",
        },
        publisher: {
          "@type": "Organization",
          name: "ProfitHub",
          logo: {
            "@type": "ImageObject",
            url: "https://profithub.cloud/icon.png",
          },
        },
      }
    : null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blogFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const directAnswerIntro = post
    ? `Short answer: ${toDirectAnswer(post.description)}`
    : "Short answer: This guide explains the core concept, formula, and practical actions you can apply with ProfitHub tools.";

  return (
    <>
      {articleSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /> : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Direct answer</p>
        <p className="mt-2 text-sm leading-7 text-slate-700">{directAnswerIntro}</p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-800">Use this calculator</p>
        <p className="mt-2 text-sm text-slate-700">
          Apply this guide with a practical tool from our <Link href="/calculators" className="font-semibold text-blue-700 underline">calculators hub</Link> so you can turn concepts into decisions.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">{children}</div>

      <section className="mx-auto mt-12 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Related calculators</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li><Link href="/calculators/shopify-profit" className="text-blue-700 underline">Shopify Profit Calculator</Link></li>
          <li><Link href="/calculators/saas-mrr" className="text-blue-700 underline">SaaS MRR Calculator</Link></li>
          <li><Link href="/calculators/freelance-rate" className="text-blue-700 underline">Freelance Rate Calculator</Link></li>
        </ul>
      </section>

      <section className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Related articles</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li><Link href="/blog/how-to-calculate-breakeven-point" className="text-blue-700 underline">How to Calculate Breakeven Point</Link></li>
          <li><Link href="/blog/how-to-calculate-shopify-profit" className="text-blue-700 underline">How to Calculate Shopify Profit</Link></li>
          <li><Link href="/blog/how-to-calculate-mrr" className="text-blue-700 underline">How to Calculate MRR</Link></li>
        </ul>
      </section>

      <section className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">FAQ</h2>
        {blogFaqItems.map((item) => (
          <details key={item.question} className="mt-3 rounded-xl border border-slate-200 p-4 first:mt-4">
            <summary className="cursor-pointer font-semibold text-slate-900">{item.question}</summary>
            <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
          </details>
        ))}
      </section>

      <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-800">Use this calculator now</p>
        <p className="mt-2 text-sm text-slate-700">
          Ready to apply this? Open the <Link href="/calculators" className="font-semibold text-blue-700 underline">ProfitHub calculators directory</Link> and run your numbers in under two minutes.
        </p>
      </div>
    </>
  );
}
