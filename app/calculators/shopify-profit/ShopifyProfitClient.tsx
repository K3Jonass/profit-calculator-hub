"use client";

import { useMemo, useState } from "react";
import { calculateShopifyProfit } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";
import { CalculatorField, CalculatorHero, CalculatorPanel, CalculatorResultsGrid, CalculatorShell, MetricCard } from "@/components/calculators/CalculatorUI";

export default function ShopifyProfitClient() {
  const [form, setForm] = useState({
    revenue: 12000,
    productCost: 4000,
    adsCost: 3000,
    fees: 500,
    shipping: 1200,
  });

  const result = useMemo(() => calculateShopifyProfit(form), [form]);

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
        title="Shopify Profit Calculator"
        description="Calculate your Shopify store net profit, total costs, and profit margin instantly."
      />

      <CalculatorPanel title="Store Inputs">
        <div className="grid gap-4 md:grid-cols-2">
          <CalculatorField label="Revenue ($)" type="number" name="revenue" value={form.revenue} onChange={handleChange} />
          <CalculatorField label="Product Cost ($)" type="number" name="productCost" value={form.productCost} onChange={handleChange} />
          <CalculatorField label="Ad Spend ($)" type="number" name="adsCost" value={form.adsCost} onChange={handleChange} />
          <CalculatorField label="Platform Fees ($)" type="number" name="fees" value={form.fees} onChange={handleChange} />
          <CalculatorField label="Shipping Costs ($)" type="number" name="shipping" value={form.shipping} onChange={handleChange} />
        </div>
      </CalculatorPanel>

      <section className="mt-6 rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
        <h2 className="mb-5 text-2xl font-semibold text-slate-900 dark:text-slate-100">Results</h2>
        <CalculatorResultsGrid columns="md:grid-cols-3">
          <MetricCard label="Net Profit" value={`$${result.netProfit.toFixed(2)}`} emphasize />
          <MetricCard label="Total Costs" value={`$${result.totalCosts.toFixed(2)}`} />
          <MetricCard label="Profit Margin" value={`${result.margin.toFixed(2)}%`} />
        </CalculatorResultsGrid>
      </section>

      <section className="mt-8">
        <RelatedCalculators currentHref="/calculators/shopify-profit" />
      </section>
    </CalculatorShell>
  );
}
