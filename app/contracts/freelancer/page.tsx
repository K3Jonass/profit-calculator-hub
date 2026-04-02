"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import FreelancerContractForm from "@/components/contracts/FreelancerContractForm";
import ContractPreview from "@/components/contracts/ContractPreview";
import ContractPaywall from "@/components/contracts/ContractPaywall";
import type {
  FreelancerFormValues,
  GenerateContractResponse,
} from "@/lib/contract-types";

function parseBudget(raw: string) {
  const numeric = Number(raw.replace(/[^\d.]/g, ""));
  return Number.isFinite(numeric) && numeric > 0 ? String(numeric) : "";
}

export default function FreelancerContractPage() {
  const [contractText, setContractText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [lastValues, setLastValues] = useState<FreelancerFormValues | null>(null);

  async function handleGenerate(values: FreelancerFormValues) {
    try {
      setIsLoading(true);
      setError("");
      setContractText("");
      setIsUnlocked(false);
      setLastValues(values);

      const response = await fetch("/api/generate-contract", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contractType: "freelancer",
          ...values,
        }),
      });

      const data: GenerateContractResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate contract.");
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

  const createProjectHref = useMemo(() => {
    if (!lastValues) {
      return "/workspace/projects";
    }

    const prefill = {
      source_contract_type: "freelancer",
      client_name: lastValues.clientName,
      project_name: lastValues.projectDescription.slice(0, 80),
      budget: parseBudget(lastValues.paymentAmount),
      notes: `Contract source: Freelancer Contract\nFreelancer: ${lastValues.freelancerName}\nPayment type: ${lastValues.paymentType}\nDeadline: ${lastValues.deadline || "Not specified"}\nCountry: ${lastValues.country}`,
    };

    return `/workspace/projects?${new URLSearchParams(prefill).toString()}`;
  }, [lastValues]);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              ProfitHub Deal Engine
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Freelancer Contract Generator
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Generate a professional freelancer contract in around 60
              seconds. Built for freelancers, clients, founders, and small
              business owners who need a clear project agreement fast.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              This tool creates a practical contract template based on your
              inputs. It is not legal advice.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-slate-900">
                Contract Details
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fill in the project terms below and ProfitHub will generate a
                ready-to-use freelancer agreement template.
              </p>
            </div>

            <FreelancerContractForm
              onSubmit={handleGenerate}
              isLoading={isLoading}
            />

            {error ? (
              <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-6">
            <ContractPreview
              contractText={contractText}
              isLoading={isLoading}
            />

            {contractText ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">Next step</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Convert this contract into a workspace project with prefilled client and scope details.
                </p>
                <div className="mt-3">
                  <Link
                    href={createProjectHref}
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Create Project from this Contract
                  </Link>
                </div>
              </div>
            ) : null}

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
