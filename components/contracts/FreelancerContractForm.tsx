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
        <label className="ui-label">
          Client Name
        </label>
        <input
          type="text"
          value={values.clientName}
          onChange={(e) => updateField("clientName", e.target.value)}
          placeholder="Enter client name"
          className="ui-input px-4 py-3 text-sm"
          required
        />
      </div>

      <div>
        <label className="ui-label">
          Freelancer Name
        </label>
        <input
          type="text"
          value={values.freelancerName}
          onChange={(e) => updateField("freelancerName", e.target.value)}
          placeholder="Enter freelancer name"
          className="ui-input px-4 py-3 text-sm"
          required
        />
      </div>

      <div>
        <label className="ui-label">
          Project Description
        </label>
        <textarea
          value={values.projectDescription}
          onChange={(e) => updateField("projectDescription", e.target.value)}
          placeholder="Describe the project or services"
          rows={5}
          className="ui-input px-4 py-3 text-sm"
          required
        />
      </div>

      <div>
        <label className="ui-label">
          Payment Amount
        </label>
        <input
          type="text"
          value={values.paymentAmount}
          onChange={(e) => updateField("paymentAmount", e.target.value)}
          placeholder="e.g. 1000"
          className="ui-input px-4 py-3 text-sm"
          required
        />
      </div>

      <div>
        <label className="ui-label">
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
          className="ui-input px-4 py-3 text-sm"
        >
          <option value="fixed">Fixed Price</option>
          <option value="hourly">Hourly</option>
        </select>
      </div>

      <div>
        <label className="ui-label">
          Deadline
        </label>
        <input
          type="text"
          value={values.deadline}
          onChange={(e) => updateField("deadline", e.target.value)}
          placeholder="e.g. June 30, 2026"
          className="ui-input px-4 py-3 text-sm"
        />
      </div>

      <div>
        <label className="ui-label">
          Country
        </label>
        <input
          type="text"
          value={values.country}
          onChange={(e) => updateField("country", e.target.value)}
          placeholder="e.g. United States"
          className="ui-input px-4 py-3 text-sm"
          required
        />
      </div>

      <div>
        <label className="ui-label">
          Currency
        </label>
        <select
          value={values.currency}
          onChange={(e) =>
            updateField("currency", e.target.value as SupportedCurrency)
          }
          className="ui-input px-4 py-3 text-sm"
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
        className="w-full rounded-2xl ui-button-primary px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Generating Contract..." : "Generate Freelancer Contract"}
      </button>
    </form>
  );
}