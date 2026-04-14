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

export default function DecisionScoreClient() {
  const [expectedProfit, setExpectedProfit] = useState(3000);
  const [timeRequired, setTimeRequired] = useState(40);
  const [upfrontCost, setUpfrontCost] = useState(500);
  const [riskLevel, setRiskLevel] = useState(5);
  const [confidenceLevel, setConfidenceLevel] = useState(7);

  const results = useMemo(() => {
    const profitScore = expectedProfit >= 5000 ? 35 : expectedProfit >= 2000 ? 25 : expectedProfit >= 1000 ? 18 : 10;
    const timeScore = timeRequired <= 20 ? 20 : timeRequired <= 40 ? 14 : timeRequired <= 80 ? 8 : 4;
    const costScore = upfrontCost <= 200 ? 15 : upfrontCost <= 500 ? 10 : upfrontCost <= 1000 ? 6 : 2;
    const riskScore = riskLevel <= 3 ? 20 : riskLevel <= 6 ? 12 : riskLevel <= 8 ? 6 : 2;
    const confidenceScore = confidenceLevel >= 8 ? 10 : confidenceLevel >= 6 ? 7 : confidenceLevel >= 4 ? 4 : 1;

    const totalScore = profitScore + timeScore + costScore + riskScore + confidenceScore;
    let verdict = "Weak Decision";
    let tone = "bg-red-50 border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-900 dark:text-red-300";

    if (totalScore >= 75) {
      verdict = "Strong Opportunity";
      tone = "bg-green-50 border-green-200 text-green-700 dark:bg-green-950/40 dark:border-green-900 dark:text-green-300";
    } else if (totalScore >= 50) {
      verdict = "Acceptable but Risky";
      tone = "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-950/40 dark:border-yellow-900 dark:text-yellow-300";
    }

    return { totalScore, verdict, tone, profitScore, timeScore, costScore, riskScore, confidenceScore };
  }, [expectedProfit, timeRequired, upfrontCost, riskLevel, confidenceLevel]);

  return (
    <CalculatorShell>
      <CalculatorHero
        badge="Decisioning"
        title="Business Decision Score Calculator"
        description="Score a business idea, project, offer, or opportunity based on profit, time, cost, risk, and confidence."
      />

      <CalculatorTwoColumn
        left={
          <CalculatorPanel title="Decision Inputs">
            <div className="space-y-4">
              <CalculatorField label="Expected Profit ($)" type="number" value={expectedProfit} onChange={(e) => setExpectedProfit(Number(e.target.value))} />
              <CalculatorField label="Time Required (Hours)" type="number" value={timeRequired} onChange={(e) => setTimeRequired(Number(e.target.value))} />
              <CalculatorField label="Upfront Cost ($)" type="number" value={upfrontCost} onChange={(e) => setUpfrontCost(Number(e.target.value))} />
              <CalculatorField label="Risk Level (1 to 10)" type="number" min={1} max={10} value={riskLevel} onChange={(e) => setRiskLevel(Number(e.target.value))} />
              <CalculatorField label="Confidence Level (1 to 10)" type="number" min={1} max={10} value={confidenceLevel} onChange={(e) => setConfidenceLevel(Number(e.target.value))} />
            </div>
          </CalculatorPanel>
        }
        right={
          <CalculatorPanel title="Decision Analysis">
            <VerdictBanner toneClassName={results.tone} value={results.verdict} />
            <div className="mt-4">
              <MetricCard label="Decision Score" value={`${results.totalScore}/100`} emphasize />
            </div>
            <div className="mt-4">
              <CalculatorResultsGrid>
                <MetricCard label="Profit Score" value={`${results.profitScore}`} />
                <MetricCard label="Time Score" value={`${results.timeScore}`} />
                <MetricCard label="Cost Score" value={`${results.costScore}`} />
                <MetricCard label="Risk Score" value={`${results.riskScore}`} />
                <MetricCard label="Confidence Score" value={`${results.confidenceScore}`} />
              </CalculatorResultsGrid>
            </div>
          </CalculatorPanel>
        }
      />

      <section className="mt-8 rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Related calculators</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/calculators/cost-of-delay" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">Measure cost of delay →</Link>
          <Link href="/calculators/freelance-project-profit" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">Analyze a freelance project →</Link>
        </div>
      </section>
    </CalculatorShell>
  );
}
