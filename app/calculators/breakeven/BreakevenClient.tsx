"use client";

import { useMemo, useState } from "react";
import { calculateBreakeven } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";

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
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="mb-3 text-4xl font-bold tracking-tight">
        Breakeven Calculator
      </h1>

      <p className="mb-8 text-slate-600">
        Calculate how many sales you need to cover your fixed business costs.
      </p>

      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <Input label="Fixed Costs ($)" name="fixedCosts" value={form.fixedCosts} onChange={handleChange} />
        <Input label="Profit per Sale ($)" name="profitPerSale" value={form.profitPerSale} onChange={handleChange} />
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <ResultCard label="Breakeven Sales Needed" value={result.breakevenSales.toFixed(2)} />
      </div>

      <section className="mt-14 max-w-none">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          What is breakeven?
        </h2>
        <p className="mb-6 text-slate-600">
          Breakeven is the point where your total profit covers your total fixed costs.
          Before that point, your business is still recovering its expenses.
        </p>

        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          Why this is useful
        </h2>
        <p className="text-slate-600">
          Knowing your breakeven point helps you set realistic sales goals and avoid launching
          offers without understanding the numbers behind them.
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
      <RelatedCalculators currentHref="/calculators/breakeven" />
    </div>
  );
}