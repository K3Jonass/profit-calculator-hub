import Link from "next/link";
import type { Metadata } from "next";
import { buildBlogArticleMetadata } from "@/lib/site-metadata";
import { getRequestLocale } from "@/lib/i18n/server";
import { ArabicLocalizedArticlePhase3C } from "@/components/blog/ArabicLocalizedArticlePhase3C";
import { FrenchLocalizedArticlePhase3 } from "@/components/blog/FrenchLocalizedArticlePhase3";

const enMeta = {
  title: "What Is MRR? The Core Metric of Every SaaS Business",
  description:
    "Learn what MRR means, how it works, and why it's the most important metric for SaaS growth.",
};

const frMeta = {
  title: "Qu'est-ce que le MRR ? Le KPI central de tout SaaS",
  description:
    "Comprenez le MRR, ses composants et son rôle stratégique pour piloter une croissance SaaS durable et prévisible.",
};
const arMeta = {
  title: "ما هو MRR؟ المؤشر الأساسي لنمو شركات SaaS",
  description:
    "تعرّف على معنى MRR ومكوناته وكيف تستخدمه لقياس النمو المتكرر واتخاذ قرارات تشغيلية أدق في SaaS.",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return buildBlogArticleMetadata("/blog/what-is-mrr", locale, { en: enMeta, fr: frMeta, ar: arMeta });
}

export default async function Page() {
  const locale = await getRequestLocale();

  if (locale === "fr") {
    return (
      <FrenchLocalizedArticlePhase3
        slug="what-is-mrr"
        title="Qu'est-ce que le MRR ? Le KPI central de tout SaaS"
        ctaHref="/calculators/saas-mrr"
        ctaText="Ouvrir le calculateur MRR"
      />
    );
  }
  if (locale === "ar") {
    return (
      <ArabicLocalizedArticlePhase3C
        slug="what-is-mrr"
        title="ما هو MRR؟ المؤشر الأساسي لنمو شركات SaaS"
        ctaHref="/ar/calculators/saas-mrr"
        ctaText="افتح حاسبة MRR"
      />
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        What Is MRR? The Core Metric of Every SaaS Business
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Monthly Recurring Revenue (MRR) is the predictable subscription revenue your SaaS business earns each month. It is the baseline metric investors, operators, and finance teams use to measure growth, forecast cash flow, and value the business.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">How MRR is calculated</h2>
      <p className="mb-4 text-gray-700">
        The simplest formula is: <strong>MRR = number of paying customers × average monthly subscription price</strong>. If you have 200 customers paying $49 per month, your MRR is $9,800.
      </p>
      <p className="mb-6 text-gray-700">
        For annual plans, divide the contract value by 12 before adding it to MRR. Discounts, add-ons, and seat-based pricing should be normalized to a monthly amount so your trend line stays comparable month over month.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">Why MRR matters</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
        <li>It shows whether your recurring revenue engine is growing or stalling.</li>
        <li>It helps you forecast hiring, ad spend, and product investment with less guesswork.</li>
        <li>It is a core input for SaaS valuation multiples and board-level reporting.</li>
        <li>It pairs with churn and expansion metrics to explain the quality of growth, not just the headline number.</li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold">MRR components to track</h2>
      <p className="mb-4 text-gray-700">
        Healthy SaaS teams break MRR into new, expansion, contraction, and churn so they can see what is driving change. New MRR comes from fresh customers. Expansion MRR comes from upgrades and seat growth. Contraction and churn reduce the total.
      </p>
      <p className="mb-6 text-gray-700">
        Tracking these components makes it easier to decide whether to fix onboarding, improve retention, or invest in upsells instead of only chasing top-of-funnel volume.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">Common MRR mistakes</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
        <li>Counting one-time setup fees as recurring revenue.</li>
        <li>Mixing annual and monthly plans without normalizing to monthly values.</li>
        <li>Ignoring failed payments and downgrades until they show up as full churn.</li>
        <li>Looking at total MRR without reviewing net revenue retention.</li>
      </ul>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <p className="mb-3 font-semibold text-blue-900">Calculate your MRR</p>
        <p className="mb-4 text-sm text-gray-700">
          Use the Profithub SaaS MRR Calculator to model customers, plan price, and annual vs monthly billing in under two minutes.
        </p>
        <Link href="/calculators/saas-mrr" className="font-semibold text-blue-700 underline">
          Open the SaaS MRR Calculator →
        </Link>
      </div>
    </article>
  );
}
