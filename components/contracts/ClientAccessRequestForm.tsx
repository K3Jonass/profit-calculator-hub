"use client";

import { useState } from "react";
import type { ClientAccessRequestValues } from "@/lib/contract-types";

type ClientAccessRequestFormProps = {
  onSubmit: (values: ClientAccessRequestValues) => Promise<void> | void;
  isLoading?: boolean;
};

const inputClassName =
  "w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

export default function ClientAccessRequestForm({
  onSubmit,
  isLoading = false,
}: ClientAccessRequestFormProps) {
  const [values, setValues] = useState<ClientAccessRequestValues>({
    companyName: "",
    clientName: "",
    requestedAccess: "",
    purposeOfAccess: "",
    deadlineOrUrgency: "",
    notesOrInstructions: "",
    country: "",
  });

  function updateField<K extends keyof ClientAccessRequestValues>(
    field: K,
    value: ClientAccessRequestValues[K]
  ) {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Company Name
        </label>
        <input
          type="text"
          value={values.companyName}
          onChange={(e) => updateField("companyName", e.target.value)}
          placeholder="e.g. ProfitHub"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Client Name
        </label>
        <input
          type="text"
          value={values.clientName}
          onChange={(e) => updateField("clientName", e.target.value)}
          placeholder="e.g. Acme Inc"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Requested Access (accounts/tools)
        </label>
        <textarea
          rows={3}
          value={values.requestedAccess}
          onChange={(e) => updateField("requestedAccess", e.target.value)}
          placeholder="List account names, platforms, and required permission levels"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Purpose of Access
        </label>
        <textarea
          rows={3}
          value={values.purposeOfAccess}
          onChange={(e) => updateField("purposeOfAccess", e.target.value)}
          placeholder="Explain why this access is needed"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Deadline / urgency
        </label>
        <input
          type="text"
          value={values.deadlineOrUrgency}
          onChange={(e) => updateField("deadlineOrUrgency", e.target.value)}
          placeholder="e.g. Needed by April 10, 2026"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Notes / instructions
        </label>
        <textarea
          rows={4}
          value={values.notesOrInstructions}
          onChange={(e) => updateField("notesOrInstructions", e.target.value)}
          placeholder="Any special instructions, security constraints, or approvals"
          className={inputClassName}
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
          className={inputClassName}
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Generating Request..." : "Generate Access Request"}
      </button>
    </form>
  );
}
