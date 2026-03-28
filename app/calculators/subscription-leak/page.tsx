import SubscriptionLeakClient from "./SubscriptionLeakClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription Leak Calculator Free Tool",
  description:
    "Calculate how much your subscriptions cost per month and per year, and discover where your money is leaking.",
  alternates: {
    canonical: "/calculators/subscription-leak",
  },
};

export default function SubscriptionLeakPage() {
  return <SubscriptionLeakClient />;
}