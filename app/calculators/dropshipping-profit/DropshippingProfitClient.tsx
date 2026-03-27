"use client";

import { useMemo, useState } from "react";
import { calculateDropshippingProfit } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";

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
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="mb-3 text-4xl font-bold tracking-tight">
        Dropshipping Profit Calculator
      </h1>

      <p className="mb-8 text-slate-600">
        Calculate your dropshipping revenue, total costs, net profit, and margin instantly.
      </p>

      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <Input label="Number of Orders" name="orders" value={form.orders} onChange={handleChange} />
        <Input label="Selling Price ($)" name="sellingPrice" value={form.sellingPrice} onChange={handleChange} />
        <Input label="Product Cost ($)" name="productCost" value={form.productCost} onChange={handleChange} />
        <Input label="Ad Spend ($)" name="adsCost" value={form.adsCost} onChange={handleChange} />
        <Input label="Shipping Costs ($)" name="shipping" value={form.shipping} onChange={handleChange} />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <ResultCard label="Revenue" value={`$${result.revenue.toFixed(2)}`} />
        <ResultCard label="Costs" value={`$${result.costs.toFixed(2)}`} />
        <ResultCard label="Profit" value={`$${result.profit.toFixed(2)}`} />
        <ResultCard label="Margin" value={`${result.margin.toFixed(2)}%`} />
      </div>

      <section className="mt-14 max-w-none">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          How this dropshipping calculator works
        </h2>
        <p className="mb-6 text-slate-600">
          This calculator estimates your total revenue from orders, then subtracts product costs,
          shipping, and ad spend to show your actual net profit and margin.
        </p>

        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          Why this matters
        </h2>
        <p className="text-slate-600">
          Many dropshipping stores look profitable at the revenue level but become weak after ad
          costs and fulfillment expenses are included. Use this tool before scaling.
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
      <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
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
      <RelatedCalculators currentHref="/calculators/dropshipping-profit" />
    </div>
  );
}