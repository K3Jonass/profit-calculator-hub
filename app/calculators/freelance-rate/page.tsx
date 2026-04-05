import type { Metadata } from "next";
import FreelanceRateClient from "./FreelanceRateClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { calculatorSeoContent } from "@/lib/calculator-seo-content";

export const metadata: Metadata = {
  title: "Freelance Rate Calculator Free | Hourly Rate Tool",
  description:
    "Calculate your ideal freelance hourly rate based on income goals, expenses, and billable hours.",
};

export default function FreelanceRatePage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["freelance-rate"]}>
      <FreelanceRateClient />
    </CalculatorSeoScaffold>
  );
}
