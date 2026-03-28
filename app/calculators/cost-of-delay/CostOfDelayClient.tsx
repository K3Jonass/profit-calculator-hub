"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function CostOfDelayClient() {
  const [monthlyIncome, setMonthlyIncome] = useState(2000);
  const [delayDays, setDelayDays] = useState(30);
  const [setupCost, setSetupCost] = useState(0);

  const results = useMemo(() => {
    const dailyIncome = monthlyIncome / 30;
    const lostRevenue = dailyIncome * delayDays;
    const totalOpportunityCost = lostRevenue + setupCost;
    const delayedMonths = delayDays / 30;

    let verdict = "Small Delay Cost";
    let verdictColor = "text-green-600";
    let verdictBg = "bg-green-50 border-green-200";

    if (totalOpportunityCost >= 1000 && totalOpportunityCost < 5000) {
      verdict = "Costly Delay";
      verdictColor = "text-yellow-600";
      verdictBg = "bg-yellow-50 border-yellow-200";
    } else if (totalOpportunityCost >= 5000) {
      verdict = "Serious Opportunity Loss";
      verdictColor = "text-red-600";
      verdictBg = "bg-red-50 border-red-200";
    }

    return {
      dailyIncome,
      lostRevenue,
      totalOpportunityCost,
      delayedMonths,
      verdict,
      verdictColor,
      verdictBg,
    };
  }, [monthlyIncome, delayDays, setupCost]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-slate-200 px-4 py-1 text-sm text-slate-600">
            Free Tool
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Cost of Delay Calculator
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Estimate how much money you lose by delaying a business idea, launch,
            project, or important decision.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Delay Inputs</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Potential Monthly Income ($)
                </label>
                <input
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Delay Duration (Days)
                </label>
                <input
                  type="number"
                  value={delayDays}
                  onChange={(e) => setDelayDays(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Optional Setup or Lost Momentum Cost ($)
                </label>
                <input
                  type="number"
                  value={setupCost}
                  onChange={(e) => setSetupCost(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Delay Analysis</h2>

            <div className={`rounded-2xl border p-4 ${results.verdictBg}`}>
              <p className="text-sm text-slate-600">Verdict</p>
              <p className={`mt-1 text-2xl font-bold ${results.verdictColor}`}>
                {results.verdict}
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Estimated Daily Value</p>
                <p className="mt-2 text-2xl font-bold">
                  ${results.dailyIncome.toFixed(2)}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Lost Revenue</p>
                <p className="mt-2 text-2xl font-bold">
                  ${results.lostRevenue.toFixed(2)}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Delayed Time</p>
                <p className="mt-2 text-2xl font-bold">
                  {results.delayedMonths.toFixed(1)} months
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Total Opportunity Cost</p>
                <p className="mt-2 text-2xl font-bold">
                  ${results.totalOpportunityCost.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold">What this means</h3>
              <p className="mt-3 text-slate-600">
                Delaying a launch or decision is not neutral. Even if you spend no money
                during the delay, you may still lose revenue, momentum, learning time,
                and opportunities that could have compounded earlier.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              When to use this calculator
            </h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Delaying a business launch</li>
              <li>• Waiting to start a freelance service</li>
              <li>• Postponing a product release</li>
              <li>• Overthinking a monetization decision</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Common mistakes
            </h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Thinking waiting has no cost</li>
              <li>• Ignoring lost momentum and market timing</li>
              <li>• Delaying because the first version is not perfect</li>
              <li>• Measuring only visible costs, not missed earnings</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Related calculators
          </h2>
          <p className="mt-3 text-slate-600">
            Explore more ProfitHub tools to understand profitability, business risk,
            and smarter money decisions.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/calculators/breakeven"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Check your breakeven point →
            </Link>

            <Link
              href="/calculators/revenue-share"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Analyze a revenue share deal →
            </Link>

            <Link
              href="/calculators/freelance-project-profit"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Analyze a freelance project →
            </Link>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Why the cost of delay matters
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            The cost of delay is the value you lose when you postpone action. In business,
            startups, ecommerce, SaaS, freelancing, and content projects, waiting often
            feels safe but quietly destroys opportunity. A simple launch done today can be
            worth more than a perfect launch done too late.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            This free cost of delay calculator helps founders, freelancers, and online
            business operators estimate lost revenue from waiting. It is useful for testing
            ideas, pricing the impact of hesitation, and making faster business decisions.
          </p>
        </div>
      </section>
    </main>
  );
}