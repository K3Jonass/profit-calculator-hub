"use client";

import { useId } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import type { ThemeMode } from "@/lib/theme";

const OPTIONS: Array<{ value: ThemeMode; label: string }> = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

export default function ThemeSelector() {
  const id = useId();
  const { mode, resolvedTheme, setMode } = useTheme();

  return (
    <div className="inline-flex items-center gap-2">
      <label className="sr-only" htmlFor={id}>Theme</label>
      <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400 lg:inline">
        Theme
      </span>
      <select
        id={id}
        aria-label="Choose theme"
        value={mode}
        onChange={(event) => setMode(event.target.value as ThemeMode)}
        className="ui-input rounded-lg px-2 py-1 text-xs font-medium shadow-sm"
      >
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <span className="hidden text-[11px] text-slate-500 dark:text-slate-400 md:inline" aria-live="polite">
        Active: {resolvedTheme}
      </span>
    </div>
  );
}
