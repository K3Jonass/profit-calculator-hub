"use client";

import { useMemo, useState } from "react";
import { calculateShopifyProfit } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";

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
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="mb-3 text-4xl font-bold tracking-tight">
        Shopify Profit Calculator
      </h1>

      <p className="mb-8 text-slate-600">
        Calculate your Shopify store net profit, total costs, and profit margin instantly.
      </p>

      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <Input label="Revenue ($)" name="revenue" value={form.revenue} onChange={handleChange} />
        <Input label="Product Cost ($)" name="productCost" value={form.productCost} onChange={handleChange} />
        <Input label="Ad Spend ($)" name="adsCost" value={form.adsCost} onChange={handleChange} />
        <Input label="Platform Fees ($)" name="fees" value={form.fees} onChange={handleChange} />
        <Input label="Shipping Costs ($)" name="shipping" value={form.shipping} onChange={handleChange} />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <ResultCard label="Net Profit" value={`$${result.netProfit.toFixed(2)}`} />
        <ResultCard label="Total Costs" value={`$${result.totalCosts.toFixed(2)}`} />
        <ResultCard label="Profit Margin" value={`${result.margin.toFixed(2)}%`} />
      </div>

      <section className="mt-14 max-w-none">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          How this Shopify profit calculator works
        </h2>
        <p className="mb-6 text-slate-600">
          This calculator helps you estimate your real Shopify profit by subtracting
          all your business costs from your total revenue, including product cost,
          advertising spend, platform fees, and shipping.
        </p>

        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          Why profit margin matters
        </h2>
        <p className="text-slate-600">
          Many ecommerce stores generate revenue but fail to generate profit. Knowing
          your true margin allows you to scale ads safely, improve pricing, and build
          a more sustainable business.
        </p>
      </section>
    </div>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-500"
      />
    </div>
  );
}

function ResultCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
      <RelatedCalculators currentHref="/calculators/shopify-profit" />
    </div>
  );
}