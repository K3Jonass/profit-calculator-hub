import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { ArabicLocalizedArticlePhase3B } from "@/components/blog/ArabicLocalizedArticlePhase3B";
import { FrenchLocalizedArticlePhase3 } from "@/components/blog/FrenchLocalizedArticlePhase3";

const enMeta = {
  title: "Dropshipping Profit Margin: What You Actually Keep Per Sale",
  description:
    "Learn how dropshipping profit margins work, what costs to include, and how to know if your store is actually profitable.",
};

const frMeta = {
  title: "Marge dropshipping : ce que vous gardez réellement par vente",
  description:
    "Maîtrisez la marge dropshipping réelle en intégrant coûts acquisition, retours, logistique et support pour décider quoi scaler.",
};
const arMeta = {
  title: "هامش الربح في Dropshipping: ما الذي يبقى لك فعليًا من كل طلب",
  description:
    "تعلّم حساب هامش الربح الحقيقي في Dropshipping بعد الإعلانات والمرتجعات والرسوم لاتخاذ قرارات توسع أكثر أمانًا.",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  if (locale === "fr") return frMeta;
  if (locale === "ar") return arMeta;
  return enMeta;
}

export default async function Page() {
  const locale = await getRequestLocale();

  if (locale === "fr") {
    return (
      <FrenchLocalizedArticlePhase3
        slug="dropshipping-profit-margin"
        title="Marge dropshipping : ce que vous gardez réellement par vente"
        ctaHref="/calculators/dropshipping-profit"
        ctaText="Calculer ma marge dropshipping"
      />
    );
  }
  if (locale === "ar") {
    return (
      <ArabicLocalizedArticlePhase3B
        slug="dropshipping-profit-margin"
        title="هامش الربح في Dropshipping: ما الذي يبقى لك فعليًا من كل طلب"
        ctaHref="/ar/calculators/dropshipping-profit"
        ctaText="احسب هامش ربحك الآن"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">
        Dropshipping Profit Margin: What You Actually Keep Per Sale
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Dropshipping looks simple: sell high, buy low. But real profit margins
        are much tighter than most beginners expect.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Real costs in dropshipping
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>Product cost</li>
        <li>Ad spend</li>
        <li>Transaction fees</li>
        <li>Refunds</li>
      </ul>

      <p className="mb-6 text-gray-700">
        If you ignore one of these, your “profit” is fake.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/dropshipping-profit" className="font-semibold text-blue-700">
          Calculate Dropshipping Profit →
        </Link>
      </div>
    </main>
  );
}
