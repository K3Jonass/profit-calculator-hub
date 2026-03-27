"use client";

import { useMemo, useState } from "react";
import { calculateMRR } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";

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
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="mb-3 text-4xl font-bold tracking-tight">
        SaaS MRR Calculator
      </h1>

      <p className="mb-8 text-slate-600">
        Calculate monthly recurring revenue and annual recurring revenue for your SaaS business.
      </p>

      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <Input label="Number of Customers" name="customers" value={form.customers} onChange={handleChange} />
        <Input label="Monthly Subscription Price ($)" name="monthlyPrice" value={form.monthlyPrice} onChange={handleChange} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ResultCard label="MRR" value={`$${result.mrr.toFixed(2)}`} />
        <ResultCard label="ARR" value={`$${result.arr.toFixed(2)}`} />
      </div>

      <section className="mt-14 max-w-none">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          What is MRR?
        </h2>
        <p className="mb-6 text-slate-600">
          MRR means monthly recurring revenue. It shows the predictable revenue your SaaS generates
          every month from active subscriptions.
        </p>

        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          Why founders track MRR
        </h2>
        <p className="text-slate-600">
          MRR is one of the most important SaaS metrics because it helps you measure growth,
          pricing performance, and business stability over time.
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
      <RelatedCalculators currentHref="/calculators/saas-mrr" />
    </div>
  );
}