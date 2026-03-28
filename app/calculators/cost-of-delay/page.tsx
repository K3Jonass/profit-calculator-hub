import CostOfDelayClient from "./CostOfDelayClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost of Delay Calculator Free Tool",
  description:
    "Estimate how much money you lose by delaying a business idea, project, launch, or decision. Use this free cost of delay calculator to measure lost revenue and opportunity cost.",
  alternates: {
    canonical: "/calculators/cost-of-delay",
  },
};

export default function CostOfDelayPage() {
  return <CostOfDelayClient />;
}