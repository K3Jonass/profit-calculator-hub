import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Free Profit Calculators for Online Businesses | ProfitHub",
  description:
    "ProfitHub.cloud offers free online calculators for ecommerce, SaaS, freelance work, subscriptions, revenue sharing, breakeven analysis, and smarter business decisions.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomePageClient />;
}