"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogArticleEnhancer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBlogIndex = pathname === "/blog";

  if (isBlogIndex) {
    return <>{children}</>;
  }

  return (
    <>
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
        <details className="mt-4 rounded-xl border border-slate-200 p-4">
          <summary className="cursor-pointer font-semibold text-slate-900">Which calculator should I use with this guide?</summary>
          <p className="mt-2 text-sm text-slate-600">Use the calculator most closely aligned with the metric discussed in the article, then compare with at least one related tool for better context.</p>
        </details>
        <details className="mt-3 rounded-xl border border-slate-200 p-4">
          <summary className="cursor-pointer font-semibold text-slate-900">How many internal links should each guide include?</summary>
          <p className="mt-2 text-sm text-slate-600">Aim to link one primary calculator plus at least two related guides or tools using descriptive anchor text.</p>
        </details>
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
