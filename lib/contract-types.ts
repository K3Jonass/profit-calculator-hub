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

export type FreelancerPaymentType = "fixed" | "hourly";

export type FreelancerFormValues = {
  clientName: string;
  freelancerName: string;
  projectDescription: string;
  paymentAmount: string;
  paymentType: FreelancerPaymentType;
  deadline: string;
  country: string;
  currency: SupportedCurrency;
};


export type WelcomeDocFormValues = {
  companyName: string;
  clientName: string;
  projectName: string;
  servicesOverview: string;
  communicationChannels: string;
  timelineOverview: string;
  keyDeliverables: string;
  country: string;
};

export type ClientAccessRequestValues = {
  companyName: string;
  clientName: string;
  requestedAccess: string;
  purposeOfAccess: string;
  deadlineOrUrgency: string;
  notesOrInstructions: string;
  country: string;
};

export type InvoiceFormValues = {
  businessName: string;
  clientName: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  serviceDescription: string;
  amountDue: string;
  country: string;
  currency: SupportedCurrency;
};

export type GenerateContractResponse = {
  contract: string;
  error?: string;
};
