import Link from "next/link";
import type { Metadata } from "next";
import { buildBlogArticleMetadata } from "@/lib/site-metadata";
import { getRequestLocale } from "@/lib/i18n/server";
import { ArabicLocalizedArticlePhase4A } from "@/components/blog/ArabicLocalizedArticlePhase4A";
import { FrenchLocalizedArticlePhase4 } from "@/components/blog/FrenchLocalizedArticlePhase4";

const enMeta = {
  title: "Hourly vs Project Pricing: Which One Makes More Money?",
  description:
    "Compare hourly and project pricing to maximize freelance income.",
};

const frMeta = {
  title: "Tarif horaire vs forfait projet : quel modèle freelance est le plus rentable ?",
  description:
    "Comparez facturation horaire et forfait projet pour choisir le modèle qui protège le mieux votre marge freelance.",
};
const arMeta = {
  title: "التسعير بالساعة أم بالمشروع: أي نموذج أكثر ربحية للمستقل؟",
  description:
    "مقارنة عملية بين التسعير بالساعة والتسعير بالمشروع لتختار النموذج الأنسب لهامشك ودخلك في العمل الحر.",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return buildBlogArticleMetadata("/blog/freelance-hourly-vs-project", locale, { en: enMeta, fr: frMeta, ar: arMeta });
}

export default async function Page() {
  const locale = await getRequestLocale();

  if (locale === "fr") {
    return (
      <FrenchLocalizedArticlePhase4
        slug="freelance-hourly-vs-project"
        title="Tarif horaire vs forfait projet : quel modèle freelance est le plus rentable ?"
        ctaHref="/calculators/freelance-rate"
        ctaText="Comparer mes options de tarification"
      />
    );
  }
  if (locale === "ar") {
    return (
      <ArabicLocalizedArticlePhase4A
        slug="freelance-hourly-vs-project"
        title="التسعير بالساعة أم بالمشروع: أي نموذج أكثر ربحية للمستقل؟"
        ctaHref="/ar/calculators/freelance-rate"
        ctaText="قارن نموذج تسعيرك الآن"
      />
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        Hourly vs Project Pricing: Which One Makes More Money?
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Freelancers usually choose between hourly billing and fixed project pricing. Hourly pricing is simple to explain. Project pricing is harder to estimate upfront, but it often produces better margins when scope is defined well.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">When hourly pricing works best</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
        <li>The scope is unclear or changes frequently.</li>
        <li>You are doing advisory, support, or retainer work with open-ended tasks.</li>
        <li>The client needs flexibility and accepts time tracking.</li>
      </ul>
      <p className="mb-6 text-gray-700">
        The downside is an income ceiling: you only earn when you are billing hours. Faster delivery does not increase revenue, and clients may push back on every extra hour.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">When project pricing works best</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
        <li>Deliverables are specific and easy to define.</li>
        <li>You can complete the work efficiently without scope creep.</li>
        <li>The outcome has clear business value for the client.</li>
      </ul>
      <p className="mb-6 text-gray-700">
        Project pricing rewards speed and expertise. If you deliver a $5,000 outcome in fewer hours than a junior freelancer, you keep the margin instead of giving away the upside.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">How to compare both models</h2>
      <p className="mb-4 text-gray-700">
        Start with your minimum hourly floor: salary target + taxes + overhead + profit buffer. Then estimate project hours realistically, including revisions, meetings, and admin time. If the fixed price does not beat your hourly floor, the project is underpriced.
      </p>
      <p className="mb-6 text-gray-700">
        Many freelancers use a hybrid model: fixed price for the core deliverable and hourly billing for out-of-scope requests. That protects margin while keeping change requests billable.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">Which model usually makes more money?</h2>
      <p className="mb-6 text-gray-700">
        Project pricing usually wins for experienced freelancers with repeatable delivery systems. Hourly pricing is safer early on, but it tends to cap income unless rates rise aggressively. The highest earners often productize part of their work and price outcomes instead of time.
      </p>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <p className="mb-3 font-semibold text-blue-900">Calculate your freelance rate floor</p>
        <p className="mb-4 text-sm text-gray-700">
          Use the Profithub Freelance Rate Calculator to compare hourly and project pricing with your real costs and income goals.
        </p>
        <Link href="/calculators/freelance-rate" className="font-semibold text-blue-700 underline">
          Open the Freelance Rate Calculator →
        </Link>
      </div>
    </article>
  );
}
