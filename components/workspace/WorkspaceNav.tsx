"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/workspace", label: "Overview" },
  { href: "/workspace/clients", label: "Clients" },
  { href: "/workspace/projects", label: "Projects" },
];

export default function WorkspaceNav() {
  const pathname = usePathname();

  return (
    <nav className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-soft backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-slate-900 text-white dark:bg-blue-600"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
