import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { FrenchLocalizedArticlePhase3 } from "@/components/blog/FrenchLocalizedArticlePhase3";
import { ArabicLocalizedArticlePhase3A } from "@/components/blog/ArabicLocalizedArticlePhase3A";

const enMeta = {
  title: "Shopify Profit Margin Explained: How to Know If Your Store Is Actually Making Money",
  description:
    "Learn how Shopify profit margins really work, how to calculate them, and how to know if your store is truly profitable.",
};

const frMeta = {
  title: "Marge Shopify expliquée : comment savoir si votre boutique gagne vraiment de l’argent",
  description:
    "Comprenez comment calculer et piloter la marge Shopify réelle pour éviter de scaler un chiffre d’affaires non rentable.",
};

const arMeta = {
  title: "شرح هامش الربح في Shopify: كيف تتأكد أن متجرك يربح فعليًا",
  description:
    "تعلّم كيفية قياس Shopify Profit Margin بدقة وفهم التكاليف الحقيقية التي تحدد ربحية متجرك قبل التوسع.",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  if (locale === "fr") return frMeta;
  if (locale === "ar") return arMeta;
  return enMeta;
}

export default async function Page() {
  const locale = await getRequestLocale();

  if (locale === "ar") {
    return (
      <ArabicLocalizedArticlePhase3A
        slug="shopify-profit-margin-explained"
        title="شرح هامش الربح في Shopify: كيف تتأكد أن متجرك يربح فعليًا"
        ctaHref="/calculators/shopify-profit"
        ctaText="احسب ربح Shopify الآن"
      />
    );
  }

  if (locale === "fr") {
    return (
      <FrenchLocalizedArticlePhase3
        slug="shopify-profit-margin-explained"
        title="Marge Shopify expliquée : comment savoir si votre boutique gagne vraiment de l’argent"
        ctaHref="/calculators/shopify-profit"
        ctaText="Calculer ma marge Shopify"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        Shopify Profit Margin Explained: How to Know If Your Store Is Actually Making Money
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        Shopify profit margin is the percentage of revenue you keep after all
        costs. If you don’t calculate it correctly, you can scale revenue while
        losing money.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Many store owners look at revenue and assume growth equals success. In
        reality, profit margin is what determines whether your business is
        sustainable.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        What counts as Shopify costs
      </h2>

      <ul className="mb-6 list-disc pl-6 space-y-3 text-gray-700 leading-8">
        <li>Product cost (COGS)</li>
        <li>Shipping and fulfillment</li>
        <li>Ad spend</li>
        <li>Payment processing fees</li>
        <li>Apps and subscriptions</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Profit margin formula
      </h2>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-6">
        <p className="font-semibold text-lg">
          Profit Margin = (Revenue - Total Costs) ÷ Revenue
        </p>
      </div>

      <p className="mb-6 leading-8 text-gray-700">
        A store doing $10,000 revenue with $8,000 costs has a 20% margin. That’s
        the number that matters.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Why most Shopify stores fail
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        They scale ads before understanding margins. They optimize for revenue
        instead of profit. They don’t track real costs.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
        <h3 className="font-semibold text-xl mb-3">
          Calculate your real profit
        </h3>
        <p className="mb-4 text-gray-700">
          Use the ProfitHub Shopify Profit Calculator to see your real margins
          and stop guessing.
        </p>
        <Link href="/calculators/shopify-profit" className="font-semibold text-blue-700">
          Open Shopify Profit Calculator →
        </Link>
      </div>
    </main>
  );
}