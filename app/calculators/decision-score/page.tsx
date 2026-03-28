import DecisionScoreClient from "./DecisionScoreClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Decision Score Calculator Free Tool",
  description:
    "Use this free business decision score calculator to rate an idea, project, or opportunity based on profit potential, time required, cost, risk, and confidence.",
  alternates: {
    canonical: "/calculators/decision-score",
  },
};

export default function DecisionScorePage() {
  return <DecisionScoreClient />;
}