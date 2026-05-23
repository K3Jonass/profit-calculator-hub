import ProfessionSeoPage, { generateProfessionPageMetadata } from "@/components/seo/ProfessionSeoPage";

const path = "/contract-template-for-consultants" as const;

export async function generateMetadata() {
  return generateProfessionPageMetadata(path);
}

export default function Page() {
  return <ProfessionSeoPage path={path} />;
}
