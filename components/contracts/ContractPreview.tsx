import { parseContractText } from "@/lib/contract-formatting";

type ContractPreviewProps = {
  contractText: string;
  isLoading: boolean;
};

function splitParagraphIntoReadableBlocks(paragraph: string) {
  if (paragraph.length <= 200) {
    return [paragraph];
  }

  const sentences = paragraph.split(/(?<=[.!?])\s+/);
  const blocks: string[] = [];
  let currentBlock = "";

  for (const sentence of sentences) {
    const next = currentBlock ? `${currentBlock} ${sentence}` : sentence;
    if (next.length > 200 && currentBlock) {
      blocks.push(currentBlock);
      currentBlock = sentence;
    } else {
      currentBlock = next;
    }
  }

  if (currentBlock) {
    blocks.push(currentBlock);
  }

  return blocks;
}

function SignatureRows({ paragraphs }: { paragraphs: string[] }) {
  const cleaned = paragraphs
    .map((line) => line.replace(/^[-•]\s*/, "").trim())
    .filter(Boolean);

  return (
    <div className="space-y-4">
      {cleaned.map((line) => {
        if (!line.includes(":")) {
          return (
            <p key={line} className="ui-text text-sm leading-7">
              {line}
            </p>
          );
        }

        const [label, ...rest] = line.split(":");
        const value = rest.join(":").trim();
        const displayValue = value || "____________________________";

        return (
          <div
            key={line}
            className="grid grid-cols-[minmax(140px,220px)_1fr] items-center gap-4 border-b border-slate-200 pb-2 dark:border-slate-700/80"
          >
            <p className="ui-muted text-xs font-semibold uppercase tracking-[0.14em]">
              {label}
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-200">{displayValue}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function ContractPreview({
  contractText,
  isLoading,
}: ContractPreviewProps) {
  const parsed = contractText ? parseContractText(contractText) : null;

  return (
    <section className="surface-card rounded-3xl">
      <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-700/80">
        <h2 className="ui-heading text-xl font-semibold">
          Contract Preview
        </h2>
        <p className="ui-text mt-2 text-sm leading-6">
          Review the generated contract before downloading.
        </p>
      </div>

      <div className="p-6">
        {isLoading ? (
          <div className="space-y-4">
            <div className="h-6 w-48 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700" />
            <div className="h-4 w-full animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700" />
            <div className="h-4 w-11/12 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700" />
            <div className="h-4 w-10/12 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700" />
            <div className="h-4 w-full animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700" />
            <div className="h-4 w-9/12 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700" />
            <div className="h-4 w-8/12 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700" />
          </div>
        ) : contractText && parsed ? (
          <article className="rounded-2xl border border-slate-200 bg-white px-10 py-10 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] dark:border-slate-700/80 dark:bg-slate-950/80 dark:shadow-[0_1px_0_0_rgba(148,163,184,0.1)]">
            <div className="mb-10 flex items-center justify-between gap-3 border-b border-slate-200 pb-6 dark:border-slate-700/80">
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Generated
              </span>

              <span className="ui-muted text-xs">Premium document layout</span>
            </div>

            <div className="space-y-10 text-[15px] leading-8 text-slate-700 dark:text-slate-300">
              {parsed.subtitle ? (
                <p className="ui-muted text-center text-xs font-semibold uppercase tracking-[0.18em]">
                  {parsed.subtitle}
                </p>
              ) : null}

              <h3 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                {parsed.title}
              </h3>

              {parsed.dateLine ? (
                <p className="ui-muted text-center text-sm">{parsed.dateLine}</p>
              ) : null}

              {parsed.intro ? (
                <div className="space-y-4">
                  {splitParagraphIntoReadableBlocks(parsed.intro).map((block) => (
                    <p key={block} className="max-w-[75ch] text-slate-700 dark:text-slate-300">
                      {block}
                    </p>
                  ))}
                </div>
              ) : null}

              {parsed.sections.map((section) => {
                const isSignatureSection = /signatures/i.test(section.heading);
                return (
                  <section
                    key={section.heading}
                    className="space-y-4 border-t border-slate-200 pt-8 dark:border-slate-700/80"
                  >
                    <h4 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                      {section.heading}
                    </h4>

                    {isSignatureSection ? (
                      <SignatureRows paragraphs={section.paragraphs} />
                    ) : (
                      section.paragraphs.flatMap((paragraph) => {
                        const isBullet = paragraph.startsWith("- ");
                        const chunks = splitParagraphIntoReadableBlocks(
                          isBullet ? paragraph.slice(2) : paragraph
                        );

                        return chunks.map((chunk) => (
                          <p
                            key={`${section.heading}-${paragraph}-${chunk}`}
                            className={`max-w-[75ch] text-slate-700 dark:text-slate-300 ${
                              isBullet ? "pl-4" : ""
                            }`}
                          >
                            {isBullet ? "• " : ""}
                            {chunk}
                          </p>
                        ));
                      })
                    )}
                  </section>
                );
              })}
            </div>
          </article>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center dark:border-slate-700 dark:bg-slate-900/70">
            <div className="mx-auto max-w-md">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                No contract generated yet
              </h3>
              <p className="ui-text mt-2 text-sm leading-6">
                Fill in the form on the left and click{" "}
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  Generate Contract
                </span>{" "}
                to see your agreement preview here.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
