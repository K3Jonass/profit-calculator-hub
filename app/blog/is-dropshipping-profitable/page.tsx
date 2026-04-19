import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { FrenchLocalizedArticlePhase3 } from "@/components/blog/FrenchLocalizedArticlePhase3";

const enMeta = {
  title: "Is Dropshipping Still Profitable in 2026?",
  description:
    "Discover if dropshipping is still profitable and what determines success in modern ecommerce.",
};

const frMeta = {
  title: "Le dropshipping est-il encore rentable en 2026 ?",
  description:
    "Analysez dans quelles conditions le dropshipping reste rentable et comment éviter les erreurs qui détruisent la marge.",
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
        slug="is-dropshipping-profitable"
        title="Le dropshipping est-il encore rentable en 2026 ?"
        ctaHref="/calculators/dropshipping-profit"
        ctaText="Tester la rentabilité dropshipping"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Is Dropshipping Still Profitable in 2026?
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Dropshipping is profitable if your numbers work. Not because of the model
        itself.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        What decides profitability
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>Cost per acquisition</li>
        <li>Product pricing</li>
        <li>Conversion rate</li>
      </ul>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/dropshipping-profit" className="font-semibold text-blue-700">
          Check your profit →
        </Link>
      </div>
    </main>
  );
}