"use client";

import { useState } from "react";
import WelcomeDocForm from "@/components/contracts/WelcomeDocForm";
import ContractPreview from "@/components/contracts/ContractPreview";
import ContractPaywall from "@/components/contracts/ContractPaywall";
import type {
  WelcomeDocFormValues,
  GenerateContractResponse,
} from "@/lib/contract-types";

export default function WelcomeDocGeneratorPage() {
  const [contractText, setContractText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(values: WelcomeDocFormValues) {
    try {
      setIsLoading(true);
      setError("");
      setContractText("");
      setIsUnlocked(false);

      const response = await fetch("/api/generate-contract", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contractType: "welcome-doc",
          ...values,
        }),
      });

      const data: GenerateContractResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate welcome document.");
      }

      setContractText(data.contract);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSimulateUnlock() {
    setIsUnlocked(true);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              ProfitHub Deal Engine
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Welcome Document Generator
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Generate a polished client welcome document in around 60 seconds.
              Built for agencies, freelancers, operators, and small teams.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              This tool creates a practical onboarding document template based
              on your inputs. It is not legal advice.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-slate-900">
                Welcome Document Details
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fill in the onboarding details and ProfitHub will generate a
                ready-to-share welcome document template.
              </p>
            </div>

            <WelcomeDocForm onSubmit={handleGenerate} isLoading={isLoading} />

            {error ? (
              <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-6">
            <ContractPreview contractText={contractText} isLoading={isLoading} />

            <ContractPaywall
              hasContract={Boolean(contractText)}
              contractText={contractText}
              isUnlocked={isUnlocked}
              onUnlock={handleSimulateUnlock}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
