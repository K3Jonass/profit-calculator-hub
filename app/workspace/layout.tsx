import type { Metadata } from "next";
import WorkspaceNav from "@/components/workspace/WorkspaceNav";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-soft backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/65">
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-200">
            Workspace
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-2">
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Workspace</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">Public workspace • no login required</p>
          </div>
        </div>
        <WorkspaceNav />
        {children}
      </div>
    </main>
  );
}
