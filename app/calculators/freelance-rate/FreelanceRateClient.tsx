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
    <div className="mx-auto max-w-5xl px-4 py-14">
      <section className="mb-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600">
            Freelance Pricing
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Freelance Rate Calculator
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Calculate the hourly freelance rate you need based on your target
            income, monthly expenses, and billable hours.
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          Enter your numbers
        </h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Input
            label="Target Monthly Income ($)"
            name="targetIncome"
            value={form.targetIncome}
            onChange={handleChange}
          />
          <Input
            label="Monthly Expenses ($)"
            name="monthlyExpenses"
            value={form.monthlyExpenses}
            onChange={handleChange}
          />
          <Input
            label="Billable Hours per Month"
            name="billableHours"
            value={form.billableHours}
            onChange={handleChange}
          />
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <ResultCard
          label="Total Needed per Month"
          value={`$${result.totalNeeded.toFixed(2)}`}
        />
        <ResultCard
          label="Recommended Hourly Rate"
          value={`$${result.hourlyRate.toFixed(2)}`}
        />
      </section>

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          Why freelancers underprice themselves
        </h2>
        <p className="mb-6 text-slate-600 leading-7">
          Many freelancers choose a rate based on emotion, insecurity, or market
          pressure instead of math. That usually leads to undercharging,
          burnout, and unstable income. This calculator helps you set a rate
          based on what you actually need to survive and grow.
        </p>

        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          How to use your result
        </h2>
        <p className="text-slate-600 leading-7">
          Use the result as your minimum sustainable hourly rate. From there,
          increase your price based on your skill level, niche expertise,
          project complexity, client type, and the value you create.
        </p>
      </section>

      <section className="mt-8">
        <RelatedCalculators currentHref="/calculators/freelance-rate" />
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
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
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
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
        {value}
      </p>
    </div>
  );
}