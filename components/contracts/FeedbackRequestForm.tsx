"use client";

import { useState } from "react";
import type { FeedbackRequestTone, FeedbackRequestValues } from "@/lib/contract-types";

type FeedbackRequestFormProps = {
  onSubmit: (values: FeedbackRequestValues) => Promise<void> | void;
  isLoading?: boolean;
};

const tones: FeedbackRequestTone[] = ["formal", "friendly"];

const inputClassName =
  "w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

export default function FeedbackRequestForm({
  onSubmit,
  isLoading = false,
}: FeedbackRequestFormProps) {
  const [values, setValues] = useState<FeedbackRequestValues>({
    businessName: "",
    clientName: "",
    projectDescription: "",
    resultsAchieved: "",
    platform: "",
    tone: "friendly",
    country: "",
  });

  function updateField<K extends keyof FeedbackRequestValues>(
    field: K,
    value: FeedbackRequestValues[K]
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
          Your Name / Business Name
        </label>
        <input
          type="text"
          value={values.businessName}
          onChange={(e) => updateField("businessName", e.target.value)}
          placeholder="e.g. ProfitHub Studio"
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
          placeholder="e.g. Acme Labs"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Project Description
        </label>
        <textarea
          rows={3}
          value={values.projectDescription}
          onChange={(e) => updateField("projectDescription", e.target.value)}
          placeholder="What project did you complete for this client?"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Results Achieved
        </label>
        <textarea
          rows={3}
          value={values.resultsAchieved}
          onChange={(e) => updateField("resultsAchieved", e.target.value)}
          placeholder="e.g. Increased lead conversion by 32% in 6 weeks"
          className={inputClassName}
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Platform
          </label>
          <input
            type="text"
            value={values.platform}
            onChange={(e) => updateField("platform", e.target.value)}
            placeholder="e.g. LinkedIn, Website"
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Tone
          </label>
          <select
            value={values.tone}
            onChange={(e) =>
              updateField("tone", e.target.value as FeedbackRequestTone)
            }
            className={inputClassName}
            required
          >
            {tones.map((tone) => (
              <option key={tone} value={tone}>
                {tone.charAt(0).toUpperCase() + tone.slice(1)}
              </option>
            ))}
          </select>
        </div>
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
        {isLoading ? "Generating Request..." : "Generate Feedback Request"}
      </button>
    </form>
  );
}
