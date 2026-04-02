import Link from "next/link";

const links = [
  { href: "/workspace", label: "Overview" },
  { href: "/workspace/clients", label: "Clients" },
  { href: "/workspace/projects", label: "Projects" },
];

export default function WorkspaceNav() {
  return (
    <nav className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
