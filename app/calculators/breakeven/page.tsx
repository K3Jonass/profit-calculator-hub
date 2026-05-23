import type { Metadata } from "next";
import BreakevenClient from "./BreakevenClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { generateCalculatorMetadata, calculatorSeoContent } from "@/lib/calculator-seo-content";

export async function generateMetadata(): Promise<Metadata> {
  return generateCalculatorMetadata("breakeven");
}

export default function BreakevenPage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent.breakeven}>
      <BreakevenClient />
    </CalculatorSeoScaffold>
  );
}
