import Link from "next/link";
import type { Metadata } from "next";
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
  if (locale === "fr") return frMeta;
  if (locale === "ar") return arMeta;
  return enMeta;
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
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Hourly vs Project Pricing
      </h1>

      <p className="mb-6 text-gray-700">
        Hourly limits income. Project pricing scales it.
      </p>

      <Link href="/calculators/freelance-rate" className="text-blue-700 font-semibold">
        Calculate your rate →
      </Link>
    </main>
  );
}
