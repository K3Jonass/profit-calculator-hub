import ProfessionSeoPage, { generateProfessionPageMetadata } from "@/components/seo/ProfessionSeoPage";

const path = "/invoice-generator-for-marketing-agencies" as const;

export async function generateMetadata() {
  return generateProfessionPageMetadata(path);
}

export default function Page() {
  return <ProfessionSeoPage path={path} />;
}
