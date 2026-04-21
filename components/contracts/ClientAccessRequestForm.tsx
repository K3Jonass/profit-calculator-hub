"use client";

import { useState } from "react";
import type { ClientAccessRequestValues } from "@/lib/contract-types";

type ClientAccessRequestFormProps = {
  onSubmit: (values: ClientAccessRequestValues) => Promise<void> | void;
  isLoading?: boolean;
};

const inputClassName =
  "ui-input px-4 py-3 text-sm";

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
        <label className="ui-label">
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
        <label className="ui-label">
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
        <label className="ui-label">
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
        <label className="ui-label">
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
        <label className="ui-label">
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
        <label className="ui-label">
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
        <label className="ui-label">
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
        className="w-full rounded-2xl ui-button-primary px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Generating Request..." : "Generate Access Request"}
      </button>
    </form>
  );
}
