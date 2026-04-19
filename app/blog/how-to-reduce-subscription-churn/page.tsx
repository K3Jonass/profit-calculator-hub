import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { FrenchLocalizedArticle } from "@/components/blog/FrenchLocalizedArticle";

const enMeta = {
  title: "How to Reduce Subscription Churn and Stop Recurring Revenue Leakage",
  description:
    "Learn how to reduce subscription churn with better onboarding, payment recovery, cancellation flows, and retention systems that protect recurring revenue.",
};

const frMeta = {
  title: "Comment réduire le churn d’abonnement et protéger votre MRR durablement",
  description:
    "Mettez en place un système anti-churn avec onboarding, recouvrement des paiements, signaux de risque et boucles de rétention.",
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
        slug="how-to-reduce-subscription-churn"
        title="Comment réduire le churn d’abonnement et protéger votre MRR durablement"
        ctaHref="/calculators/subscription-leak"
        ctaText="Mesurer vos pertes de MRR"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        How to Reduce Subscription Churn and Stop Recurring Revenue Leakage
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        To reduce subscription churn, fix the points where customers fail to
        reach value, fail to pay, or leave without intervention. Most
        subscription leak is not caused by a single issue. It is caused by a
        sequence of weak retention systems.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Businesses that protect recurring revenue do not rely on luck. They
        engineer retention across onboarding, billing, engagement, support, and
        cancellation recovery.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        1. Improve onboarding to reduce early churn
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Many subscribers leave before they experience the real value of the
        product. That usually means onboarding is too slow, too vague, or too
        passive.
      </p>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Reduce time to first meaningful result</li>
        <li>Guide users toward one core outcome first</li>
        <li>Trigger help before users go inactive</li>
        <li>Remove friction in setup and activation</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        2. Recover failed payments aggressively
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Failed payments are one of the most preventable causes of subscription
        leak. Yet many small businesses still rely on weak default billing
        behavior.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Recovery systems should include:
      </p>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Multiple retry attempts</li>
        <li>Clear payment update reminders</li>
        <li>Urgent but useful billing emails</li>
        <li>In-app warnings before access interruption</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        3. Intervene before customers cancel
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Most churn does not appear from nowhere. It is preceded by lower usage,
        slower logins, or lower success signals. If you only react after
        cancellation, you are already late.
      </p>

      <h3 className="mb-4 mt-8 text-xl font-semibold">
        Watch for these warning signs
      </h3>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Drop in engagement frequency</li>
        <li>Incomplete setup</li>
        <li>No key action completed</li>
        <li>Support requests tied to confusion or low value</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        4. Build a smarter cancellation flow
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        A cancellation page should not be a dead end. It should gather signal,
        offer alternatives, and recover value where appropriate.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Depending on the business, that may include a pause option, a downgrade,
        a usage-based plan, short-term discounting, or a support call for higher
        value accounts.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        5. Measure the leak in actual money
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Teams talk about churn percentages all day, but percentages can hide the
        true scale of lost revenue. Convert churn into monthly recurring revenue
        loss. That gives the problem weight and forces better prioritization.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Once the team sees the leak in dollars, retention work stops looking
        “secondary.”
      </p>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">
          See how much churn may be costing you
        </h3>
        <p className="mb-4 leading-8 text-gray-700">
          Use the ProfitHub Subscription Leak Calculator to estimate recurring
          revenue loss and prioritize the retention fixes with the highest payoff.
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