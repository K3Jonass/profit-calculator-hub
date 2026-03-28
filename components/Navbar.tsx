import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-bold text-white">
            PH
          </span>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            ProfitHub
          </span>
        </Link>

        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
          <Link href="/" className="transition hover:text-slate-900">
            Home
          </Link>
          <Link href="/blog" className="transition hover:text-slate-900">
            Blog
          </Link>
          <Link href="/about" className="transition hover:text-slate-900">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-slate-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}