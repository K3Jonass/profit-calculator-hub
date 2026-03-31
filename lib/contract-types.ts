export type PaymentFrequency =
  | "weekly"
  | "biweekly"
  | "monthly"
  | "quarterly";

export type SupportedCurrency =
  | "USD"
  | "EUR"
  | "GBP"
  | "MAD"
  | "SAR"
  | "AED";

export type RevenueShareFormValues = {
  partyAName: string;
  partyBName: string;
  revenueSharePercentage: string;
  paymentFrequency: PaymentFrequency;
  serviceDescription: string;
  country: string;
  currency: SupportedCurrency;
};

export type GenerateContractResponse = {
  contract: string;
  error?: string;
};