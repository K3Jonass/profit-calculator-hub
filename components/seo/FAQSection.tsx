export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQSection({
  title = "Frequently Asked Questions",
  items,
}: {
  title?: string;
  items: FAQItem[];
}) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer text-base font-semibold text-slate-900">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
