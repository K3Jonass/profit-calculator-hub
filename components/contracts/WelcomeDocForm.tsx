"use client";

import { useState } from "react";
import type { WelcomeDocFormValues } from "@/lib/contract-types";

type WelcomeDocFormProps = {
  onSubmit: (values: WelcomeDocFormValues) => Promise<void> | void;
  isLoading?: boolean;
};

const inputClassName =
  "w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

export default function WelcomeDocForm({
  onSubmit,
  isLoading = false,
}: WelcomeDocFormProps) {
  const [values, setValues] = useState<WelcomeDocFormValues>({
    companyName: "",
    clientName: "",
    projectName: "",
    servicesOverview: "",
    communicationChannels: "",
    timelineOverview: "",
    keyDeliverables: "",
    country: "",
  });

  function updateField<K extends keyof WelcomeDocFormValues>(
    field: K,
    value: WelcomeDocFormValues[K]
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
          Company / Brand Name
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
          placeholder="e.g. Acme Co"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Project Name
        </label>
        <input
          type="text"
          value={values.projectName}
          onChange={(e) => updateField("projectName", e.target.value)}
          placeholder="e.g. Q2 Growth Sprint"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Services Overview
        </label>
        <textarea
          rows={4}
          value={values.servicesOverview}
          onChange={(e) => updateField("servicesOverview", e.target.value)}
          placeholder="Summarize what services are included"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Communication Channels
        </label>
        <textarea
          rows={3}
          value={values.communicationChannels}
          onChange={(e) => updateField("communicationChannels", e.target.value)}
          placeholder="e.g. Weekly Zoom, Slack, Email"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Timeline Overview
        </label>
        <textarea
          rows={3}
          value={values.timelineOverview}
          onChange={(e) => updateField("timelineOverview", e.target.value)}
          placeholder="e.g. Kickoff, milestones, final delivery"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Key Deliverables
        </label>
        <textarea
          rows={4}
          value={values.keyDeliverables}
          onChange={(e) => updateField("keyDeliverables", e.target.value)}
          placeholder="List the expected outputs"
          className={inputClassName}
          required
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
        {isLoading ? "Generating Document..." : "Generate Welcome Document"}
      </button>
    </form>
  );
}
