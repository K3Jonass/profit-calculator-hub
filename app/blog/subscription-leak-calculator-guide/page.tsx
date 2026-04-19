import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { FrenchLocalizedArticle } from "@/components/blog/FrenchLocalizedArticle";

const enMeta = {
  title: "Subscription Leak Calculator: How to Estimate Lost MRR from Churn and Retention Gaps",
  description:
    "Learn how a Subscription Leak Calculator helps estimate lost MRR from churn, failed payments, and retention gaps so you can fix revenue leakage before it compounds.",
};

const frMeta = {
  title: "Calculateur de fuite d’abonnement : estimer le MRR perdu et prioriser les actions de rétention",
  description:
    "Utilisez un calculateur de fuite d’abonnement pour estimer le MRR perdu, comparer les leviers et planifier un plan d’action.",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return locale === "fr" ? frMeta : enMeta;
}

export default async function Page() {
  const locale = await getRequestLocale();

  if (locale === "fr") {
    return (
      <FrenchLocalizedArticle
        slug="subscription-leak-calculator-guide"
        title="Calculateur de fuite d’abonnement : estimer le MRR perdu et prioriser les actions de rétention"
        ctaHref="/calculators/subscription-leak"
        ctaText="Lancer le calculateur de fuite"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        Subscription Leak Calculator: How to Estimate Lost MRR from Churn and Retention Gaps
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        A Subscription Leak Calculator helps you estimate how much monthly
        recurring revenue is slipping away because of churn, failed payments, and
        weak retention systems. It turns a vague retention problem into a number
        you can act on.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        That matters because subscription businesses rarely fail from one giant
        event. More often, they bleed through small leak points that compound
        over time. Measuring the leak is how you stop treating it like background
        noise.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        What a subscription leak calculator actually tells you
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        The calculator estimates the value of recurring revenue being lost
        through preventable churn dynamics. Depending on the inputs, it helps you
        understand:
      </p>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>How much MRR is leaking each month</li>
        <li>How small churn rates translate into real money</li>
        <li>What improved retention could save over time</li>
        <li>Why billing and onboarding fixes deserve priority</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Why percentages alone are misleading
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        A 3% churn rate may sound manageable. But if the business is doing
        $50,000 in MRR, that can mean $1,500 disappearing monthly before you even
        account for lifetime value and acquisition replacement costs.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Percentages do not create urgency. Money does.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        How to use the calculator strategically
      </h2>

      <h3 className="mb-4 mt-8 text-xl font-semibold">
        1. Start with current recurring revenue
      </h3>

      <p className="mb-6 leading-8 text-gray-700">
        Use current MRR or subscriber-based revenue as your baseline.
      </p>

      <h3 className="mb-4 mt-8 text-xl font-semibold">
        2. Estimate leak or churn impact
      </h3>

      <p className="mb-6 leading-8 text-gray-700">
        Use realistic churn or loss assumptions based on what you already know
        about cancellations, failed charges, or low retention segments.
      </p>

      <h3 className="mb-4 mt-8 text-xl font-semibold">
        3. Compare the cost of inaction
      </h3>

      <p className="mb-6 leading-8 text-gray-700">
        Once you have a monthly estimate, compare that number against the cost of
        implementing fixes like dunning improvements, onboarding changes, or save
        flows. That is how retention work gets funded.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        What to do after you estimate the leak
      </h2>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Identify whether the main leak is voluntary or involuntary churn</li>
        <li>Prioritize fixes with the fastest retention payoff</li>
        <li>Track recovered revenue over time</li>
        <li>Recalculate regularly as MRR grows</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Retention is a financial system, not just a support function
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Strong subscription businesses treat retention like infrastructure. They
        do not wait for churn to become obvious. They quantify the leak early,
        then build systems to stop it from widening.
      </p>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">
          Measure your recurring revenue leak
        </h3>
        <p className="mb-4 leading-8 text-gray-700">
          Use the ProfitHub Subscription Leak Calculator to estimate lost MRR and
          see what your retention gaps may be costing every month.
        </p>
        <Link
          href="/calculators/subscription-leak"
          className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800"
        >
          Open Subscription Leak Calculator →
        </Link>
      </div>
    </main>
  );
}