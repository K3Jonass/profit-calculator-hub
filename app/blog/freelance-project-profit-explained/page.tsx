import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { ArabicLocalizedArticlePhase4A } from "@/components/blog/ArabicLocalizedArticlePhase4A";
import { FrenchLocalizedArticlePhase4 } from "@/components/blog/FrenchLocalizedArticlePhase4";

const enMeta = {
  title: "Freelance Project Profit Explained: Why Revenue Is Not Enough",
  description:
    "Learn how to calculate freelance project profit, track real margins, and avoid working on projects that look good but lose money.",
};

const frMeta = {
  title: "Rentabilité d’un projet freelance : ce que le chiffre d’affaires ne montre pas",
  description:
    "Apprenez à mesurer la rentabilité réelle d’un projet freelance en intégrant coûts cachés, temps réel et marge nette.",
};
const arMeta = {
  title: "ربحية المشروع الحر: لماذا لا يكفي النظر إلى الإيراد فقط",
  description:
    "دليل عملي لقياس ربحية مشروع العمل الحر عبر حساب التكاليف الخفية والعائد الفعلي لكل ساعة.",
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
        slug="freelance-project-profit-explained"
        title="Rentabilité d’un projet freelance : ce que le chiffre d’affaires ne montre pas"
        ctaHref="/calculators/freelance-project-profit"
        ctaText="Mesurer ma rentabilité projet"
      />
    );
  }
  if (locale === "ar") {
    return (
      <ArabicLocalizedArticlePhase4A
        slug="freelance-project-profit-explained"
        title="ربحية المشروع الحر: لماذا لا يكفي النظر إلى الإيراد فقط"
        ctaHref="/ar/calculators/freelance-project-profit"
        ctaText="احسب ربحية مشروعك الآن"
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        Freelance Project Profit Explained: Why Revenue Is Not Enough
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        Freelance project profit is the amount of money you keep after subtracting
        all costs related to a project. Not just direct expenses, but also your time,
        revisions, communication overhead, and opportunity cost.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Many freelancers measure success by how much they charge per project.
        That is the wrong metric. A $2,000 project can be less profitable than a
        $500 project if it consumes too much time, includes endless revisions,
        or blocks higher-value opportunities.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Profit is what matters. Not invoice size. Not perceived prestige.
        Not client name. The real question is simple: after everything is done,
        how much did you actually earn per hour and per project?
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        What counts as project cost
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        To calculate real profit, you must include all hidden costs. Most freelancers
        ignore these and end up overestimating how profitable their work is.
      </p>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Your time (execution + communication + revisions)</li>
        <li>Tools, subscriptions, and software</li>
        <li>Outsourcing or subcontractors</li>
        <li>Payment processing fees</li>
        <li>Opportunity cost of not taking other projects</li>
      </ul>

      <p className="mb-6 leading-8 text-gray-700">
        Time is the biggest hidden cost. If a project takes 40 hours instead of 20,
        your effective rate is cut in half.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        The freelance project profit formula
      </h2>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold">
          Project Profit = Project Price - Total Project Costs
        </p>
      </div>

      <p className="mb-6 leading-8 text-gray-700">
        That looks simple, but the accuracy depends on how honest you are about
        your costs, especially time.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Example: high revenue, low profit
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        You charge $1,500 for a project. It takes 50 hours to complete because of
        scope creep, revisions, and unclear communication.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Your effective hourly rate becomes $30/hour. Now compare that to a $600
        project that takes 10 hours. That second project is far more profitable.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        This is why tracking project profitability is more important than chasing
        bigger invoices.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Why freelancers lose money without realizing it
      </h2>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Underestimating time required</li>
        <li>Accepting unlimited revisions</li>
        <li>Poor project scoping</li>
        <li>Low pricing relative to effort</li>
        <li>Working with high-friction clients</li>
      </ul>

      <p className="mb-6 leading-8 text-gray-700">
        These factors slowly reduce profitability even if revenue looks strong.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Think like an operator, not just a freelancer
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Operators don’t chase work. They optimize systems. They evaluate projects
        based on return on time and capital. They reject work that looks good on
        the surface but performs poorly economically.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        If you want to scale your freelance income, you must treat each project
        like an investment decision.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
        <h3 className="mb-3 text-xl font-semibold">
          Calculate your real project profit
        </h3>
        <p className="mb-4 text-gray-700">
          Use the ProfitHub Freelance Project Profit Calculator to evaluate how
          much you actually earn per project.
        </p>
        <Link href="/calculators/freelance-project-profit" className="font-semibold text-blue-700">
          Open Calculator →
        </Link>
      </div>
    </main>
  );
}
