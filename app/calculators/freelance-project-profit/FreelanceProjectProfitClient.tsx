"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  CalculatorField,
  CalculatorHero,
  CalculatorPanel,
  CalculatorResultsGrid,
  CalculatorSelectField,
  CalculatorShell,
  CalculatorTwoColumn,
  MetricCard,
  VerdictBanner,
} from "@/components/calculators/CalculatorUI";

export default function FreelanceProjectProfitPage() {
  const [projectPrice, setProjectPrice] = useState(1000);
  const [estimatedHours, setEstimatedHours] = useState(20);
  const [extraRevisionHours, setExtraRevisionHours] = useState(4);
  const [platformFeePercent, setPlatformFeePercent] = useState(10);
  const [otherCosts, setOtherCosts] = useState(50);
  const [difficulty, setDifficulty] = useState("medium");

  const results = useMemo(() => {
    const difficultyMultiplier = difficulty === "low" ? 0.95 : difficulty === "medium" ? 1 : 1.2;

    const totalHours = (estimatedHours + extraRevisionHours) * difficultyMultiplier;
    const platformFee = projectPrice * (platformFeePercent / 100);
    const totalCosts = platformFee + otherCosts;
    const netProfit = projectPrice - totalCosts;
    const realHourlyRate = totalHours > 0 ? netProfit / totalHours : 0;
    const profitMargin = projectPrice > 0 ? (netProfit / projectPrice) * 100 : 0;

    let verdict = "Good Deal";
    let tone = "bg-green-50 border-green-200 text-green-700 dark:bg-green-950/40 dark:border-green-900 dark:text-green-300";

    if (realHourlyRate < 10 || profitMargin < 20) {
      verdict = "Bad Deal";
      tone = "bg-red-50 border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-900 dark:text-red-300";
    } else if (realHourlyRate < 25 || profitMargin < 35) {
      verdict = "Risky Deal";
      tone = "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-950/40 dark:border-yellow-900 dark:text-yellow-300";
    }

    return { totalHours, platformFee, totalCosts, netProfit, realHourlyRate, profitMargin, verdict, tone };
  }, [projectPrice, estimatedHours, extraRevisionHours, platformFeePercent, otherCosts, difficulty]);

  return (
    <CalculatorShell>
      <CalculatorHero
        badge="Freelance Deals"
        title="Freelance Project Profit Analyzer"
        description="Check whether a freelance project is actually worth taking after fees, revisions, hidden costs, and client difficulty."
      />

      <CalculatorTwoColumn
        left={
          <CalculatorPanel title="Project Inputs">
            <div className="space-y-4">
              <CalculatorField label="Project Price ($)" type="number" value={projectPrice} onChange={(e) => setProjectPrice(Number(e.target.value))} />
              <CalculatorField label="Estimated Work Hours" type="number" value={estimatedHours} onChange={(e) => setEstimatedHours(Number(e.target.value))} />
              <CalculatorField label="Extra Revision Hours" type="number" value={extraRevisionHours} onChange={(e) => setExtraRevisionHours(Number(e.target.value))} />
              <CalculatorField label="Platform Fee (%)" type="number" value={platformFeePercent} onChange={(e) => setPlatformFeePercent(Number(e.target.value))} />
              <CalculatorField label="Other Costs ($)" type="number" value={otherCosts} onChange={(e) => setOtherCosts(Number(e.target.value))} />
              <CalculatorSelectField label="Client Difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </CalculatorSelectField>
            </div>
          </CalculatorPanel>
        }
        right={
          <CalculatorPanel title="Analysis Result">
            <VerdictBanner toneClassName={results.tone} value={results.verdict} />
            <div className="mt-5">
              <CalculatorResultsGrid>
                <MetricCard label="Total Effective Hours" value={results.totalHours.toFixed(1)} />
                <MetricCard label="Platform Fee" value={`$${results.platformFee.toFixed(2)}`} />
                <MetricCard label="Total Costs" value={`$${results.totalCosts.toFixed(2)}`} />
                <MetricCard label="Net Profit" value={`$${results.netProfit.toFixed(2)}`} emphasize />
                <MetricCard label="Real Hourly Rate" value={`$${results.realHourlyRate.toFixed(2)}/hr`} />
                <MetricCard label="Profit Margin" value={`${results.profitMargin.toFixed(1)}%`} />
              </CalculatorResultsGrid>
            </div>
          </CalculatorPanel>
        }
      />

      <section className="mt-8 rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Related calculators</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/calculators/freelance-rate" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">Improve your hourly rate →</Link>
          <Link href="/calculators/breakeven" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">Check your breakeven point →</Link>
        </div>
      </section>
    </CalculatorShell>
  );
}
