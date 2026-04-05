import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ProfitHub",
  description:
    "Read the ProfitHub Privacy Policy covering analytics, cookies, and privacy questions.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="motion-fade-up rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          This page explains what data is collected on ProfitHub and how it is used to improve site performance and product quality.
        </p>
      </section>

      <div className="motion-stagger mt-8 space-y-4">
        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">What data we collect</h2>
          <p className="mt-3 leading-7 text-slate-600">
            ProfitHub calculators run in your browser and do not require account creation for basic use. We may collect standard website telemetry such as page views, device/browser details, and interaction events through analytics tools.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Analytics and performance monitoring</h2>
          <p className="mt-3 leading-7 text-slate-600">
            ProfitHub currently uses third-party analytics and performance products integrated in the site code, including Google Analytics, Microsoft Clarity, Vercel Analytics, and Vercel Speed Insights.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Cookies and tracking</h2>
          <p className="mt-3 leading-7 text-slate-600">
            These analytics providers may use cookies or similar technologies to measure traffic and user experience trends. You can manage cookies through your browser settings.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Third-party links and tools</h2>
          <p className="mt-3 leading-7 text-slate-600">
            ProfitHub may link to external services. We are not responsible for the privacy practices of third-party websites.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Policy updates</h2>
          <p className="mt-3 leading-7 text-slate-600">
            We may update this policy as the product evolves. The latest version is always published at <Link href="/privacy-policy" className="font-semibold text-blue-700 animated-link">/privacy-policy</Link>.
          </p>
        </section>
      </div>

      <section className="motion-fade-up mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Privacy questions</h2>
        <p className="mt-3 text-slate-600">
          For privacy questions or requests, email <a href="mailto:contact@profithub.cloud" className="font-semibold text-blue-700 animated-link">contact@profithub.cloud</a> or visit our <Link href="/contact" className="font-semibold text-blue-700 animated-link">contact page</Link>.
        </p>
      </section>
    </main>
  );
}
