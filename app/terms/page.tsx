import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ProfitHub",
  description: "Read the Terms of Service for ProfitHub.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Terms of Service</h1>

      <div className="space-y-6 text-slate-600">
        <p>
          ProfitHub provides free calculators and informational tools for general business use.
          Results are estimates only and should not be treated as legal, financial, or tax advice.
        </p>
        <p>
          By using this site, you accept that you are responsible for how you interpret and use the
          results provided by the calculators.
        </p>
        <p>
          We may update or modify the website and these terms at any time without prior notice.
        </p>
      </div>
    </div>
  );
}