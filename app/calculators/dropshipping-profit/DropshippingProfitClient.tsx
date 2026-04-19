"use client";

import { useMemo, useState } from "react";
import { calculateDropshippingProfit } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";
import { CalculatorField, CalculatorHero, CalculatorPanel, CalculatorResultsGrid, CalculatorShell, MetricCard } from "@/components/calculators/CalculatorUI";

export default function DropshippingProfitClient() {
  const [form, setForm] = useState({
    orders: 100,
    sellingPrice: 39,
    productCost: 12,
    adsCost: 800,
    shipping: 250,
  });

  const result = useMemo(() => calculateDropshippingProfit(form), [form]);

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
        badge="Ecommerce"
        title="Dropshipping Profit Calculator"
        description="Calculate your dropshipping revenue, total costs, net profit, and margin instantly."
      />

      <CalculatorPanel title="Store Inputs">
        <div className="grid gap-4 md:grid-cols-2">
          <CalculatorField label="Number of Orders" type="number" name="orders" value={form.orders} onChange={handleChange} />
          <CalculatorField label="Selling Price ($)" type="number" name="sellingPrice" value={form.sellingPrice} onChange={handleChange} />
          <CalculatorField label="Product Cost ($)" type="number" name="productCost" value={form.productCost} onChange={handleChange} />
          <CalculatorField label="Ad Spend ($)" type="number" name="adsCost" value={form.adsCost} onChange={handleChange} />
          <CalculatorField label="Shipping Costs ($)" type="number" name="shipping" value={form.shipping} onChange={handleChange} />
        </div>
      </CalculatorPanel>

      <section className="mt-6 rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
        <h2 className="mb-5 text-2xl font-semibold text-slate-900 dark:text-slate-100">Results</h2>
        <CalculatorResultsGrid columns="md:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Revenue" value={`$${result.revenue.toFixed(2)}`} />
          <MetricCard label="Costs" value={`$${result.costs.toFixed(2)}`} />
          <MetricCard label="Profit" value={`$${result.profit.toFixed(2)}`} emphasize />
          <MetricCard label="Margin" value={`${result.margin.toFixed(2)}%`} />
        </CalculatorResultsGrid>
      </section>
       
      <section className="mt-8">
        <RelatedCalculators currentHref="/calculators/dropshipping-profit" />
      </section>
    </CalculatorShell>
  );
}
