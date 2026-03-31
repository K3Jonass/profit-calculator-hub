type ContractPaywallProps = {
  hasContract: boolean;
  isUnlocked: boolean;
  onUnlock: () => void;
};

export default function ContractPaywall({
  hasContract,
  isUnlocked,
  onUnlock,
}: ContractPaywallProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Download Access
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Preview first, then unlock the document download.
        </p>
      </div>

      <div className="p-6">
        {!hasContract ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center">
            <p className="text-sm text-slate-600">
              Generate a contract first to continue.
            </p>
          </div>
        ) : isUnlocked ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Access Unlocked
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  Your contract is ready
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  In the next step we will connect real payment and downloadable
                  document export. For now, this simulates the unlocked state.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Download Contract
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
                  Locked
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  Unlock this contract for $1
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  This is the MVP lock state. Real payment will be connected
                  next. For now, use the button below to simulate access.
                </p>
              </div>

              <button
                type="button"
                onClick={onUnlock}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Simulate Unlock
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}