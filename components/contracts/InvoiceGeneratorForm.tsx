"use client";

import { useState } from "react";
import type { InvoiceFormValues, SupportedCurrency } from "@/lib/contract-types";

type InvoiceGeneratorFormProps = {
  onSubmit: (values: InvoiceFormValues) => Promise<void> | void;
  isLoading?: boolean;
};

const supportedCurrencies: SupportedCurrency[] = [
  "USD",
  "EUR",
  "GBP",
  "MAD",
  "SAR",
  "AED",
];

const inputClassName =
  "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-200";

const labelClassName = "block text-sm font-medium text-slate-700";

export default function InvoiceGeneratorForm({
  onSubmit,
  isLoading = false,
}: InvoiceGeneratorFormProps) {
  const [formValues, setFormValues] = useState<InvoiceFormValues>({
    businessName: "",
    clientName: "",
    invoiceNumber: "",
    issueDate: "",
    dueDate: "",
    serviceDescription: "",
    amountDue: "",
    country: "",
    currency: "USD",
  });

  function updateField<K extends keyof InvoiceFormValues>(
    field: K,
    value: InvoiceFormValues[K]
  ) {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await onSubmit(formValues);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="businessName" className={labelClassName}>
            Your Business Name
          </label>
          <input
            id="businessName"
            type="text"
            value={formValues.businessName}
            onChange={(e) => updateField("businessName", e.target.value)}
            placeholder="e.g. ProfitHub LLC"
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="clientName" className={labelClassName}>
            Client Name
          </label>
          <input
            id="clientName"
            type="text"
            value={formValues.clientName}
            onChange={(e) => updateField("clientName", e.target.value)}
            placeholder="e.g. Acme Inc"
            className={inputClassName}
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="invoiceNumber" className={labelClassName}>
            Invoice Number
          </label>
          <input
            id="invoiceNumber"
            type="text"
            value={formValues.invoiceNumber}
            onChange={(e) => updateField("invoiceNumber", e.target.value)}
            placeholder="e.g. INV-2026-001"
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="issueDate" className={labelClassName}>
            Issue Date
          </label>
          <input
            id="issueDate"
            type="text"
            value={formValues.issueDate}
            onChange={(e) => updateField("issueDate", e.target.value)}
            placeholder="e.g. April 1, 2026"
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="dueDate" className={labelClassName}>
            Due Date
          </label>
          <input
            id="dueDate"
            type="text"
            value={formValues.dueDate}
            onChange={(e) => updateField("dueDate", e.target.value)}
            placeholder="e.g. April 15, 2026"
            className={inputClassName}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceDescription" className={labelClassName}>
          Services / Items Description
        </label>
        <textarea
          id="serviceDescription"
          value={formValues.serviceDescription}
          onChange={(e) => updateField("serviceDescription", e.target.value)}
          placeholder="Describe what is being billed (deliverables, hours, package, etc.)."
          className={`${inputClassName} min-h-[140px] resize-y`}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="amountDue" className={labelClassName}>
            Total Amount Due
          </label>
          <input
            id="amountDue"
            type="text"
            value={formValues.amountDue}
            onChange={(e) => updateField("amountDue", e.target.value)}
            placeholder="e.g. 2500"
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="currency" className={labelClassName}>
            Currency
          </label>
          <select
            id="currency"
            value={formValues.currency}
            onChange={(e) =>
              updateField("currency", e.target.value as SupportedCurrency)
            }
            className={inputClassName}
            required
          >
            {supportedCurrencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="country" className={labelClassName}>
            Country
          </label>
          <input
            id="country"
            type="text"
            value={formValues.country}
            onChange={(e) => updateField("country", e.target.value)}
            placeholder="e.g. United States"
            className={inputClassName}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Generating Invoice..." : "Generate Invoice"}
      </button>
    </form>
  );
}
