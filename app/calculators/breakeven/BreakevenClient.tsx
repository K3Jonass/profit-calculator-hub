"use client";

import { useMemo, useState } from "react";
import { calculateBreakeven } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";
import { CalculatorField, CalculatorHero, CalculatorPanel, CalculatorResultsGrid, CalculatorShell, EmptyState, MetricCard } from "@/components/calculators/CalculatorUI";

export default function BreakevenClient() {
  const [form, setForm] = useState({
    fixedCosts: 2000,
    profitPerSale: 25,
  });

  const result = useMemo(() => calculateBreakeven(form), [form]);

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
        badge="Planning"
        title="Breakeven Calculator"
        description="Calculate how many sales you need to cover your fixed business costs."
      />

      <CalculatorPanel title="Business Inputs">
        <div className="grid gap-4 md:grid-cols-2">
          <CalculatorField label="Fixed Costs ($)" type="number" name="fixedCosts" value={form.fixedCosts} onChange={handleChange} />
          <CalculatorField label="Profit per Sale ($)" type="number" name="profitPerSale" value={form.profitPerSale} onChange={handleChange} />
        </div>
      </CalculatorPanel>

      <section className="mt-6 rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
        <h2 className="mb-5 text-2xl font-semibold text-slate-900 dark:text-slate-100">Results</h2>
        {form.profitPerSale <= 0 ? (
          <EmptyState
            title="Enter profit per sale to see your breakeven volume"
            description="Profit per sale must be greater than zero for a meaningful breakeven estimate."
          />
        ) : (
          <CalculatorResultsGrid columns="md:grid-cols-1">
            <MetricCard label="Breakeven Sales Needed" value={result.breakevenSales.toFixed(2)} emphasize />
          </CalculatorResultsGrid>
        )}
      </section>

      <section className="mt-8">
        <RelatedCalculators currentHref="/calculators/breakeven" />
      </section>
    </CalculatorShell>
  );
}
