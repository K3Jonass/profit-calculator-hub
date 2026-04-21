import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export default function RelatedArticles({
  articleHrefs,
}: {
  articleHrefs: string[];
}) {
  const related = articleHrefs
    .map((href) => blogPosts.find((post) => post.href === href))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Related Articles</h2>
      <p className="mt-2 ui-text">
        Learn the strategy behind your numbers with these in-depth guides.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {related.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="surface-card rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
              {post.category}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{post.title}</h3>
            <p className="mt-2 ui-text text-sm">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
