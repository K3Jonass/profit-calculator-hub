import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { ArabicLocalizedArticlePhase3C } from "@/components/blog/ArabicLocalizedArticlePhase3C";
import { FrenchLocalizedArticlePhase3 } from "@/components/blog/FrenchLocalizedArticlePhase3";

const enMeta = {
  title: "How to Price Freelance Work: Stop Underselling Yourself",
  description:
    "Learn how to price freelance work based on value, not guesswork.",
};

const frMeta = {
  title: "Comment fixer ses tarifs freelance sans se sous-vendre",
  description:
    "Construisez un pricing freelance rentable avec une méthode basée sur revenu cible, valeur client et protection de marge.",
};
const arMeta = {
  title: "كيفية تسعير العمل الحر دون أن تبيع نفسك بأقل من قيمتك",
  description:
    "منهج عملي لتسعير خدماتك كمستقل بناءً على الدخل المستهدف والقيمة المقدمة وحماية هامش الربح.",
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
        slug="how-to-price-freelance-work"
        title="Comment fixer ses tarifs freelance sans se sous-vendre"
        ctaHref="/calculators/freelance-rate"
        ctaText="Calculer mon tarif freelance"
      />
    );
  }
  if (locale === "ar") {
    return (
      <ArabicLocalizedArticlePhase3C
        slug="how-to-price-freelance-work"
        title="كيفية تسعير العمل الحر دون أن تبيع نفسك بأقل من قيمتك"
        ctaHref="/ar/calculators/freelance-rate"
        ctaText="احسب سعرك كمستقل"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        How to Price Freelance Work
      </h1>

      <p className="mb-6 text-gray-700">
        Most freelancers underprice because they don’t calculate properly.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/freelance-rate" className="font-semibold text-blue-700">
          Calculate your rate →
        </Link>
      </div>
    </main>
  );
}
