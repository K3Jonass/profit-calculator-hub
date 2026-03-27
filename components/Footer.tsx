import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-bold text-white">
                PH
              </span>
              <span className="text-lg font-bold text-slate-900">ProfitHub</span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Free online calculators for ecommerce sellers, SaaS founders, and
              freelancers who want clearer numbers and better decisions.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">
              Navigation
            </h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <Link href="/about" className="hover:text-slate-900">
                About
              </Link>
              <Link href="/contact" className="hover:text-slate-900">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">
              Legal
            </h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/privacy-policy" className="hover:text-slate-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-900">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} ProfitHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}