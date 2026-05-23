import type { Metadata } from "next";
import { headers } from "next/headers";
import ContractsSeoEnhancer from "@/components/contracts/ContractsSeoEnhancer";
import { contractGenerators } from "@/lib/contracts-generators";
import { buildPublicPageMetadata } from "@/lib/site-metadata";
import { getRequestLocale } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/contracts";
  const locale = await getRequestLocale();
  const currentTool = contractGenerators.find((item) => item.href === pathname);

  if (currentTool) {
    return buildPublicPageMetadata({
      title: currentTool.title,
      description: currentTool.description,
      path: pathname,
      locale,
    });
  }

  return buildPublicPageMetadata({
    title: "Free Contract Generators for Freelancers and Teams",
    description:
      "Generate practical contract templates for revenue share deals, freelance work, invoices, welcome docs, and client access workflows.",
    path: "/contracts",
    locale,
  });
}

export default function ContractsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ContractsSeoEnhancer />
    </>
  );
}
