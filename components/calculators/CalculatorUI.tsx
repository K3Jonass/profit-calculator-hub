import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";

export function CalculatorShell({ children }: { children: ReactNode }) {
  return <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">{children}</main>;
}

export function CalculatorHero({
  badge = "Free Tool",
  title,
  description,
}: {
  badge?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="motion-fade-up mb-8 rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur-sm md:p-8 dark:border-slate-800 dark:bg-slate-900/70">
      <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-200">
        {badge}
      </span>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-slate-100">{title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8 dark:text-slate-300">{description}</p>
    </section>
  );
}

export function CalculatorTwoColumn({ left, right }: { left: ReactNode; right: ReactNode }) {
  return <section className="grid gap-6 lg:grid-cols-2">{left}{right}</section>;
}

export function CalculatorPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[1.75rem] border-soft surface-card p-5 md:p-6">
      <h2 className="mb-5 text-2xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
      {children}
    </div>
  );
}

export function CalculatorField({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block space-y-2.5">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <input
        {...props}
        className={`ui-input w-full rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-3 dark:text-slate-100 dark:placeholder:text-slate-500 ${props.className ?? ""}`.trim()}
      />
    </label>
  );
}

export function CalculatorSelectField({ label, children, ...props }: { label: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block space-y-2.5">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <select
        {...props}
        className={`ui-input w-full rounded-xl px-4 py-3 text-slate-900 focus:ring-3 dark:text-slate-100 ${props.className ?? ""}`.trim()}
      >
        {children}
      </select>
    </label>
  );
}

export function CalculatorResultsGrid({ children, columns = "md:grid-cols-2" }: { children: ReactNode; columns?: string }) {
  return <div className={`grid gap-4 ${columns}`}>{children}</div>;
}

export function MetricCard({ label, value, emphasize = false }: { label: string; value: string; emphasize?: boolean }) {
  return (
    <div className={`rounded-2xl border p-4 md:p-5 ${emphasize ? "border-blue-200 bg-blue-50/80 dark:border-blue-900 dark:bg-blue-950/30" : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900/80"}`}>
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{value}</p>
    </div>
  );
}

export function VerdictBanner({ label, toneClassName, value }: { label?: string; toneClassName: string; value: string }) {
  return (
    <div className={`rounded-2xl border p-4 ${toneClassName}`}>
      <p className="text-sm text-slate-600 dark:text-slate-300">{label ?? "Verdict"}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-5 text-sm dark:border-slate-700 dark:bg-slate-900/70">
      <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
      <p className="mt-1.5 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
