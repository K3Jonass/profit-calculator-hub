import Link from "next/link";
import type { ProfithubWorkflowContext } from "@/lib/seo-pages/profithub-workflow";
import {
  PROFITHUB_WORKFLOW_TITLE,
  getProfithubWorkflowIntro,
  getProfithubWorkflowSteps,
} from "@/lib/seo-pages/profithub-workflow";

type ProfithubWorkflowSectionProps = {
  context?: ProfithubWorkflowContext;
  intro?: string;
  className?: string;
};

export default function ProfithubWorkflowSection({
  context = "home",
  intro,
  className = "mt-10",
}: ProfithubWorkflowSectionProps) {
  const steps = getProfithubWorkflowSteps(context);
  const sectionIntro = intro ?? getProfithubWorkflowIntro(context);

  return (
    <section aria-labelledby="profithub-workflow-heading" className={`surface-card rounded-2xl p-6 md:p-8 ${className}`}>
      <h2
        id="profithub-workflow-heading"
        className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl"
      >
        {PROFITHUB_WORKFLOW_TITLE}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">{sectionIntro}</p>

      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {steps.map((step, index) => (
          <li key={step.title}>
            <article className="flex h-full gap-4 rounded-2xl border border-slate-200/80 bg-white/70 p-5 dark:border-slate-700/80 dark:bg-slate-900/50">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700 dark:bg-blue-950/70 dark:text-blue-200"
              >
                {index + 1}
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
                {step.links && step.links.length > 0 ? (
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {step.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="animated-link font-medium text-blue-700 hover:underline dark:text-blue-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
