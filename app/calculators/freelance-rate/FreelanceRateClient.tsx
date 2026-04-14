"use client";

import { useMemo, useState } from "react";
import { calculateFreelanceRate } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";
import { CalculatorField, CalculatorHero, CalculatorPanel, CalculatorResultsGrid, CalculatorShell, MetricCard } from "@/components/calculators/CalculatorUI";

export default function FreelanceRateClient() {
  const [form, setForm] = useState({
    targetIncome: 3000,
    monthlyExpenses: 1000,
    billableHours: 80,
  });

  const result = useMemo(() => calculateFreelanceRate(form), [form]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  }

  return (
    <CalculatorShell>
      <CalculatorHero
        badge="Freelance Pricing"
        title="Freelance Rate Calculator"
        description="Calculate the hourly freelance rate you need based on your target income, monthly expenses, and billable hours."
      />

      <CalculatorPanel title="Pricing Inputs">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CalculatorField label="Target Monthly Income ($)" type="number" name="targetIncome" value={form.targetIncome} onChange={handleChange} />
          <CalculatorField label="Monthly Expenses ($)" type="number" name="monthlyExpenses" value={form.monthlyExpenses} onChange={handleChange} />
          <CalculatorField label="Billable Hours per Month" type="number" name="billableHours" value={form.billableHours} onChange={handleChange} />
        </div>
      </CalculatorPanel>

      <section className="mt-6 rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
        <h2 className="mb-5 text-2xl font-semibold text-slate-900 dark:text-slate-100">Results</h2>
        <CalculatorResultsGrid>
          <MetricCard label="Total Needed per Month" value={`$${result.totalNeeded.toFixed(2)}`} />
          <MetricCard label="Recommended Hourly Rate" value={`$${result.hourlyRate.toFixed(2)}`} emphasize />
        </CalculatorResultsGrid>
      </section>

      <section className="mt-8">
        <RelatedCalculators currentHref="/calculators/freelance-rate" />
      </section>
    </CalculatorShell>
  );
}
