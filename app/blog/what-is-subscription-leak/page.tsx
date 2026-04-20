import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { FrenchLocalizedArticle } from "@/components/blog/FrenchLocalizedArticle";
import { ArabicLocalizedArticlePhase2 } from "@/components/blog/ArabicLocalizedArticlePhase2";

const enMeta = {
  title: "What Is Subscription Leak? The Quiet Revenue Loss Most Businesses Ignore",
  description:
    "Learn what subscription leak is, how recurring revenue silently slips away, and why failed payments, inactive users, and weak retention systems hurt growth.",
};

const frMeta = {
  title: "Qu’est-ce qu’une fuite d’abonnement ? La perte récurrente que beaucoup d’entreprises ignorent",
  description:
    "Identifiez les causes de fuite d’abonnement : churn, paiements échoués, annulations évitables et frictions d’onboarding.",
};


const arMeta = {
  title: "ما هو تسرب الاشتراكات؟ الخسارة المتكررة التي لا تراها معظم شركات SaaS",
  description:
    "شرح واضح لمعنى Subscription Leak وأبرز مصادر نزيف MRR مثل churn والمدفوعات الفاشلة وضعف الاحتفاظ.",
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
        slug="what-is-subscription-leak"
        title="ما هو تسرب الاشتراكات؟ الخسارة المتكررة التي لا تراها معظم شركات SaaS"
        ctaHref="/calculators/subscription-leak"
        ctaText="افتح حاسبة تسرب الاشتراكات"
      />
    );
  }

  if (locale === "fr") {
    return (
      <FrenchLocalizedArticle
        slug="what-is-subscription-leak"
        title="Qu’est-ce qu’une fuite d’abonnement ? La perte récurrente que beaucoup d’entreprises ignorent"
        ctaHref="/calculators/subscription-leak"
        ctaText="Ouvrir le calculateur de fuite d’abonnement"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        What Is Subscription Leak? The Quiet Revenue Loss Most Businesses Ignore
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        Subscription leak is the recurring revenue a business loses because of
        preventable churn, failed payments, bad retention flows, weak onboarding,
        or unnoticed cancellation patterns. It is not always dramatic. That is
        why it is dangerous.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Many founders only notice visible churn. They see cancellations and move
        on. But subscription businesses also lose money through silent leak
        points: expired cards, involuntary churn, low engagement, poor billing
        recovery, and upgrade opportunities that never happen.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Subscription leak definition
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Subscription leak is recurring revenue that should have been retained but
        was lost through operational weakness instead of unavoidable market
        reality.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        That distinction matters. Some churn is natural. Leak is what remains
        when the loss could have been reduced with better systems.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Common sources of recurring revenue leakage
      </h2>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Failed or expired payment methods</li>
        <li>Poor dunning and recovery emails</li>
        <li>Weak onboarding causing early drop-off</li>
        <li>Customers not reaching first value fast enough</li>
        <li>No save flow on cancellation</li>
        <li>Low product engagement with no intervention</li>
      </ul>

      <h3 className="mb-4 mt-8 text-xl font-semibold">
        Involuntary churn is not small
      </h3>

      <p className="mb-6 leading-8 text-gray-700">
        Businesses often focus on users who choose to leave. But involuntary
        churn from failed payments alone can quietly drain a meaningful part of
        MRR. If you are not measuring it, you are probably underestimating it.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Why subscription leak matters more than vanity growth
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        A subscription business does not scale cleanly when its bucket is
        leaking. More acquisition will help on the surface, but underlying
        revenue efficiency stays weak. You end up buying growth while losing the
        compounding effect that makes subscriptions powerful in the first place.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Retained revenue is usually higher leverage than new revenue. It is
        cheaper to protect what is already on the books than to constantly refill
        the pipeline.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Signs your business has a leak problem
      </h2>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>MRR grows slower than customer acquisition suggests</li>
        <li>Churn feels “normal” but compounds aggressively over time</li>
        <li>Failed payments do not trigger strong recovery flows</li>
        <li>Customers cancel before reaching product value</li>
        <li>You track signups better than retention</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Measure the leak before you try to fix it
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Founders often jump to tactics too early. Before changing onboarding,
        pricing, or dunning, quantify how much recurring revenue is slipping
        away. Once you know the size of the leak, you can prioritize the highest
        leverage fix.
      </p>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">
          Estimate lost recurring revenue
        </h3>
        <p className="mb-4 leading-8 text-gray-700">
          Use the ProfitHub Subscription Leak Calculator to measure how much MRR
          your business may be losing through churn and preventable retention
          gaps.
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