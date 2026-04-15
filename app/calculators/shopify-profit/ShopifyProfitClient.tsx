"use client";

import { useMemo, useState } from "react";
import { calculateShopifyProfit } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";
import { CalculatorField, CalculatorHero, CalculatorPanel, CalculatorResultsGrid, CalculatorShell, MetricCard } from "@/components/calculators/CalculatorUI";

type ShopifyProfitCopy = {
  badge: string;
  title: string;
  description: string;
  panelTitle: string;
  revenueLabel: string;
  productCostLabel: string;
  adsCostLabel: string;
  feesLabel: string;
  shippingLabel: string;
  resultsTitle: string;
  netProfitLabel: string;
  totalCostsLabel: string;
  profitMarginLabel: string;
};

const defaultCopy: ShopifyProfitCopy = {
  badge: "Ecommerce",
  title: "Shopify Profit Calculator",
  description: "Calculate your Shopify store net profit, total costs, and profit margin instantly.",
  panelTitle: "Store Inputs",
  revenueLabel: "Revenue ($)",
  productCostLabel: "Product Cost ($)",
  adsCostLabel: "Ad Spend ($)",
  feesLabel: "Platform Fees ($)",
  shippingLabel: "Shipping Costs ($)",
  resultsTitle: "Results",
  netProfitLabel: "Net Profit",
  totalCostsLabel: "Total Costs",
  profitMarginLabel: "Profit Margin",
};

type ShopifyProfitClientProps = {
  copy?: Partial<ShopifyProfitCopy>;
  relatedCalculatorsHref?: string;
};

export default function ShopifyProfitClient({ copy, relatedCalculatorsHref = "/calculators/shopify-profit" }: ShopifyProfitClientProps) {
  const uiCopy = { ...defaultCopy, ...copy };

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
        badge={uiCopy.badge}
        title={uiCopy.title}
        description={uiCopy.description}
      />

      <CalculatorPanel title={uiCopy.panelTitle}>
        <div className="grid gap-4 md:grid-cols-2">
          <CalculatorField label={uiCopy.revenueLabel} type="number" name="revenue" value={form.revenue} onChange={handleChange} />
          <CalculatorField label={uiCopy.productCostLabel} type="number" name="productCost" value={form.productCost} onChange={handleChange} />
          <CalculatorField label={uiCopy.adsCostLabel} type="number" name="adsCost" value={form.adsCost} onChange={handleChange} />
          <CalculatorField label={uiCopy.feesLabel} type="number" name="fees" value={form.fees} onChange={handleChange} />
          <CalculatorField label={uiCopy.shippingLabel} type="number" name="shipping" value={form.shipping} onChange={handleChange} />
        </div>
      </CalculatorPanel>

      <section className="mt-6 rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
        <h2 className="mb-5 text-2xl font-semibold text-slate-900 dark:text-slate-100">{uiCopy.resultsTitle}</h2>
        <CalculatorResultsGrid columns="md:grid-cols-3">
          <MetricCard label={uiCopy.netProfitLabel} value={`$${result.netProfit.toFixed(2)}`} emphasize />
          <MetricCard label={uiCopy.totalCostsLabel} value={`$${result.totalCosts.toFixed(2)}`} />
          <MetricCard label={uiCopy.profitMarginLabel} value={`${result.margin.toFixed(2)}%`} />
        </CalculatorResultsGrid>
      </section>

      <section className="mt-8">
        <RelatedCalculators currentHref={relatedCalculatorsHref} />
      </section>
    </CalculatorShell>
  );
}
