"use client";

import { useState } from "react";
import type {
  RevenueShareFormValues,
  PaymentFrequency,
  SupportedCurrency,
} from "@/lib/contract-types";

type RevenueShareFormProps = {
  onSubmit: (values: RevenueShareFormValues) => Promise<void>;
  isLoading: boolean;
};

const paymentFrequencies: PaymentFrequency[] = [
  "weekly",
  "biweekly",
  "monthly",
  "quarterly",
];

const supportedCurrencies: SupportedCurrency[] = [
  "USD",
  "EUR",
  "GBP",
  "MAD",
  "SAR",
  "AED",
];

const inputClassName =
  "ui-input mt-2 px-4 py-3 text-sm";

const labelClassName =
  "ui-label";

export default function RevenueShareForm({
  onSubmit,
  isLoading,
}: RevenueShareFormProps) {
  const [formValues, setFormValues] = useState<RevenueShareFormValues>({
    partyAName: "",
    partyBName: "",
    revenueSharePercentage: "",
    paymentFrequency: "monthly",
    serviceDescription: "",
    country: "",
    currency: "USD",
  });

  function updateField<K extends keyof RevenueShareFormValues>(
    field: K,
    value: RevenueShareFormValues[K]
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
      <div>
        <label htmlFor="partyAName" className={labelClassName}>
          Party A Name
        </label>
        <input
          id="partyAName"
          type="text"
          value={formValues.partyAName}
          onChange={(e) => updateField("partyAName", e.target.value)}
          placeholder="e.g. Atlas Growth LLC"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label htmlFor="partyBName" className={labelClassName}>
          Party B Name
        </label>
        <input
          id="partyBName"
          type="text"
          value={formValues.partyBName}
          onChange={(e) => updateField("partyBName", e.target.value)}
          placeholder="e.g. Youness Couraj"
          className={inputClassName}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="revenueSharePercentage"
            className={labelClassName}
          >
            Revenue Share %
          </label>
          <input
            id="revenueSharePercentage"
            type="number"
            min="1"
            max="100"
            step="0.01"
            value={formValues.revenueSharePercentage}
            onChange={(e) =>
              updateField("revenueSharePercentage", e.target.value)
            }
            placeholder="e.g. 20"
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="paymentFrequency" className={labelClassName}>
            Payment Frequency
          </label>
          <select
            id="paymentFrequency"
            value={formValues.paymentFrequency}
            onChange={(e) =>
              updateField(
                "paymentFrequency",
                e.target.value as PaymentFrequency
              )
            }
            className={inputClassName}
            required
          >
            {paymentFrequencies.map((frequency) => (
              <option key={frequency} value={frequency}>
                {frequency.charAt(0).toUpperCase() + frequency.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="serviceDescription" className={labelClassName}>
          Service / Product Description
        </label>
        <textarea
          id="serviceDescription"
          value={formValues.serviceDescription}
          onChange={(e) => updateField("serviceDescription", e.target.value)}
          placeholder="Describe the product, service, campaign, offer, or business activity covered by this agreement."
          className={`${inputClassName} min-h-[140px] resize-y`}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className={labelClassName}>
            Country / Jurisdiction
          </label>
          <input
            id="country"
            type="text"
            value={formValues.country}
            onChange={(e) => updateField("country", e.target.value)}
            placeholder="e.g. Morocco"
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
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center rounded-2xl ui-button-primary px-5 py-3.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Generating Contract..." : "Generate Contract"}
      </button>
    </form>
  );
}