import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { ArabicLocalizedArticlePhase4A } from "@/components/blog/ArabicLocalizedArticlePhase4A";
import { FrenchLocalizedArticlePhase4 } from "@/components/blog/FrenchLocalizedArticlePhase4";

const enMeta = {
  title: "How to Price Freelance Projects Profitably (Without Guessing)",
  description:
    "Learn how to price freelance projects based on profit, time, and value so you avoid underpricing and maximize income.",
};

const frMeta = {
  title: "Comment tarifer ses projets freelance de façon rentable",
  description:
    "Construisez une tarification projet rentable avec cadrage, logique de marge, options d’offre et garde-fous contractuels.",
};
const arMeta = {
  title: "كيف تسعّر مشاريع العمل الحر بطريقة مربحة",
  description:
    "تعلم تسعير مشاريعك كمستقل بناءً على الربح والوقت والنطاق والقيمة بدل التخمين أو الضغط السعري.",
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
      <FrenchLocalizedArticlePhase4
        slug="how-to-price-freelance-projects-profitably"
        title="Comment tarifer ses projets freelance de façon rentable"
        ctaHref="/calculators/freelance-project-profit"
        ctaText="Tarifer mon projet avec marge"
      />
    );
  }
  if (locale === "ar") {
    return (
      <ArabicLocalizedArticlePhase4A
        slug="how-to-price-freelance-projects-profitably"
        title="كيف تسعّر مشاريع العمل الحر بطريقة مربحة"
        ctaHref="/ar/calculators/freelance-project-profit"
        ctaText="سعّر مشروعك بهامش واضح"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        How to Price Freelance Projects Profitably (Without Guessing)
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Most freelancers price based on fear, not math. They pick a number that
        feels acceptable instead of calculating what makes the project profitable.
      </p>

      <p className="mb-6 text-gray-700">
        Pricing should be engineered. Not guessed. If you don’t define your cost
        structure and desired profit, you will default to underpricing.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Start with your target profit
      </h2>

      <p className="mb-6 text-gray-700">
        Instead of asking “what should I charge?”, ask:
        how much profit do I want from this project?
      </p>

      <p className="mb-6 text-gray-700">
        Then work backward by estimating time, effort, and costs.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Price based on time reality, not ideal scenarios
      </h2>

      <p className="mb-6 text-gray-700">
        Always assume projects will take longer than expected. Add buffers.
        Account for revisions. Include communication overhead.
      </p>

      <p className="mb-6 text-gray-700">
        Underestimating time is the fastest way to destroy profit.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Build pricing tiers strategically
      </h2>

      <p className="mb-6 text-gray-700">
        Offer multiple packages with clear boundaries. This helps control scope
        and improves profit consistency.
      </p>

      <p className="mb-6 text-gray-700">
        The goal is not just to sell. It’s to sell profitably.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/freelance-project-profit" className="font-semibold text-blue-700">
          Calculate your project profit →
        </Link>
      </div>
    </main>
  );
}
