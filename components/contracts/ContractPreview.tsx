type ContractPreviewProps = {
  contractText: string;
  isLoading: boolean;
};

export default function ContractPreview({
  contractText,
  isLoading,
}: ContractPreviewProps) {
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
        ) : contractText ? (
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Generated
              </span>

              <span className="text-xs text-slate-500">
                Template preview
              </span>
            </div>

            <div className="prose prose-slate max-w-none whitespace-pre-wrap text-sm leading-7">
              {contractText}
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