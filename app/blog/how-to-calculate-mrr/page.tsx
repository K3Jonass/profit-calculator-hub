import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return locale === "fr" ? frMeta : enMeta;
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

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        How to Calculate MRR
      </h1>

      <p className="mb-6 text-gray-700">
        MRR = Number of customers × monthly subscription price.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/saas-mrr" className="font-semibold text-blue-700">
          Use MRR Calculator →
        </Link>
      </div>
    </main>
  );
}