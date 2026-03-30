import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ProfitHub",
  description:
    "Contact ProfitHub for questions, partnerships, or support. Reach out and get a response quickly.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">

      <section className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600">
            Contact
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Get in touch
          </h1>

          <p className="mt-4 text-lg text-slate-600 leading-7">
            Have a question, idea, or partnership request? Reach out and we’ll
            get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Email
        </h2>

        <a
          href="mailto:contact@profithub.cloud"
          className="text-lg font-medium text-blue-600 hover:underline"
        >
          contact@profithub.cloud
        </a>

        <p className="mt-4 text-slate-600">
          We usually respond within 24–48 hours.
        </p>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          What you can contact us for
        </h2>

        <ul className="space-y-2 text-slate-600">
          <li>• Support and questions</li>
          <li>• Business partnerships</li>
          <li>• Feature requests</li>
          <li>• Feedback and improvements</li>
        </ul>
      </section>
    </main>
  );
}