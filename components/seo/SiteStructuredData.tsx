import { headers } from "next/headers";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { isPrivatePath } from "@/lib/site-metadata";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/structured-data";

export default async function SiteStructuredData() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  if (isPrivatePath(pathname)) {
    return null;
  }

  return (
    <>
      <JsonLdScript data={buildOrganizationSchema()} />
      <JsonLdScript data={buildWebSiteSchema()} />
    </>
  );
}
