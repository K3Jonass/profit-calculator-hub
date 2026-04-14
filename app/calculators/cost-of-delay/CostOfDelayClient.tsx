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
  MetricCard,
  VerdictBanner,
} from "@/components/calculators/CalculatorUI";

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
    let verdictTone = "bg-green-50 border-green-200 text-green-700 dark:bg-green-950/40 dark:border-green-900 dark:text-green-300";

    if (totalOpportunityCost >= 1000 && totalOpportunityCost < 5000) {
      verdict = "Costly Delay";
      verdictTone = "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-950/40 dark:border-yellow-900 dark:text-yellow-300";
    } else if (totalOpportunityCost >= 5000) {
      verdict = "Serious Opportunity Loss";
      verdictTone = "bg-red-50 border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-900 dark:text-red-300";
    }

    return {
      dailyIncome,
      lostRevenue,
      totalOpportunityCost,
      delayedMonths,
      verdict,
      verdictTone,
    };
  }, [monthlyIncome, delayDays, setupCost]);

  return (
    <CalculatorShell>
      <CalculatorHero
        badge="Planning"
        title="Cost of Delay Calculator"
        description="Estimate how much money you lose by delaying a business idea, launch, project, or important decision."
      />

      <CalculatorTwoColumn
        left={
          <CalculatorPanel title="Delay Inputs">
            <div className="space-y-4">
              <CalculatorField label="Potential Monthly Income ($)" type="number" value={monthlyIncome} onChange={(e) => setMonthlyIncome(Number(e.target.value))} />
              <CalculatorField label="Delay Duration (Days)" type="number" value={delayDays} onChange={(e) => setDelayDays(Number(e.target.value))} />
              <CalculatorField label="Optional Setup or Lost Momentum Cost ($)" type="number" value={setupCost} onChange={(e) => setSetupCost(Number(e.target.value))} />
            </div>
          </CalculatorPanel>
        }
        right={
          <CalculatorPanel title="Delay Analysis">
            <VerdictBanner toneClassName={results.verdictTone} value={results.verdict} />
            <div className="mt-5">
              <CalculatorResultsGrid>
                <MetricCard label="Estimated Daily Value" value={`$${results.dailyIncome.toFixed(2)}`} />
                <MetricCard label="Lost Revenue" value={`$${results.lostRevenue.toFixed(2)}`} />
                <MetricCard label="Delayed Time" value={`${results.delayedMonths.toFixed(1)} months`} />
                <MetricCard label="Total Opportunity Cost" value={`$${results.totalOpportunityCost.toFixed(2)}`} emphasize />
              </CalculatorResultsGrid>
            </div>
          </CalculatorPanel>
        }
      />

      <section className="mt-8 rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Related calculators</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/calculators/breakeven" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            Check your breakeven point →
          </Link>
          <Link href="/calculators/revenue-share" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            Analyze a revenue share deal →
          </Link>
        </div>
      </section>
    </CalculatorShell>
  );
}
