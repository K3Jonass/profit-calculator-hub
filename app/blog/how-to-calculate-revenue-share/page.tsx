import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { FrenchLocalizedArticle } from "@/components/blog/FrenchLocalizedArticle";
import { ArabicLocalizedArticlePhase2 } from "@/components/blog/ArabicLocalizedArticlePhase2";

const enMeta = {
  title: "How to Calculate Revenue Share: Formula, Examples, and Fair Split Logic",
  description:
    "Learn how to calculate revenue share with a simple formula, practical examples, and fair split logic for partnerships, agencies, creators, and operators.",
};

const frMeta = {
  title: "Comment calculer un partage de revenus : formule, scénarios et logique d’équité",
  description:
    "Apprenez à calculer un partage de revenus avec une méthode claire, des hypothèses vérifiables et des scénarios de négociation réalistes.",
};


const arMeta = {
  title: "كيفية حساب تقاسم الإيرادات: المعادلة، السيناريوهات، ومنطق النسبة العادلة",
  description:
    "تعلّم حساب Revenue Share بدقة مع أمثلة Gross وNet وكيفية بناء كشف شهري واضح يمنع النزاعات بين الشركاء.",
};
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  if (locale === "fr") return frMeta;
  if (locale === "ar") return arMeta;
  return enMeta;
}

export default async function Page() {
  const locale = await getRequestLocale();

  if (locale === "ar") {
    return (
      <ArabicLocalizedArticlePhase2
        slug="how-to-calculate-revenue-share"
        title="كيفية حساب تقاسم الإيرادات: المعادلة، السيناريوهات، ومنطق النسبة العادلة"
        ctaHref="/calculators/revenue-share"
        ctaText="احسب تقاسم الإيرادات"
      />
    );
  }

  if (locale === "fr") {
    return (
      <FrenchLocalizedArticle
        slug="how-to-calculate-revenue-share"
        title="Comment calculer un partage de revenus : formule, scénarios et logique d’équité"
        ctaHref="/calculators/revenue-share"
        ctaText="Calculer un partage de revenus"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        How to Calculate Revenue Share: Formula, Examples, and Fair Split Logic
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        To calculate revenue share, multiply total revenue by each party’s agreed
        percentage. If revenue is $20,000 and one partner receives 30%, that
        partner earns $6,000.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        The math is simple. The structure behind it is where good deals are won
        or destroyed. A clean revenue share model needs more than percentages. It
        needs clarity about what is being split, when payouts happen, and what
        counts as deductible.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        The basic revenue share formula
      </h2>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">
          Revenue Share Amount = Total Revenue × Share Percentage
        </p>
      </div>

      <p className="mb-6 leading-8 text-gray-700">
        If three parties are involved, each percentage should be calculated from
        the same revenue base unless your agreement says otherwise.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Revenue share example: two-party split
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        A digital product generates $12,000 in monthly revenue. One partner owns
        audience and brand, the other handles operations and fulfillment. They
        agree on a 65/35 split.
      </p>

      <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-900">
            <tr>
              <th className="px-4 py-3 font-semibold">Partner</th>
              <th className="px-4 py-3 font-semibold">Share</th>
              <th className="px-4 py-3 font-semibold">Payout</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700">
            <tr className="border-t">
              <td className="px-4 py-3">Partner A</td>
              <td className="px-4 py-3">65%</td>
              <td className="px-4 py-3">$7,800</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3">Partner B</td>
              <td className="px-4 py-3">35%</td>
              <td className="px-4 py-3">$4,200</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Gross revenue vs net revenue calculation
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Before you calculate anything, decide whether the split applies to gross
        revenue or net revenue.
      </p>

      <h3 className="mb-4 mt-8 text-xl font-semibold">
        Gross revenue example
      </h3>

      <p className="mb-6 leading-8 text-gray-700">
        Monthly sales are $15,000. A partner gets 20% of gross revenue. Payout
        equals $3,000, regardless of processing fees or software costs.
      </p>

      <h3 className="mb-4 mt-8 text-xl font-semibold">
        Net revenue example
      </h3>

      <p className="mb-6 leading-8 text-gray-700">
        Monthly sales are $15,000, but refunds, fees, and agreed costs total
        $2,000. Net revenue is $13,000. A 20% share now equals $2,600.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Same business. Same percentage. Different payout. That is why definitions
        matter.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        How to decide a fair revenue split
      </h2>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Who brings distribution or audience?</li>
        <li>Who handles delivery, support, and operations?</li>
        <li>Who carries cash risk or ad spend?</li>
        <li>Who owns the asset if the partnership ends?</li>
        <li>How hard is each role to replace?</li>
      </ul>

      <p className="mb-6 leading-8 text-gray-700">
        Revenue share is not just arithmetic. It is leverage pricing.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Common mistakes in profit split deals
      </h2>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>No agreement on what revenue means</li>
        <li>No rule for refunds or chargebacks</li>
        <li>Costs deducted without approval</li>
        <li>Percentages that total more than 100%</li>
        <li>Emotion-driven splits instead of economic logic</li>
      </ul>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">
          Test your split before signing the deal
        </h3>
        <p className="mb-4 leading-8 text-gray-700">
          Use the ProfitHub Revenue Share Calculator to compare percentages,
          model payout scenarios, and avoid vague partnerships.
        </p>
        <Link
          href="/calculators/revenue-share"
          className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800"
        >
          Open Revenue Share Calculator →
        </Link>
      </div>
    </main>
  );
}