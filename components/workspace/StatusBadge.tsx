interface StatusBadgeProps {
  status: string;
}

const colorMap: Record<string, string> = {
  planning: "bg-slate-100 text-slate-700",
  active: "bg-emerald-100 text-emerald-700",
  waiting: "bg-amber-100 text-amber-700",
  completed: "bg-blue-100 text-blue-700",
  pending: "bg-slate-100 text-slate-700",
  in_progress: "bg-indigo-100 text-indigo-700",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
        colorMap[status] ?? "bg-slate-100 text-slate-700"
      }`}
    >
      {status.replace("_", " ")}
    </span>
  );
}
