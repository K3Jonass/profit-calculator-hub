import type { Metadata } from "next";
import FreelanceRateClient from "./FreelanceRateClient";

export const metadata: Metadata = {
  title: "Freelance Rate Calculator Free | Hourly Rate Tool",
  description:
    "Calculate your ideal freelance hourly rate based on income goals, expenses, and billable hours.",
};

export default function FreelanceRatePage() {
  return <FreelanceRateClient />;
}