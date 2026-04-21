export default function FormulaExplanationBlock({
  formula,
  explanation,
}: {
  formula: string;
  explanation: string;
}) {
  return (
    <section className="mt-14 surface-card rounded-2xl p-6">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Formula</h2>
      <p className="mt-3 rounded-xl bg-slate-100 px-4 py-3 font-mono text-sm text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        {formula}
      </p>
      <p className="mt-3 ui-text text-sm leading-7">{explanation}</p>
    </section>
  );
}
