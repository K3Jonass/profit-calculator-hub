import Link from "next/link";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600 dark:text-slate-300">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.name}-${index}`} className="inline-flex items-center gap-2">
              {index > 0 && <span className="text-slate-400 dark:text-slate-500">/</span>}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-slate-900 hover:underline dark:hover:text-slate-100">
                  {item.name}
                </Link>
              ) : (
                <span className={isLast ? "font-medium text-slate-900 dark:text-slate-100" : ""}>{item.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
