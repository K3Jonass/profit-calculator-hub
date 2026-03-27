import type { Metadata } from "next";
import SaaSMRRClient from "./SaaSMRRClient";

export const metadata: Metadata = {
  title: "SaaS MRR Calculator Free | MRR & ARR Tool",
  description:
    "Calculate monthly recurring revenue and annual recurring revenue with this free SaaS MRR calculator.",
};

export default function SaaSMRRPage() {
  return <SaaSMRRClient />;
}