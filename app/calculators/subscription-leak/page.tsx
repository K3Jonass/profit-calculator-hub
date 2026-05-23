import type { Metadata } from "next";
import SubscriptionLeakClient from "./SubscriptionLeakClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { generateCalculatorMetadata, calculatorSeoContent } from "@/lib/calculator-seo-content";

export async function generateMetadata(): Promise<Metadata> {
  return generateCalculatorMetadata("subscription-leak");
}

export default function SubscriptionLeakPage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["subscription-leak"]}>
      <SubscriptionLeakClient />
    </CalculatorSeoScaffold>
  );
}
