import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://profithub.cloud"),
  title: {
    default: "ProfitHub",
    template: "%s | ProfitHub",
  },
  description:
    "Free online profit calculators for ecommerce, SaaS, freelancers, subscriptions, pricing, revenue share, breakeven analysis, and smarter business decisions.",
  applicationName: "ProfitHub",
  keywords: [
    "profit calculator",
    "business calculator",
    "shopify profit calculator",
    "dropshipping profit calculator",
    "saas mrr calculator",
    "freelance rate calculator",
    "breakeven calculator",
    "revenue share calculator",
    "subscription leak calculator",
    "cost of delay calculator",
    "freelance project profit calculator",
    "business decision calculator",
  ],
  authors: [{ name: "ProfitHub" }],
  creator: "ProfitHub",
  publisher: "ProfitHub",
  category: "Business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ProfitHub",
    description:
      "Free calculators for ecommerce, SaaS, freelancers, subscriptions, pricing, and smarter business decisions.",
    url: "https://profithub.cloud",
    siteName: "ProfitHub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProfitHub",
    description:
      "Free calculators for ecommerce, SaaS, freelancers, subscriptions, pricing, and smarter business decisions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ProfitHub",
    url: "https://profithub.cloud",
    logo: "https://profithub.cloud/icon.png",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ProfitHub",
    url: "https://profithub.cloud",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://profithub.cloud/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.06),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.05),transparent_28%)]" />
          <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-24 border-b border-transparent bg-white/55 backdrop-blur-xl dark:bg-slate-950/35" />

          <Navbar />

          <main className="relative z-10">{children}</main>

          <Footer />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}