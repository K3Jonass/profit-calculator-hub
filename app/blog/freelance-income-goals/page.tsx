import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { ArabicLocalizedArticlePhase4A } from "@/components/blog/ArabicLocalizedArticlePhase4A";
import { FrenchLocalizedArticlePhase4 } from "@/components/blog/FrenchLocalizedArticlePhase4";

const enMeta = {
  title: "How Much Should You Charge to Hit Your Income Goals?",
  description:
    "Learn how to reverse-engineer your freelance rate based on your income goals.",
};

const frMeta = {
  title: "Objectifs de revenu freelance : méthode concrète pour les atteindre",
  description:
    "Transformez votre objectif de revenu freelance en plan d’action chiffré avec pricing, volume client et pilotage mensuel.",
};
const arMeta = {
  title: "أهداف دخل المستقل: طريقة عملية لتحويل الهدف المالي إلى خطة",
  description:
    "حوّل هدف دخلك في العمل الحر إلى خطة تنفيذية بالأرقام عبر التسعير الصحيح وإدارة الوقت ومزيج الخدمات.",
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
        slug="freelance-income-goals"
        title="Objectifs de revenu freelance : méthode concrète pour les atteindre"
        ctaHref="/calculators/freelance-rate"
        ctaText="Calculer mon objectif de revenu"
      />
    );
  }
  if (locale === "ar") {
    return (
      <ArabicLocalizedArticlePhase4A
        slug="freelance-income-goals"
        title="أهداف دخل المستقل: طريقة عملية لتحويل الهدف المالي إلى خطة"
        ctaHref="/ar/calculators/freelance-rate"
        ctaText="احسب خطة دخلك الآن"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Freelance Income Goals
      </h1>

      <p className="mb-6 text-gray-700">
        Start from your target income, not random pricing.
      </p>

      <Link href="/calculators/freelance-rate" className="text-blue-700 font-semibold">
        Calculate →
      </Link>
    </main>
  );
}
