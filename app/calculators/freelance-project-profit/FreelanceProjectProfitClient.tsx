"use client";

import { useMemo, useState } from "react";

export default function FreelanceProjectProfitPage() {
  const [projectPrice, setProjectPrice] = useState(1000);
  const [estimatedHours, setEstimatedHours] = useState(20);
  const [extraRevisionHours, setExtraRevisionHours] = useState(4);
  const [platformFeePercent, setPlatformFeePercent] = useState(10);
  const [otherCosts, setOtherCosts] = useState(50);
  const [difficulty, setDifficulty] = useState("medium");

  const results = useMemo(() => {
    const difficultyMultiplier =
      difficulty === "low" ? 0.95 : difficulty === "medium" ? 1 : 1.2;

    const totalHours = (estimatedHours + extraRevisionHours) * difficultyMultiplier;
    const platformFee = projectPrice * (platformFeePercent / 100);
    const totalCosts = platformFee + otherCosts;
    const netProfit = projectPrice - totalCosts;
    const realHourlyRate = totalHours > 0 ? netProfit / totalHours : 0;
    const profitMargin = projectPrice > 0 ? (netProfit / projectPrice) * 100 : 0;

    let verdict = "Good Deal";
    let verdictColor = "text-green-600";
    let verdictBg = "bg-green-50 border-green-200";

    if (realHourlyRate < 10 || profitMargin < 20) {
      verdict = "Bad Deal";
      verdictColor = "text-red-600";
      verdictBg = "bg-red-50 border-red-200";
    } else if (realHourlyRate < 25 || profitMargin < 35) {
      verdict = "Risky Deal";
      verdictColor = "text-yellow-600";
      verdictBg = "bg-yellow-50 border-yellow-200";
    }

    return {
      totalHours,
      platformFee,
      totalCosts,
      netProfit,
      realHourlyRate,
      profitMargin,
      verdict,
      verdictColor,
      verdictBg,
    };
  }, [
    projectPrice,
    estimatedHours,
    extraRevisionHours,
    platformFeePercent,
    otherCosts,
    difficulty,
  ]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-slate-200 px-4 py-1 text-sm text-slate-600">
            Free Tool
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Freelance Project Profit Analyzer
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Check whether a freelance project is actually worth taking after fees,
            revisions, hidden costs, and client difficulty.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Project Inputs</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Project Price ($)
                </label>
                <input
                  type="number"
                  value={projectPrice}
                  onChange={(e) => setProjectPrice(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Estimated Work Hours
                </label>
                <input
                  type="number"
                  value={estimatedHours}
                  onChange={(e) => setEstimatedHours(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Extra Revision Hours
                </label>
                <input
                  type="number"
                  value={extraRevisionHours}
                  onChange={(e) => setExtraRevisionHours(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Platform Fee (%)
                </label>
                <input
                  type="number"
                  value={platformFeePercent}
                  onChange={(e) => setPlatformFeePercent(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Other Costs ($)
                </label>
                <input
                  type="number"
                  value={otherCosts}
                  onChange={(e) => setOtherCosts(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Client Difficulty
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Analysis Result</h2>

            <div className={`rounded-2xl border p-4 ${results.verdictBg}`}>
              <p className="text-sm text-slate-600">Verdict</p>
              <p className={`mt-1 text-2xl font-bold ${results.verdictColor}`}>
                {results.verdict}
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Total Effective Hours</p>
                <p className="mt-2 text-2xl font-bold">
                  {results.totalHours.toFixed(1)}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Platform Fee</p>
                <p className="mt-2 text-2xl font-bold">
                  ${results.platformFee.toFixed(2)}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Net Profit</p>
                <p className="mt-2 text-2xl font-bold">
                  ${results.netProfit.toFixed(2)}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Real Hourly Rate</p>
                <p className="mt-2 text-2xl font-bold">
                  ${results.realHourlyRate.toFixed(2)}/hr
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:col-span-2">
                <p className="text-sm text-slate-500">Profit Margin</p>
                <p className="mt-2 text-2xl font-bold">
                  {results.profitMargin.toFixed(1)}%
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold">What this means</h3>
              <p className="mt-3 text-slate-600">
                This result helps you see the real value of a freelance project
                after hidden time and business costs. A project that looks good
                on the surface can become weak once revisions, fees, and client
                difficulty are included.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">When to use this tool</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <h3 className="font-semibold">Freelancers</h3>
              <p className="mt-2 text-sm text-slate-600">
                Check whether a client project is profitable before accepting it.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <h3 className="font-semibold">Agencies</h3>
              <p className="mt-2 text-sm text-slate-600">
                Measure margin risk when revisions and account management are involved.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <h3 className="font-semibold">Beginners</h3>
              <p className="mt-2 text-sm text-slate-600">
                Avoid underpricing and learn what a healthy project looks like.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}