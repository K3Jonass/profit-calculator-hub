"use client";

import { useState } from "react";
import type {
  FreelancerFormValues,
  FreelancerPaymentType,
  SupportedCurrency,
} from "@/lib/contract-types";

type FreelancerContractFormProps = {
  onSubmit: (values: FreelancerFormValues) => Promise<void> | void;
  isLoading?: boolean;
};

export default function FreelancerContractForm({
  onSubmit,
  isLoading = false,
}: FreelancerContractFormProps) {
  const [values, setValues] = useState<FreelancerFormValues>({
    clientName: "",
    freelancerName: "",
    projectDescription: "",
    paymentAmount: "",
    paymentType: "fixed",
    deadline: "",
    country: "",
    currency: "USD",
  });

  function updateField<K extends keyof FreelancerFormValues>(
    field: K,
    value: FreelancerFormValues[K]
  ) {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Client Name
        </label>
        <input
          type="text"
          value={values.clientName}
          onChange={(e) => updateField("clientName", e.target.value)}
          placeholder="Enter client name"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Freelancer Name
        </label>
        <input
          type="text"
          value={values.freelancerName}
          onChange={(e) => updateField("freelancerName", e.target.value)}
          placeholder="Enter freelancer name"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Project Description
        </label>
        <textarea
          value={values.projectDescription}
          onChange={(e) => updateField("projectDescription", e.target.value)}
          placeholder="Describe the project or services"
          rows={5}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Payment Amount
        </label>
        <input
          type="text"
          value={values.paymentAmount}
          onChange={(e) => updateField("paymentAmount", e.target.value)}
          placeholder="e.g. 1000"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Payment Type
        </label>
        <select
          value={values.paymentType}
          onChange={(e) =>
            updateField(
              "paymentType",
              e.target.value as FreelancerPaymentType
            )
          }
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        >
          <option value="fixed">Fixed Price</option>
          <option value="hourly">Hourly</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Deadline
        </label>
        <input
          type="text"
          value={values.deadline}
          onChange={(e) => updateField("deadline", e.target.value)}
          placeholder="e.g. June 30, 2026"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Country
        </label>
        <input
          type="text"
          value={values.country}
          onChange={(e) => updateField("country", e.target.value)}
          placeholder="e.g. United States"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Currency
        </label>
        <select
          value={values.currency}
          onChange={(e) =>
            updateField("currency", e.target.value as SupportedCurrency)
          }
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="MAD">MAD</option>
          <option value="SAR">SAR</option>
          <option value="AED">AED</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Generating Contract..." : "Generate Freelancer Contract"}
      </button>
    </form>
  );
}