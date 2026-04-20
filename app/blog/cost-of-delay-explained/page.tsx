import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { FrenchLocalizedArticle } from "@/components/blog/FrenchLocalizedArticle";
import { ArabicLocalizedArticlePhase2 } from "@/components/blog/ArabicLocalizedArticlePhase2";

const enMeta = {
  title: "Cost of Delay Explained: Why Slow Decisions Cost Real Money",
  description:
    "Understand cost of delay with simple examples so you can prioritize faster and avoid hidden revenue loss.",
  alternates: {
    canonical: "/blog/cost-of-delay-explained",
  },
};

const frMeta = {
  title: "Coût du retard : pourquoi l’attente détruit silencieusement votre croissance",
  description:
    "Découvrez pourquoi retarder un lancement, une correction ou une décision crée une perte cumulée de revenus, de marge et d’apprentissage.",
  alternates: {
    canonical: "/fr/blog/cost-of-delay-explained",
  },
};


const arMeta = {
  title: "شرح تكلفة التأخير: لماذا يدمّر الانتظار نمو مشروعك بصمت",
  description:
    "فهم عملي لمفهوم Cost of Delay مع أمثلة تطبيقية تساعدك على ترتيب الأولويات بسرعة وحماية الإيراد من خسائر التأجيل المتراكمة.",
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
        slug="cost-of-delay-explained"
        title="شرح تكلفة التأخير: لماذا يدمّر الانتظار نمو مشروعك بصمت"
        ctaHref="/calculators/cost-of-delay"
        ctaText="افتح حاسبة تكلفة التأخير"
      />
    );
  }

  if (locale === "fr") {
    return (
      <FrenchLocalizedArticle
        slug="cost-of-delay-explained"
        title="Coût du retard : pourquoi l’attente détruit silencieusement votre croissance"
        ctaHref="/calculators/cost-of-delay"
        ctaText="Ouvrir le calculateur de coût du retard"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        Cost of Delay: What It Is and How It Silently Destroys Your Business Growth
      </h1>

      <p className="mb-4 text-slate-600">
        The cost of delay is one of the most underestimated factors in business. It represents the money,
        opportunities, and growth you lose every day you postpone a decision, a launch, or an action.
      </p>

      <p className="mb-4 text-slate-600">
        While many founders believe waiting reduces risk, the reality is the opposite. Delaying action
        often costs more than making an imperfect move today.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        What is cost of delay in simple terms?
      </h2>

      <p className="mb-4 text-slate-600">
        Cost of delay is the financial impact of not taking action now. It answers a simple question:
        “How much is it costing me to wait?”
      </p>

      <p className="mb-4 text-slate-600">
        Whether you are launching a product, starting a business, or closing a deal, every delay has a hidden price.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        How to calculate cost of delay
      </h2>

      <p className="mb-4 text-slate-600">
        To calculate cost of delay, estimate your potential monthly revenue and break it down into daily value.
      </p>

      <p className="mb-4 text-slate-600">
        Example: if your business could generate $3,000 per month, that’s about $100 per day. Delaying for 30 days
        means losing approximately $3,000 in potential revenue.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Try the cost of delay calculator
      </h2>

      <p className="mb-4 text-slate-600">
        Instead of guessing, you can use a simple tool to estimate your real losses based on your numbers.
      </p>

      <a
        href="/calculators/cost-of-delay"
        className="mt-4 inline-block rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white"
      >
        Use the Cost of Delay Calculator →
      </a>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Why cost of delay is dangerous
      </h2>

      <p className="mb-4 text-slate-600">
        Most people focus on risk when making decisions, but they ignore the cost of waiting.
        This leads to lost momentum, missed opportunities, and slower growth.
      </p>

      <p className="mb-4 text-slate-600">
        In fast-moving markets, speed is often more valuable than perfection.
        The longer you wait, the more advantage you give to competitors.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Final insight
      </h2>

      <p className="text-slate-600">
        A simple version launched today will almost always outperform a perfect version launched too late.
        Understanding cost of delay helps you move faster, make better decisions, and protect your growth.
      </p>
    </main>
  );
}
