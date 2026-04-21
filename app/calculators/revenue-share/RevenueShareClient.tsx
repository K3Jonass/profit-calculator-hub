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

    const yourEffortRatio = yourHours + partnerHours > 0 ? yourHours / (yourHours + partnerHours) : 0;
    const yourShareRatio = yourShare / 100;

    let verdict = "Fair Deal";
    let tone = "bg-green-50 border-green-200 text-green-700 dark:bg-green-950/40 dark:border-green-900 dark:text-green-300";

    if (totalShare !== 100) {
      verdict = "Invalid Split";
      tone = "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-950/40 dark:border-yellow-900 dark:text-yellow-300";
    } else if (yourShareRatio + 0.1 < yourEffortRatio) {
      verdict = "Unfair for You";
      tone = "bg-red-50 border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-900 dark:text-red-300";
    } else if (yourShareRatio < yourEffortRatio) {
      verdict = "Risky Split";
      tone = "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-950/40 dark:border-yellow-900 dark:text-yellow-300";
    }

    return { safeRevenue, yourEarnings, partnerEarnings, yourHourlyRate, partnerHourlyRate, verdict, tone };
  }, [totalRevenue, yourShare, partnerShare, yourHours, partnerHours, otherCosts, totalShare]);

  return (
    <CalculatorShell>
      <CalculatorHero
        badge="Deal Modeling"
        title="Revenue Share Deal Calculator"
        description="Check whether a revenue share deal is fair based on percentage split, workload, and expected earnings."
      />

      <CalculatorTwoColumn
        left={
          <CalculatorPanel title="Deal Inputs">
            <div className="space-y-4">
              <CalculatorField label="Expected Total Revenue ($)" type="number" value={totalRevenue} onChange={(e) => setTotalRevenue(Number(e.target.value))} />
              <CalculatorField label="Your Share (%)" type="number" value={yourShare} onChange={(e) => setYourShare(Number(e.target.value))} />
              <CalculatorField label="Partner Share (%)" type="number" value={partnerShare} onChange={(e) => setPartnerShare(Number(e.target.value))} />
              {totalShare !== 100 && (
                <div className="rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950/50 dark:text-yellow-300">
                  Your share and partner share should add up to 100%.
                </div>
              )}
              <CalculatorField label="Your Work Hours" type="number" value={yourHours} onChange={(e) => setYourHours(Number(e.target.value))} />
              <CalculatorField label="Partner Work Hours" type="number" value={partnerHours} onChange={(e) => setPartnerHours(Number(e.target.value))} />
              <CalculatorField label="Other Costs ($)" type="number" value={otherCosts} onChange={(e) => setOtherCosts(Number(e.target.value))} />
            </div>
          </CalculatorPanel>
        }
        right={
          <CalculatorPanel title="Deal Analysis">
            <VerdictBanner toneClassName={results.tone} value={results.verdict} />
            <div className="mt-5">
              <CalculatorResultsGrid>
                <MetricCard label="Revenue After Costs" value={`$${results.safeRevenue.toFixed(2)}`} />
                <MetricCard label="Your Earnings" value={`$${results.yourEarnings.toFixed(2)}`} emphasize />
                <MetricCard label="Partner Earnings" value={`$${results.partnerEarnings.toFixed(2)}`} />
                <MetricCard label="Your Effective Hourly Rate" value={`$${results.yourHourlyRate.toFixed(2)}/hr`} />
                <MetricCard label="Partner Hourly Rate" value={`$${results.partnerHourlyRate.toFixed(2)}/hr`} />
              </CalculatorResultsGrid>
            </div>
          </CalculatorPanel>
        }
      />

      <section className="mt-8 rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Related calculators</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/calculators/freelance-project-profit" className="ui-button-secondary rounded-xl px-4 py-2 text-sm font-semibold">Analyze a freelance deal →</Link>
          <Link href="/calculators/breakeven" className="ui-button-secondary rounded-xl px-4 py-2 text-sm font-semibold">Check your breakeven point →</Link>
        </div>
      </section>
    </CalculatorShell>
  );
}
