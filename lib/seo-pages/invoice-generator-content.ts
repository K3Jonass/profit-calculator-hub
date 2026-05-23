import type { FaqItem } from "@/lib/structured-data";

export const invoiceGeneratorMeta = {
  title: "Invoice Generator | Create Professional Invoices Online | Profithub",
  description:
    "Create professional invoices online with Profithub. Add client details, services, totals, taxes, payment terms, and export invoices as PDF.",
};

export const invoiceGeneratorFaq: FaqItem[] = [
  {
    question: "Can I create invoices as PDF with Profithub?",
    answer:
      "Yes. Profithub works as an invoice PDF generator. After you add client details, line items, and payment terms, you can export a clean, professional invoice document ready to send.",
  },
  {
    question: "Is Profithub a good freelance invoice generator?",
    answer:
      "Yes. Profithub is built for freelancers and service businesses that need simple, professional invoices without spreadsheet formatting or manual layout work.",
  },
  {
    question: "What payment details should I put on an invoice?",
    answer:
      "Include your business name, client billing details, invoice number, issue date, due date, line items, totals, accepted payment methods, and any late-payment terms your client should know.",
  },
  {
    question: "Do I need special software to use this online invoice generator?",
    answer:
      "No. Profithub runs in the browser, so you can create invoices online from any device without installing desktop accounting software.",
  },
  {
    question: "Can I pair invoices with contracts and proposals?",
    answer:
      "Yes. Many Profithub users create a freelance contract first, deliver the work, then generate an invoice from the same client workflow. You can also link to related contract and template resources from the invoice generator page.",
  },
];

export const invoiceGeneratorRelatedLinks = [
  {
    href: "/freelance-contract-generator",
    title: "Freelance Contract Generator",
    description: "Create a contract with scope and payment terms before you send your first invoice.",
  },
  {
    href: "/free-invoice-template",
    title: "Free Invoice Template",
    description: "See what a professional invoice template should include before you generate your own.",
  },
  {
    href: "/invoice-number-example",
    title: "Invoice Number Example",
    description: "Learn how to format invoice numbers so your billing records stay organized.",
  },
];

export const invoiceGeneratorHowToSteps = [
  "Open the Profithub invoice generator and enter your business and client billing details.",
  "Add each service or line item, including quantity, rate, and description where needed.",
  "Review subtotals, taxes, and the final amount due so the invoice matches your agreed terms.",
  "Set the invoice date, due date, and payment instructions your client should follow.",
  "Export the finished invoice as a PDF and send it to your client for payment.",
];

export const invoiceGeneratorIncludeItems = [
  {
    title: "Your business details",
    body: "Include your name or company name, contact email, and any tax or registration details your clients expect on a professional invoice.",
  },
  {
    title: "Client details",
    body: "Add the client company or contact name, billing address, and email so finance teams can match the invoice to the right account.",
  },
  {
    title: "Invoice number and date",
    body: "Use a consistent invoice numbering system and issue date so you can track payments, follow up on overdue bills, and keep clean records.",
  },
  {
    title: "Services and line items",
    body: "List each deliverable, hour block, retainer period, or product with a clear description. Detailed line items reduce payment delays caused by confusion.",
  },
  {
    title: "Subtotals, taxes, and totals",
    body: "Show the math clearly. Clients and bookkeepers should be able to see subtotals, applicable taxes, discounts, and the final amount due at a glance.",
  },
  {
    title: "Payment terms and due date",
    body: "State when payment is due, accepted methods, currency, and any late fees or deposit rules that were agreed in your contract or proposal.",
  },
];
