"use client";

import { type ChangeEvent, useMemo, useState } from "react";
import { calculateShopifyProfit } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";
import {
  CalculatorField,
  CalculatorHero,
  CalculatorPanel,
  CalculatorResultsGrid,
  CalculatorShell,
  MetricCard,
} from "@/components/calculators/CalculatorUI";

type AppLocale = "en" | "ar" | "fr" | "es" | "ru";

const LOCALE_REGION_MAP: Record<AppLocale, string> = {
  en: "en-US",
  ar: "ar",
  fr: "fr-FR",
  es: "es-ES",
  ru: "ru-RU",
};

function getShopifyProfitCopy() {
  return {
    badge: "Ecommerce",
    title: "Shopify Profit Calculator",
    description:
      "Calculate your Shopify revenue, costs, net profit, and margin instantly.",
    inputsTitle: "Store Inputs",
    resultsTitle: "Results",
  };
}

export default function ShopifyProfitClient({
  locale,
}: {
  locale: AppLocale;
}) {
  const [form, setForm] = useState({
    revenue: 12000,
    productCost: 4000,
    adsCost: 3000,
    fees: 500,
    shipping: 1200,
  });

  const copy = getShopifyProfitCopy();
  const result = useMemo(() => calculateShopifyProfit(form), [form]);
  const localeTag = LOCALE_REGION_MAP[locale];

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(localeTag, {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
      }),
    [localeTag]
  );

  const percentFormatter = useMemo(
    () =>
      new Intl.NumberFormat(localeTag, {
        maximumFractionDigits: 2,
      }),
    [localeTag]
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const parsedValue = Number(value);

    setForm((prev) => ({
      ...prev,
      [name]: Number.isFinite(parsedValue) ? parsedValue : 0,
    }));
  }

  return (
    <CalculatorShell>
      <CalculatorHero
        badge={copy.badge}
        title={copy.title}
        description={copy.description}
      />

      <CalculatorPanel title={copy.inputsTitle}>
        <div className="grid gap-4 md:grid-cols-2">
          <CalculatorField
            label="Revenue ($)"
            type="number"
            name="revenue"
            value={form.revenue}
            onChange={handleChange}
          />
          <CalculatorField
            label="Product Cost ($)"
            type="number"
            name="productCost"
            value={form.productCost}
            onChange={handleChange}
          />
          <CalculatorField
            label="Ad Spend ($)"
            type="number"
            name="adsCost"
            value={form.adsCost}
            onChange={handleChange}
          />
          <CalculatorField
            label="Fees ($)"
            type="number"
            name="fees"
            value={form.fees}
            onChange={handleChange}
          />
          <CalculatorField
            label="Shipping ($)"
            type="number"
            name="shipping"
            value={form.shipping}
            onChange={handleChange}
          />
        </div>
      </CalculatorPanel>

      <section className="mt-6 rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
        <h2 className="mb-5 text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {copy.resultsTitle}
        </h2>

        <CalculatorResultsGrid columns="md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Revenue"
            value={currencyFormatter.format(form.revenue)}
          />
          <MetricCard
            label="Costs"
            value={currencyFormatter.format(result.totalCosts)}
          />
          <MetricCard
            label="Profit"
            value={currencyFormatter.format(result.netProfit)}
            emphasize
          />
          <MetricCard
            label="Margin"
            value={`${percentFormatter.format(result.margin)}%`}
          />
        </CalculatorResultsGrid>
      </section>

      <section className="mt-8">
        <RelatedCalculators currentHref="/calculators/shopify-profit" />
      </section>
    </CalculatorShell>
  );
}