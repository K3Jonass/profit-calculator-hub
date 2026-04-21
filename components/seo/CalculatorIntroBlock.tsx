export default function CalculatorIntroBlock({
  title,
  answer,
}: {
  title: string;
  answer: string;
}) {
  return (
    <section className="surface-subtle rounded-2xl p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
        Quick answer: {title}
      </p>
      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">{answer}</p>
    </section>
  );
}
