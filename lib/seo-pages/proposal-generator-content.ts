import type { FaqItem } from "@/lib/structured-data";

export const proposalGeneratorMeta = {
  title: "Proposal Generator for Freelancers & Agencies | Profithub",
  description:
    "Create client-ready project proposals online with Profithub. Build professional proposals for freelance, consulting, design, development, and agency services.",
};

export const proposalGeneratorFaq: FaqItem[] = [
  {
    question: "What is a proposal generator?",
    answer:
      "A proposal generator is an online tool that helps you turn project details into a structured client proposal. Instead of formatting a document from scratch, you add scope, pricing, timelines, and deliverables in a guided workflow.",
  },
  {
    question: "Can Profithub work as a freelance proposal generator?",
    answer:
      "Yes. Profithub helps freelancers build client-ready proposals for project work, retainers, and consulting engagements. You can outline services, pricing, and next steps in a format clients can review quickly.",
  },
  {
    question: "What is the difference between a proposal and a contract?",
    answer:
      "A proposal explains what you recommend, what it costs, and how the project will run. A contract confirms the legal terms after the client agrees. Many teams send a proposal first, then move to a contract and invoice once approved.",
  },
  {
    question: "Do agencies need a business proposal generator?",
    answer:
      "Agencies often send multiple proposals each month. A business proposal generator keeps scope, pricing, and deliverables consistent across team members so every pitch reflects your brand and process.",
  },
  {
    question: "Can I move from a proposal to billing with Profithub?",
    answer:
      "Yes. After a client approves your proposal, you can use Profithub to create a freelance contract and later generate a professional invoice from the same client workflow.",
  },
];

export const proposalGeneratorRelatedLinks = [
  {
    href: "/freelance-contract-generator",
    title: "Freelance Contract Generator",
    description: "Turn an approved proposal into a contract with scope, payment terms, and deadlines.",
  },
  {
    href: "/invoice-generator",
    title: "Invoice Generator",
    description: "Bill clients professionally after the proposal is accepted and work is delivered.",
  },
  {
    href: "/service-agreement-template",
    title: "Service Agreement Template",
    description: "Review what a service agreement should cover before you finalize client terms.",
  },
];

export const proposalGeneratorHowToSteps = [
  "Define the client problem, project goal, and recommended solution before you open the generator.",
  "Add client details, service scope, deliverables, timeline, and pricing options in Profithub.",
  "Include assumptions, revision limits, and what happens after approval so expectations stay clear.",
  "Review the proposal for clarity and remove jargon that could slow down client decisions.",
  "Send the proposal to your client, then follow up with a contract and invoice once they approve.",
];

export const proposalGeneratorIncludeItems = [
  {
    title: "Client and project overview",
    body: "Open with the client name, project summary, and the business outcome you are helping them achieve. A strong overview shows you understand the problem before you talk about price.",
  },
  {
    title: "Scope of work",
    body: "Explain what is included in the engagement and what is out of scope. Clear scope language helps prevent scope creep after the proposal is accepted.",
  },
  {
    title: "Deliverables and timeline",
    body: "List each output the client will receive and when they should expect it. Timelines make proposals feel concrete and easier to approve.",
  },
  {
    title: "Pricing and packages",
    body: "Present your fee structure, optional add-ons, and payment schedule. Many freelancers offer one recommended option plus an alternative to simplify decision-making.",
  },
  {
    title: "Process and communication",
    body: "Describe how you work, how feedback is handled, and what you need from the client to stay on schedule. Clients approve proposals faster when the working relationship feels defined.",
  },
  {
    title: "Next steps",
    body: "End with a clear call to action—approval method, kickoff date, deposit requirement, or contract signature—so the client knows exactly how to move forward.",
  },
];
