import Link from "next/link";
import type { Metadata } from "next";
import { buildBlogArticleMetadata } from "@/lib/site-metadata";
import { getRequestLocale } from "@/lib/i18n/server";
import { ArabicLocalizedArticlePhase3C } from "@/components/blog/ArabicLocalizedArticlePhase3C";
import { FrenchLocalizedArticlePhase3 } from "@/components/blog/FrenchLocalizedArticlePhase3";

const enMeta = {
  title: "How to Calculate MRR: Simple SaaS Formula Explained",
  description:
    "Learn how to calculate Monthly Recurring Revenue (MRR) with simple formulas and examples.",
};

const frMeta = {
  title: "Comment calculer le MRR : formule SaaS simple et fiable",
  description:
    "Apprenez à calculer un MRR comparable dans le temps avec une méthode claire incluant expansion, contraction et churn.",
};
const arMeta = {
  title: "كيفية حساب MRR: معادلة SaaS بسيطة ودقيقة",
  description:
    "دليل عملي لحساب MRR خطوة بخطوة مع معالجة الخطط السنوية والخصومات والتوسع والانكماش وchurn.",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return buildBlogArticleMetadata("/blog/how-to-calculate-mrr", locale, { en: enMeta, fr: frMeta, ar: arMeta });
}

export default async function Page() {
  const locale = await getRequestLocale();

  if (locale === "fr") {
    return (
      <FrenchLocalizedArticlePhase3
        slug="how-to-calculate-mrr"
        title="Comment calculer le MRR : formule SaaS simple et fiable"
        ctaHref="/calculators/saas-mrr"
        ctaText="Calculer mon MRR"
      />
    );
  }
  if (locale === "ar") {
    return (
      <ArabicLocalizedArticlePhase3C
        slug="how-to-calculate-mrr"
        title="كيفية حساب MRR: معادلة SaaS بسيطة ودقيقة"
        ctaHref="/ar/calculators/saas-mrr"
        ctaText="احسب MRR الآن"
      />
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        How to Calculate MRR: Simple SaaS Formula Explained
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        To calculate MRR, convert every active subscription to a monthly amount and add them together. The basic formula is <strong>MRR = customers × average monthly subscription price</strong>.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">Step 1: Normalize plan prices to monthly values</h2>
      <p className="mb-4 text-gray-700">
        If a customer pays $1,200 per year, their monthly contribution is $100. Do this for every annual, quarterly, or custom billing cycle before summing totals.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">Step 2: Include discounts and add-ons</h2>
      <p className="mb-6 text-gray-700">
        Subtract recurring discounts from the monthly plan value. Add recurring add-ons such as extra seats, usage blocks, or premium support if they bill every month.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">Step 3: Calculate net MRR movement</h2>
      <p className="mb-4 text-gray-700">
        Track four buckets each month: new MRR, expansion MRR, contraction MRR, and churned MRR. Net new MRR = new + expansion − contraction − churn.
      </p>
      <p className="mb-6 text-gray-700">
        This helps you understand whether growth is healthy or whether you are refilling a leaky bucket with new sales.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">Worked example</h2>
      <p className="mb-4 text-gray-700">
        Suppose you have 120 customers on a $79 monthly plan and 30 customers on a $990 annual plan ($82.50 per month). Base MRR = (120 × 79) + (30 × 82.50) = $9,480 + $2,475 = <strong>$11,955</strong>.
      </p>
      <p className="mb-6 text-gray-700">
        If 5 customers upgrade for an extra $20 per month and 3 customers cancel, expansion adds $100 and churn removes $237 (3 × $79). Net change that month = −$137 before new sales.
      </p>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <p className="mb-3 font-semibold text-blue-900">Run your MRR numbers</p>
        <p className="mb-4 text-sm text-gray-700">
          Use the Profithub SaaS MRR Calculator to model customers, plan mix, and monthly recurring revenue instantly.
        </p>
        <Link href="/calculators/saas-mrr" className="font-semibold text-blue-700 underline">
          Use MRR Calculator →
        </Link>
      </div>
    </article>
  );
}
