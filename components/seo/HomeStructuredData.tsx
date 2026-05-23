import JsonLdScript from "@/components/seo/JsonLdScript";
import {
  HOME_FAQ,
  buildFaqPageSchema,
  buildHomeSoftwareApplicationSchema,
} from "@/lib/structured-data";

export default function HomeStructuredData() {
  return (
    <>
      <JsonLdScript data={buildHomeSoftwareApplicationSchema()} />
      <JsonLdScript data={buildFaqPageSchema(HOME_FAQ)} />
    </>
  );
}
