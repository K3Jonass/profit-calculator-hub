import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { ArabicLocalizedArticlePhase3C } from "@/components/blog/ArabicLocalizedArticlePhase3C";
import { FrenchLocalizedArticlePhase3 } from "@/components/blog/FrenchLocalizedArticlePhase3";

const enMeta = {
  title: "What Is MRR? The Core Metric of Every SaaS Business",
  description:
    "Learn what MRR means, how it works, and why it’s the most important metric for SaaS growth.",
};

const frMeta = {
  title: "Qu’est-ce que le MRR ? Le KPI central de tout SaaS",
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
  if (locale === "fr") return frMeta;
  if (locale === "ar") return arMeta;
  return enMeta;
}

export default async function Page() {
  const locale = await getRequestLocale();

  if (locale === "fr") {
    return (
      <FrenchLocalizedArticlePhase3
        slug="what-is-mrr"
        title="Qu’est-ce que le MRR ? Le KPI central de tout SaaS"
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
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        What Is MRR? The Core Metric of Every SaaS Business
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        MRR is the predictable revenue your SaaS generates every month.
      </p>

      <p className="mb-6 text-gray-700">
        It’s the foundation of valuation, growth, and decision-making.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/saas-mrr" className="font-semibold text-blue-700">
          Calculate MRR →
        </Link>
      </div>
    </main>
  );
}
