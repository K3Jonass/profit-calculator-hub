import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ProfitHub",
  description: "Read the Privacy Policy for ProfitHub.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Privacy Policy</h1>

      <div className="space-y-6 text-slate-600">
        <p>
          ProfitHub respects your privacy. This website may collect basic analytics and usage data
          to improve performance and user experience.
        </p>
        <p>
          We do not sell personal data. If contact forms, analytics tools, or advertising services
          are added in the future, this page may be updated accordingly.
        </p>
        <p>
          By using this website, you agree to this Privacy Policy and any future updates posted on
          this page.
        </p>
      </div>
    </div>
  );
}