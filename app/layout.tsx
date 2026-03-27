import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://profithub.cloud"),
  title: {
    default: "ProfitHub",
    template: "%s | ProfitHub",
  },
  description:
    "Free online profit calculators for ecommerce, SaaS, and freelancers. Calculate margins, MRR, pricing, and breakeven points.",
  applicationName: "ProfitHub",
  keywords: [
    "profit calculator",
    "shopify profit calculator",
    "dropshipping profit calculator",
    "saas mrr calculator",
    "freelance rate calculator",
    "breakeven calculator",
  ],
  openGraph: {
    title: "ProfitHub",
    description:
      "Free calculators for ecommerce, SaaS, and freelancers.",
    url: "https://profithub.cloud",
    siteName: "ProfitHub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProfitHub",
    description:
      "Free calculators for ecommerce, SaaS, and freelancers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      {/* 🔥 Vercel Analytics */}
        <Analytics />

        {/* 🚀 Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  )
}



        