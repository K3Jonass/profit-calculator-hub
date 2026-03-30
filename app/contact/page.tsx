import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ProfitHub",
  description: "Get in touch with ProfitHub for questions, feedback, or partnerships.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Contact</h1>
      <p className="mb-6 text-slate-600">
        For questions, feedback, or partnership inquiries, contact us at:
      </p>
      <p className="text-lg font-medium text-slate-900">contact@profithub.cloud</p>
    </div>
  );
}