import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { ArabicLocalizedArticlePhase3B } from "@/components/blog/ArabicLocalizedArticlePhase3B";
import { FrenchLocalizedArticlePhase3 } from "@/components/blog/FrenchLocalizedArticlePhase3";

const enMeta = {
  title: "Dropshipping Profit Per Product: How to Price for Real Margins",
  description:
    "Learn how to calculate profit per product in dropshipping and avoid underpricing your offers.",
};

const frMeta = {
  title: "Profit dropshipping par produit : comment fixer un prix vraiment rentable",
  description:
    "Calculez le profit net par produit en dropshipping pour filtrer les offres fragiles et scaler les références rentables.",
};
const arMeta = {
  title: "ربح Dropshipping لكل منتج: كيف تسعّر لهامش حقيقي",
  description:
    "احسب الربح الصافي لكل منتج في Dropshipping لتعرف ما يجب توسيعه وما يجب إيقافه قبل خسارة الهامش.",
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
        slug="dropshipping-profit-per-product"
        title="Profit dropshipping par produit : comment fixer un prix vraiment rentable"
        ctaHref="/calculators/dropshipping-profit"
        ctaText="Calculer mon profit par produit"
      />
    );
  }
  if (locale === "ar") {
    return (
      <ArabicLocalizedArticlePhase3B
        slug="dropshipping-profit-per-product"
        title="ربح Dropshipping لكل منتج: كيف تسعّر لهامش حقيقي"
        ctaHref="/ar/calculators/dropshipping-profit"
        ctaText="احسب ربح المنتج الآن"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Dropshipping Profit Per Product: How to Price for Real Margins
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Your business is built one product margin at a time.
      </p>

      <p className="mb-6 text-gray-700">
        If your product only makes $2 profit, scaling won’t save you.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/dropshipping-profit" className="font-semibold text-blue-700">
          Calculate product profit →
        </Link>
      </div>
    </main>
  );
}
