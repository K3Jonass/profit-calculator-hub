export default function FormulaExplanationBlock({
  formula,
  explanation,
}: {
  formula: string;
  explanation: string;
}) {
  return (
    <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Formula</h2>
      <p className="mt-3 rounded-xl bg-slate-100 px-4 py-3 font-mono text-sm text-slate-900">
        {formula}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{explanation}</p>
    </section>
  );
}
