export default function CalculatorIntroBlock({
  title,
  answer,
}: {
  title: string;
  answer: string;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
        Quick answer: {title}
      </p>
      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">{answer}</p>
    </section>
  );
}
