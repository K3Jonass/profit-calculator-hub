"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  CalculatorField,
  CalculatorHero,
  CalculatorPanel,
  CalculatorResultsGrid,
  CalculatorShell,
  CalculatorTwoColumn,
  EmptyState,
  MetricCard,
  VerdictBanner,
} from "@/components/calculators/CalculatorUI";

export default function SubscriptionLeakClient() {
  const [subscriptions, setSubscriptions] = useState([
    { name: "Netflix", cost: 15 },
    { name: "Spotify", cost: 10 },
    { name: "Canva", cost: 13 },
    { name: "ChatGPT", cost: 20 },
  ]);
  const [hourlyIncome, setHourlyIncome] = useState(10);

  const totalMonthly = useMemo(() => subscriptions.reduce((sum, item) => sum + (Number(item.cost) || 0), 0), [subscriptions]);
  const totalYearly = totalMonthly * 12;
  const workHoursNeeded = hourlyIncome > 0 ? totalMonthly / hourlyIncome : 0;

  const cancelSuggestions = useMemo(() => [...subscriptions].sort((a, b) => b.cost - a.cost).slice(0, 3), [subscriptions]);

  function updateSubscription(index: number, field: "name" | "cost", value: string) {
    const updated = [...subscriptions];
    updated[index] = { ...updated[index], [field]: field === "cost" ? Number(value) : value };
    setSubscriptions(updated);
  }

  function addSubscription() {
    setSubscriptions([...subscriptions, { name: "", cost: 0 }]);
  }

  function removeSubscription(index: number) {
    setSubscriptions(subscriptions.filter((_, i) => i !== index));
  }

  let verdict = "Light Subscription Load";
  let tone = "bg-green-50 border-green-200 text-green-700 dark:bg-green-950/40 dark:border-green-900 dark:text-green-300";

  if (totalMonthly >= 100 && totalMonthly < 250) {
    verdict = "Moderate Subscription Leak";
    tone = "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-950/40 dark:border-yellow-900 dark:text-yellow-300";
  } else if (totalMonthly >= 250) {
    verdict = "Heavy Subscription Leak";
    tone = "bg-red-50 border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-900 dark:text-red-300";
  }

  return (
    <CalculatorShell>
      <CalculatorHero
        badge="Personal Finance"
        title="Subscription Leak Calculator"
        description="Find out how much your subscriptions are costing you per month and per year, and see how many hours you work just to pay for them."
      />

      <CalculatorTwoColumn
        left={
          <CalculatorPanel title="Your Subscriptions">
            <div className="space-y-3">
              {subscriptions.map((item, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                  <div className="grid gap-3 md:grid-cols-[1fr_160px_auto]">
                    <CalculatorField
                      label="Subscription name"
                      type="text"
                      value={item.name}
                      onChange={(e) => updateSubscription(index, "name", e.target.value)}
                      className="py-2.5"
                    />
                    <CalculatorField
                      label="Monthly cost"
                      type="number"
                      value={item.cost}
                      onChange={(e) => updateSubscription(index, "cost", e.target.value)}
                      className="py-2.5"
                    />
                    <button
                      type="button"
                      onClick={() => removeSubscription(index)}
                      className="ui-button-secondary mt-7 rounded-xl px-4 py-2.5 text-sm font-semibold"
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
              className="ui-button-primary mt-4 rounded-xl px-5 py-2.5 text-sm font-semibold transition"
            >
              Add subscription
            </button>

            <div className="mt-5">
              <CalculatorField label="Your Hourly Income ($)" type="number" value={hourlyIncome} onChange={(e) => setHourlyIncome(Number(e.target.value))} />
            </div>
          </CalculatorPanel>
        }
        right={
          <CalculatorPanel title="Leak Analysis">
            <VerdictBanner toneClassName={tone} value={verdict} />
            <div className="mt-5">
              <CalculatorResultsGrid>
                <MetricCard label="Monthly Total" value={`$${totalMonthly.toFixed(2)}`} emphasize />
                <MetricCard label="Yearly Total" value={`$${totalYearly.toFixed(2)}`} />
                <MetricCard label="Hours Worked to Pay Them" value={`${workHoursNeeded.toFixed(1)} hours / month`} />
              </CalculatorResultsGrid>
            </div>
            <div className="mt-5">
              {cancelSuggestions.length === 0 ? (
                <EmptyState title="No subscriptions yet" description="Add at least one subscription to see cancellation suggestions." />
              ) : (
                <div className="space-y-2">
                  {cancelSuggestions.map((item, index) => (
                    <div key={`${item.name}-${index}`} className="surface-card flex items-center justify-between rounded-xl px-4 py-3">
                      <span className="font-medium text-slate-800 dark:text-slate-100">{item.name || "Unnamed subscription"}</span>
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">${Number(item.cost || 0).toFixed(2)}/mo</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CalculatorPanel>
        }
      />

      <section className="mt-8 rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Related calculators</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/calculators/breakeven" className="ui-button-secondary rounded-xl px-4 py-2 text-sm font-semibold">Check your breakeven point →</Link>
          <Link href="/calculators/freelance-project-profit" className="ui-button-secondary rounded-xl px-4 py-2 text-sm font-semibold">Analyze a freelance deal →</Link>
        </div>
      </section>
    </CalculatorShell>
  );
}
