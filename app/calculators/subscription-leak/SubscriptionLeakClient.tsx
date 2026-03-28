"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function SubscriptionLeakClient() {
  const [subscriptions, setSubscriptions] = useState([
    { name: "Netflix", cost: 15 },
    { name: "Spotify", cost: 10 },
    { name: "Canva", cost: 13 },
    { name: "ChatGPT", cost: 20 },
  ]);

  const [hourlyIncome, setHourlyIncome] = useState(10);

  const totalMonthly = useMemo(() => {
    return subscriptions.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);
  }, [subscriptions]);

  const totalYearly = totalMonthly * 12;
  const workHoursNeeded = hourlyIncome > 0 ? totalMonthly / hourlyIncome : 0;

  const cancelSuggestions = useMemo(() => {
    return [...subscriptions]
      .sort((a, b) => b.cost - a.cost)
      .slice(0, 3);
  }, [subscriptions]);

  function updateSubscription(index: number, field: "name" | "cost", value: string) {
    const updated = [...subscriptions];
    updated[index] = {
      ...updated[index],
      [field]: field === "cost" ? Number(value) : value,
    };
    setSubscriptions(updated);
  }

  function addSubscription() {
    setSubscriptions([...subscriptions, { name: "", cost: 0 }]);
  }

  function removeSubscription(index: number) {
    setSubscriptions(subscriptions.filter((_, i) => i !== index));
  }

  let verdict = "Light Subscription Load";
  let verdictColor = "text-green-600";
  let verdictBg = "bg-green-50 border-green-200";

  if (totalMonthly >= 100 && totalMonthly < 250) {
    verdict = "Moderate Subscription Leak";
    verdictColor = "text-yellow-600";
    verdictBg = "bg-yellow-50 border-yellow-200";
  } else if (totalMonthly >= 250) {
    verdict = "Heavy Subscription Leak";
    verdictColor = "text-red-600";
    verdictBg = "bg-red-50 border-red-200";
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-slate-200 px-4 py-1 text-sm text-slate-600">
            Free Tool
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Subscription Leak Calculator
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Find out how much your subscriptions are costing you per month and per year,
            and see how many hours you work just to pay for them.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Your Subscriptions</h2>

            <div className="space-y-4">
              {subscriptions.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="grid gap-3 md:grid-cols-[1fr_140px_auto]">
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) =>
                        updateSubscription(index, "name", e.target.value)
                      }
                      placeholder="Subscription name"
                      className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                    />

                    <input
                      type="number"
                      value={item.cost}
                      onChange={(e) =>
                        updateSubscription(index, "cost", e.target.value)
                      }
                      placeholder="Monthly cost"
                      className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                    />

                    <button
                      type="button"
                      onClick={() => removeSubscription(index)}
                      className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addSubscription}
              className="mt-5 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Add subscription
            </button>

            <div className="mt-8">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Your Hourly Income ($)
              </label>
              <input
                type="number"
                value={hourlyIncome}
                onChange={(e) => setHourlyIncome(Number(e.target.value))}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Leak Analysis</h2>

            <div className={`rounded-2xl border p-4 ${verdictBg}`}>
              <p className="text-sm text-slate-600">Verdict</p>
              <p className={`mt-1 text-2xl font-bold ${verdictColor}`}>
                {verdict}
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Monthly Total</p>
                <p className="mt-2 text-2xl font-bold">${totalMonthly.toFixed(2)}</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Yearly Total</p>
                <p className="mt-2 text-2xl font-bold">${totalYearly.toFixed(2)}</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:col-span-2">
                <p className="text-sm text-slate-500">Hours Worked to Pay Them</p>
                <p className="mt-2 text-2xl font-bold">
                  {workHoursNeeded.toFixed(1)} hours / month
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold">Top cancellation candidates</h3>
              <div className="mt-4 space-y-3">
                {cancelSuggestions.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
                  >
                    <span className="font-medium text-slate-800">
                      {item.name || "Unnamed subscription"}
                    </span>
                    <span className="text-sm font-semibold text-slate-600">
                      ${Number(item.cost || 0).toFixed(2)}/mo
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              What this means
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Small subscriptions often feel harmless on their own, but together they
              can create a serious monthly leak. This calculator helps you see the total
              impact clearly before it becomes normal spending.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Common mistakes
            </h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Forgetting annual plans converted into monthly cost</li>
              <li>• Paying for tools you barely use</li>
              <li>• Keeping overlapping subscriptions</li>
              <li>• Ignoring how much work time those costs represent</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Related calculators
          </h2>
          <p className="mt-3 text-slate-600">
            Explore more ProfitHub tools to understand your money, pricing, and business decisions better.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/calculators/breakeven"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Check your breakeven point →
            </Link>

            <Link
              href="/calculators/freelance-project-profit"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Analyze a freelance deal →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}