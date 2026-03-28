"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function RevenueShareClient() {
  const [totalRevenue, setTotalRevenue] = useState(5000);
  const [yourShare, setYourShare] = useState(50);
  const [partnerShare, setPartnerShare] = useState(50);
  const [yourHours, setYourHours] = useState(40);
  const [partnerHours, setPartnerHours] = useState(20);
  const [otherCosts, setOtherCosts] = useState(300);

  const totalShare = yourShare + partnerShare;

  const results = useMemo(() => {
    const remainingRevenue = totalRevenue - otherCosts;
    const safeRevenue = remainingRevenue > 0 ? remainingRevenue : 0;

    const yourEarnings = safeRevenue * (yourShare / 100);
    const partnerEarnings = safeRevenue * (partnerShare / 100);

    const yourHourlyRate = yourHours > 0 ? yourEarnings / yourHours : 0;
    const partnerHourlyRate = partnerHours > 0 ? partnerEarnings / partnerHours : 0;

    const yourEffortRatio =
      yourHours + partnerHours > 0 ? yourHours / (yourHours + partnerHours) : 0;
    const yourShareRatio = yourShare / 100;

    let verdict = "Fair Deal";
    let verdictColor = "text-green-600";
    let verdictBg = "bg-green-50 border-green-200";

    if (totalShare !== 100) {
      verdict = "Invalid Split";
      verdictColor = "text-yellow-600";
      verdictBg = "bg-yellow-50 border-yellow-200";
    } else if (yourShareRatio + 0.1 < yourEffortRatio) {
      verdict = "Unfair for You";
      verdictColor = "text-red-600";
      verdictBg = "bg-red-50 border-red-200";
    } else if (yourShareRatio < yourEffortRatio) {
      verdict = "Risky Split";
      verdictColor = "text-yellow-600";
      verdictBg = "bg-yellow-50 border-yellow-200";
    }

    return {
      safeRevenue,
      yourEarnings,
      partnerEarnings,
      yourHourlyRate,
      partnerHourlyRate,
      verdict,
      verdictColor,
      verdictBg,
    };
  }, [totalRevenue, yourShare, partnerShare, yourHours, partnerHours, otherCosts, totalShare]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-slate-200 px-4 py-1 text-sm text-slate-600">
            Free Tool
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Revenue Share Deal Calculator
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Check whether a revenue share deal is fair based on percentage split,
            workload, and expected earnings.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Deal Inputs</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Expected Total Revenue ($)
                </label>
                <input
                  type="number"
                  value={totalRevenue}
                  onChange={(e) => setTotalRevenue(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Your Share (%)
                </label>
                <input
                  type="number"
                  value={yourShare}
                  onChange={(e) => setYourShare(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Partner Share (%)
                </label>
                <input
                  type="number"
                  value={partnerShare}
                  onChange={(e) => setPartnerShare(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              {totalShare !== 100 && (
                <div className="rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-800">
                  Your share and partner share should add up to 100%.
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Your Work Hours
                </label>
                <input
                  type="number"
                  value={yourHours}
                  onChange={(e) => setYourHours(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Partner Work Hours
                </label>
                <input
                  type="number"
                  value={partnerHours}
                  onChange={(e) => setPartnerHours(Number(e.target.value))}
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
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Deal Analysis</h2>

            <div className={`rounded-2xl border p-4 ${results.verdictBg}`}>
              <p className="text-sm text-slate-600">Verdict</p>
              <p className={`mt-1 text-2xl font-bold ${results.verdictColor}`}>
                {results.verdict}
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Revenue After Costs</p>
                <p className="mt-2 text-2xl font-bold">
                  ${results.safeRevenue.toFixed(2)}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Your Earnings</p>
                <p className="mt-2 text-2xl font-bold">
                  ${results.yourEarnings.toFixed(2)}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Partner Earnings</p>
                <p className="mt-2 text-2xl font-bold">
                  ${results.partnerEarnings.toFixed(2)}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Your Effective Hourly Rate</p>
                <p className="mt-2 text-2xl font-bold">
                  ${results.yourHourlyRate.toFixed(2)}/hr
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:col-span-2">
                <p className="text-sm text-slate-500">Partner Hourly Rate</p>
                <p className="mt-2 text-2xl font-bold">
                  ${results.partnerHourlyRate.toFixed(2)}/hr
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold">What this means</h3>
              <p className="mt-3 text-slate-600">
                A revenue split can look fair on paper but become weak once work hours
                and real effort are included. This calculator helps you judge whether
                the deal matches your contribution.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              When to use this tool
            </h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Creator and operator partnerships</li>
              <li>• Agency collaborations</li>
              <li>• Revenue share freelance deals</li>
              <li>• Joint projects with shared profit</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Common mistakes
            </h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Ignoring workload imbalance</li>
              <li>• Agreeing on percentages before defining roles</li>
              <li>• Forgetting costs before splitting revenue</li>
              <li>• Assuming 50/50 always means fair</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Related calculators
          </h2>
          <p className="mt-3 text-slate-600">
            Explore more ProfitHub tools to analyze business deals, pricing, and profitability.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/calculators/freelance-project-profit"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Analyze a freelance deal →
            </Link>

            <Link
              href="/calculators/breakeven"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Check your breakeven point →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}