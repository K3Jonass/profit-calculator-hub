import type { Metadata } from "next";
import SubscriptionLeakClient from "./SubscriptionLeakClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { calculatorSeoContent } from "@/lib/calculator-seo-content";

export const metadata: Metadata = {
  title: "Subscription Leak Calculator Free | Lost MRR Estimator",
  description:
    "Estimate recurring revenue loss from churn and failed payments with this subscription leak calculator.",
};

export default function SubscriptionLeakPage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["subscription-leak"]}>
      <SubscriptionLeakClient />
    </CalculatorSeoScaffold>
  );
}
