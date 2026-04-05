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
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Related Articles</h2>
      <p className="mt-2 text-slate-600">
        Learn the strategy behind your numbers with these in-depth guides.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {related.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {post.category}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
