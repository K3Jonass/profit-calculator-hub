import OpenAI from "openai";
import {
  CONTRACT_SYSTEM_PROMPT,
  buildRevenueSharePrompt,
  buildFreelancerPrompt,
} from "@/lib/contract-prompts";
import type {
  RevenueShareFormValues,
  FreelancerFormValues,
} from "@/lib/contract-types";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateRevenueShareContract(
  values: RevenueShareFormValues
): Promise<string> {
  const userPrompt = buildRevenueSharePrompt(values);

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