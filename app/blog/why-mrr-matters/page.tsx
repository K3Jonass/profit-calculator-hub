import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { FrenchLocalizedArticlePhase3 } from "@/components/blog/FrenchLocalizedArticlePhase3";

const enMeta = {
  title: "Why MRR Matters More Than Revenue in SaaS",
  description:
    "Understand why Monthly Recurring Revenue (MRR) is more important than total revenue for SaaS businesses.",
};

const frMeta = {
  title: "Pourquoi le MRR compte plus que le revenu total en SaaS",
  description:
    "Découvrez pourquoi le MRR est l’indicateur le plus utile pour arbitrer acquisition, produit, rétention et croissance SaaS.",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return locale === "fr" ? frMeta : enMeta;
}

export default async function Page() {
  const locale = await getRequestLocale();

  if (locale === "fr") {
    return (
      <FrenchLocalizedArticlePhase3
        slug="why-mrr-matters"
        title="Pourquoi le MRR compte plus que le revenu total en SaaS"
        ctaHref="/calculators/saas-mrr"
        ctaText="Analyser mon MRR"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Why MRR Matters More Than Revenue
      </h1>

      <p className="mb-6 text-gray-700">
        One-time revenue is noise. MRR is predictability.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/saas-mrr" className="font-semibold text-blue-700">
          Calculate MRR →
        </Link>
      </div>
    </main>
  );
}