import OpenAI from "openai";
import {
  CONTRACT_SYSTEM_PROMPT,
  buildRevenueSharePrompt,
  buildFreelancerPrompt,
  buildInvoicePrompt,
  buildWelcomeDocPrompt,
} from "@/lib/contract-prompts";
import type {
  RevenueShareFormValues,
  FreelancerFormValues,
  InvoiceFormValues,
  WelcomeDocFormValues,
} from "@/lib/contract-types";

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY missing");
  }

  return new OpenAI({ apiKey });
}

export async function generateRevenueShareContract(
  values: RevenueShareFormValues
): Promise<string> {
  const userPrompt = buildRevenueSharePrompt(values);
  const openai = getOpenAIClient();

  const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: [
      {
        role: "system",
        content: [
          {
            type: "input_text",
            text: CONTRACT_SYSTEM_PROMPT,
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: userPrompt,
          },
        ],
      },
    ],
  });

  const contractText = response.output_text?.trim();

  if (!contractText) {
    throw new Error("AI did not return any contract text.");
  }

  return contractText;
}

export async function generateFreelancerContract(
  values: FreelancerFormValues
): Promise<string> {
  const userPrompt = buildFreelancerPrompt(values);
  const openai = getOpenAIClient();

  const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: [
      {
        role: "system",
        content: [
          {
            type: "input_text",
            text: CONTRACT_SYSTEM_PROMPT,
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: userPrompt,
          },
        ],
      },
    ],
  });

  const contractText = response.output_text?.trim();

  if (!contractText) {
    throw new Error("AI did not return any contract text.");
  }

  return contractText;
}

export async function generateInvoiceContract(
  values: InvoiceFormValues
): Promise<string> {
  const userPrompt = buildInvoicePrompt(values);
  const openai = getOpenAIClient();

  const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: [
      {
        role: "system",
        content: [
          {
            type: "input_text",
            text: CONTRACT_SYSTEM_PROMPT,
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: userPrompt,
          },
        ],
      },
    ],
  });

  const contractText = response.output_text?.trim();

  if (!contractText) {
    throw new Error("AI did not return any contract text.");
  }

  return contractText;
}


export async function generateWelcomeDoc(
  values: WelcomeDocFormValues
): Promise<string> {
  const userPrompt = buildWelcomeDocPrompt(values);
  const openai = getOpenAIClient();

  const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: [
      {
        role: "system",
        content: [
          {
            type: "input_text",
            text: CONTRACT_SYSTEM_PROMPT,
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: userPrompt,
          },
        ],
      },
    ],
  });

  const contractText = response.output_text?.trim();

  if (!contractText) {
    throw new Error("AI did not return any contract text.");
  }

  return contractText;
}
