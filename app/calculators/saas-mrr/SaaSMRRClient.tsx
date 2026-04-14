"use client";

import { useMemo, useState } from "react";
import { calculateMRR } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";
import { CalculatorField, CalculatorHero, CalculatorPanel, CalculatorResultsGrid, CalculatorShell, MetricCard } from "@/components/calculators/CalculatorUI";

export default function SaaSMRRClient() {
  const [form, setForm] = useState({
    customers: 150,
    monthlyPrice: 29,
  });

  const result = useMemo(() => calculateMRR(form), [form]);

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
        badge="SaaS"
        title="SaaS MRR Calculator"
        description="Calculate monthly recurring revenue and annual recurring revenue for your SaaS business."
      />

      <CalculatorPanel title="Revenue Inputs">
        <div className="grid gap-4 md:grid-cols-2">
          <CalculatorField label="Number of Customers" type="number" name="customers" value={form.customers} onChange={handleChange} />
          <CalculatorField label="Monthly Subscription Price ($)" type="number" name="monthlyPrice" value={form.monthlyPrice} onChange={handleChange} />
        </div>
      </CalculatorPanel>

      <section className="mt-6 rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
        <h2 className="mb-5 text-2xl font-semibold text-slate-900 dark:text-slate-100">Results</h2>
        <CalculatorResultsGrid>
          <MetricCard label="MRR" value={`$${result.mrr.toFixed(2)}`} emphasize />
          <MetricCard label="ARR" value={`$${result.arr.toFixed(2)}`} />
        </CalculatorResultsGrid>
      </section>

      <section className="mt-8">
        <RelatedCalculators currentHref="/calculators/saas-mrr" />
      </section>
    </CalculatorShell>
  );
}
