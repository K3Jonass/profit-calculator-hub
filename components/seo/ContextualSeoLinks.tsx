import Link from "next/link";
import type { SeoResourceLink } from "@/lib/seo-internal-links";

export default function ContextualSeoLinks({
  links,
  prefix = "Related resources:",
}: {
  links: SeoResourceLink[];
  prefix?: string;
}) {
  if (links.length === 0) {
    return null;
  }

  return (
    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
      <span className="font-medium text-slate-700 dark:text-slate-200">{prefix}</span>{" "}
      {links.map((link, index) => (
        <span key={link.href}>
          <Link href={link.href} className="animated-link font-medium text-blue-700 hover:underline dark:text-blue-300">
            {link.label}
          </Link>
          {index < links.length - 1 ? ", " : "."}
        </span>
      ))}
    </p>
  );
}
