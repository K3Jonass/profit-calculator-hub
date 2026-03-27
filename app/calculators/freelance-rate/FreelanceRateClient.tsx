"use client";

import { useMemo, useState } from "react";
import { calculateFreelanceRate } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";

export default function FreelanceRateClient() {
  const [form, setForm] = useState({
    targetIncome: 3000,
    monthlyExpenses: 1000,
    billableHours: 80,
  });

  const result = useMemo(() => calculateFreelanceRate(form), [form]);

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
        Freelance Rate Calculator
      </h1>

      <p className="mb-8 text-slate-600">
        Calculate the hourly freelance rate you need based on your target income and monthly expenses.
      </p>

      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <Input label="Target Monthly Income ($)" name="targetIncome" value={form.targetIncome} onChange={handleChange} />
        <Input label="Monthly Expenses ($)" name="monthlyExpenses" value={form.monthlyExpenses} onChange={handleChange} />
        <Input label="Billable Hours per Month" name="billableHours" value={form.billableHours} onChange={handleChange} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ResultCard label="Total Needed per Month" value={`$${result.totalNeeded.toFixed(2)}`} />
        <ResultCard label="Recommended Hourly Rate" value={`$${result.hourlyRate.toFixed(2)}`} />
      </div>

      <section className="mt-14 max-w-none">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          Why freelancers underprice themselves
        </h2>
        <p className="mb-6 text-slate-600">
          Many freelancers choose a rate based on emotion or market pressure instead of math.
          This calculator helps you price from numbers, not guesswork.
        </p>

        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          How to use your result
        </h2>
        <p className="text-slate-600">
          Use the result as your minimum sustainable hourly rate, then adjust upward based on skill,
          niche value, and project complexity.
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
      <RelatedCalculators currentHref="/calculators/freelance-rate" />

    </div>
  );
}