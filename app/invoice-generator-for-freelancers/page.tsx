import ProfessionSeoPage, { generateProfessionPageMetadata } from "@/components/seo/ProfessionSeoPage";

const path = "/invoice-generator-for-freelancers" as const;

export async function generateMetadata() {
  return generateProfessionPageMetadata(path);
}

export default function Page() {
  return <ProfessionSeoPage path={path} />;
}
