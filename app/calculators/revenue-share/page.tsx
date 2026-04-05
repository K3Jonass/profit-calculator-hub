import type { Metadata } from "next";
import RevenueShareClient from "./RevenueShareClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { calculatorSeoContent } from "@/lib/calculator-seo-content";

export const metadata: Metadata = {
  title: "Revenue Share Calculator Free | Partnership Split Tool",
  description: "Model fair revenue split scenarios and estimate partner payouts with this free calculator.",
};

export default function RevenueSharePage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["revenue-share"]}>
      <RevenueShareClient />
    </CalculatorSeoScaffold>
  );
}
