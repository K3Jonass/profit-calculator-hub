"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function DecisionScoreClient() {
  const [expectedProfit, setExpectedProfit] = useState(3000);
  const [timeRequired, setTimeRequired] = useState(40);
  const [upfrontCost, setUpfrontCost] = useState(500);
  const [riskLevel, setRiskLevel] = useState(5);
  const [confidenceLevel, setConfidenceLevel] = useState(7);

  const results = useMemo(() => {
    const profitScore =
      expectedProfit >= 5000 ? 35 : expectedProfit >= 2000 ? 25 : expectedProfit >= 1000 ? 18 : 10;

    const timeScore =
      timeRequired <= 20 ? 20 : timeRequired <= 40 ? 14 : timeRequired <= 80 ? 8 : 4;

    const costScore =
      upfrontCost <= 200 ? 15 : upfrontCost <= 500 ? 10 : upfrontCost <= 1000 ? 6 : 2;

    const riskScore =
      riskLevel <= 3 ? 20 : riskLevel <= 6 ? 12 : riskLevel <= 8 ? 6 : 2;

    const confidenceScore =
      confidenceLevel >= 8 ? 10 : confidenceLevel >= 6 ? 7 : confidenceLevel >= 4 ? 4 : 1;

    const totalScore = profitScore + timeScore + costScore + riskScore + confidenceScore;

    let verdict = "Weak Decision";
    let verdictColor = "text-red-600";
    let verdictBg = "bg-red-50 border-red-200";
    let action = "Rework the idea, reduce cost, lower risk, or improve the expected upside before moving forward.";

    if (totalScore >= 75) {
      verdict = "Strong Opportunity";
      verdictColor = "text-green-600";
      verdictBg = "bg-green-50 border-green-200";
      action = "This looks like a strong decision. Move faster, test early, and focus on execution.";
    } else if (totalScore >= 50) {
      verdict = "Acceptable but Risky";
      verdictColor = "text-yellow-600";
      verdictBg = "bg-yellow-50 border-yellow-200";
      action = "There is potential here, but you should tighten the plan, reduce uncertainty, or validate demand first.";
    }

    const reasons = [];

    if (expectedProfit >= 2000) {
      reasons.push("The profit potential is meaningful.");
    } else {
      reasons.push("The upside may be too low for the effort involved.");
    }

    if (timeRequired > 60) {
      reasons.push("This opportunity may consume too much time.");
    } else {
      reasons.push("The time requirement looks manageable.");
    }

    if (upfrontCost > 1000) {
      reasons.push("The upfront cost is heavy and increases decision pressure.");
    } else {
      reasons.push("The upfront cost is relatively manageable.");
    }

    if (riskLevel >= 7) {
      reasons.push("The risk level is high.");
    } else {
      reasons.push("The risk level is still within a workable range.");
    }

    if (confidenceLevel <= 4) {
      reasons.push("Your confidence is low, which may mean the idea needs more validation.");
    } else {
      reasons.push("Your confidence level supports moving forward with structure.");
    }

    return {
  totalScore,
  verdict,
  verdictColor,
  verdictBg,
  action,
  reasons,
  profitScore,
  timeScore,
  costScore,
  riskScore,
  confidenceScore,
};
  }, [expectedProfit, timeRequired, upfrontCost, riskLevel, confidenceLevel]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-slate-200 px-4 py-1 text-sm text-slate-600">
            Free Tool
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Business Decision Score Calculator
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Score a business idea, project, offer, or opportunity based on profit,
            time, cost, risk, and confidence.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Decision Inputs</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Expected Profit ($)
                </label>
                <input
                  type="number"
                  value={expectedProfit}
                  onChange={(e) => setExpectedProfit(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Time Required (Hours)
                </label>
                <input
                  type="number"
                  value={timeRequired}
                  onChange={(e) => setTimeRequired(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Upfront Cost ($)
                </label>
                <input
                  type="number"
                  value={upfrontCost}
                  onChange={(e) => setUpfrontCost(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Risk Level (1 to 10)
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={riskLevel}
                  onChange={(e) => setRiskLevel(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Confidence Level (1 to 10)
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={confidenceLevel}
                  onChange={(e) => setConfidenceLevel(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Decision Analysis</h2>

            <div className={`rounded-2xl border p-4 ${results.verdictBg}`}>
              <p className="text-sm text-slate-600">Verdict</p>
              <p className={`mt-1 text-2xl font-bold ${results.verdictColor}`}>
                {results.verdict}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">Decision Score</p>
              <p className="mt-2 text-4xl font-bold text-slate-900">
                {results.totalScore}/100
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
  <h3 className="text-lg font-semibold">Score breakdown</h3>

  <div className="mt-4 grid gap-4 sm:grid-cols-2">
    <div className="rounded-xl bg-slate-50 px-4 py-3">
      <p className="text-sm text-slate-500">Profit Score</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">
        {results.profitScore}
      </p>
    </div>

    <div className="rounded-xl bg-slate-50 px-4 py-3">
      <p className="text-sm text-slate-500">Time Score</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">
        {results.timeScore}
      </p>
    </div>

    <div className="rounded-xl bg-slate-50 px-4 py-3">
      <p className="text-sm text-slate-500">Cost Score</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">
        {results.costScore}
      </p>
    </div>

    <div className="rounded-xl bg-slate-50 px-4 py-3">
      <p className="text-sm text-slate-500">Risk Score</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">
        {results.riskScore}
      </p>
    </div>

    <div className="rounded-xl bg-slate-50 px-4 py-3 sm:col-span-2">
      <p className="text-sm text-slate-500">Confidence Score</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">
        {results.confidenceScore}
      </p>
    </div>
  </div>
</div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold">Recommended action</h3>
              <p className="mt-3 text-slate-600">
                {results.action}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold">Why this score?</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                {results.reasons.map((reason, index) => (
                  <li key={index}>• {reason}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              When to use this tool
            </h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Evaluating a business idea</li>
              <li>• Rating a freelance offer</li>
              <li>• Choosing between projects</li>
              <li>• Scoring an opportunity before acting</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Common mistakes
            </h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Looking only at profit and ignoring time</li>
              <li>• Underestimating risk</li>
              <li>• Spending too much upfront before validation</li>
              <li>• Moving forward with low confidence and no proof</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Related calculators
          </h2>
          <p className="mt-3 text-slate-600">
            Explore more ProfitHub tools to validate profit, timing, and business risk.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/calculators/cost-of-delay"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Measure cost of delay →
            </Link>

            <Link
              href="/calculators/freelance-project-profit"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Analyze a freelance project →
            </Link>

            <Link
              href="/calculators/revenue-share"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Evaluate a revenue share deal →
            </Link>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Why decision scoring helps
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Most business decisions fail because people focus on one variable only.
            They chase revenue but ignore time, cost, risk, and confidence. A decision
            score helps you judge an opportunity more realistically before you commit.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            This free business decision score calculator gives founders, operators,
            and freelancers a simple framework to compare ideas and move faster with better logic.
          </p>
        </div>
      </section>
    </main>
  );
}