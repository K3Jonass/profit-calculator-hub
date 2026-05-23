import JsonLdScript from "@/components/seo/JsonLdScript";
import {
  HOME_FAQ,
  SITE_URL,
  buildFaqPageSchema,
  buildHomeSoftwareApplicationSchema,
  buildHowToSchema,
} from "@/lib/structured-data";
import {
  PROFITHUB_WORKFLOW_TITLE,
  getProfithubWorkflowIntro,
  getProfithubWorkflowSchemaSteps,
} from "@/lib/seo-pages/profithub-workflow";

export default function HomeStructuredData() {
  const workflowIntro = getProfithubWorkflowIntro("home");

  return (
    <>
      <JsonLdScript data={buildHomeSoftwareApplicationSchema()} />
      <JsonLdScript data={buildFaqPageSchema(HOME_FAQ)} />
      <JsonLdScript
        data={buildHowToSchema({
          name: PROFITHUB_WORKFLOW_TITLE,
          description: workflowIntro,
          url: `${SITE_URL}/`,
          steps: getProfithubWorkflowSchemaSteps("home"),
        })}
      />
    </>
  );
}
