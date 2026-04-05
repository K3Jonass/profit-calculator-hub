import { parseContractText } from "@/lib/contract-formatting";

type ContractPreviewProps = {
  contractText: string;
  isLoading: boolean;
};

export default function ContractPreview({
  contractText,
  isLoading,
}: ContractPreviewProps) {
  const parsed = contractText ? parseContractText(contractText) : null;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Contract Preview
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Review the generated contract before unlocking download.
        </p>
      </div>

      <div className="p-6">
        {isLoading ? (
          <div className="space-y-4">
            <div className="h-6 w-48 animate-pulse rounded-xl bg-slate-200" />
            <div className="h-4 w-full animate-pulse rounded-xl bg-slate-200" />
            <div className="h-4 w-11/12 animate-pulse rounded-xl bg-slate-200" />
            <div className="h-4 w-10/12 animate-pulse rounded-xl bg-slate-200" />
            <div className="h-4 w-full animate-pulse rounded-xl bg-slate-200" />
            <div className="h-4 w-9/12 animate-pulse rounded-xl bg-slate-200" />
            <div className="h-4 w-8/12 animate-pulse rounded-xl bg-slate-200" />
          </div>
        ) : contractText && parsed ? (
          <article className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="mb-8 flex items-center justify-between gap-3 border-b border-slate-200 pb-5">
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Generated
              </span>

              <span className="text-xs text-slate-500">Premium document layout</span>
            </div>

            <div className="space-y-7 text-[15px] leading-7 text-slate-700">
              {parsed.subtitle ? (
                <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {parsed.subtitle}
                </p>
              ) : null}

              <h3 className="text-center text-2xl font-bold tracking-tight text-slate-900">
                {parsed.title}
              </h3>

              {parsed.dateLine ? (
                <p className="text-center text-sm text-slate-500">{parsed.dateLine}</p>
              ) : null}

              {parsed.intro ? <p className="text-slate-700">{parsed.intro}</p> : null}

              {parsed.sections.map((section) => (
                <section
                  key={section.heading}
                  className="space-y-3 border-t border-slate-200 pt-6"
                >
                  <h4 className="text-base font-semibold text-slate-900">
                    {section.heading}
                  </h4>

                  {section.paragraphs.map((paragraph) => {
                    const isBullet = paragraph.startsWith("- ");
                    return isBullet ? (
                      <p key={`${section.heading}-${paragraph}`} className="pl-4 text-slate-700">
                        • {paragraph.slice(2)}
                      </p>
                    ) : (
                      <p key={`${section.heading}-${paragraph}`} className="text-slate-700">
                        {paragraph}
                      </p>
                    );
                  })}
                </section>
              ))}

              {parsed.trailingNotes.map((note) => (
                <p
                  key={note}
                  className="border-t border-slate-200 pt-6 text-sm text-slate-500"
                >
                  {note}
                </p>
              ))}
            </div>
          </article>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
            <div className="mx-auto max-w-md">
              <h3 className="text-lg font-semibold text-slate-900">
                No contract generated yet
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fill in the form on the left and click{" "}
                <span className="font-medium text-slate-900">
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
