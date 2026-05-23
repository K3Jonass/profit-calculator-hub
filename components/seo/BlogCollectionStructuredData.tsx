import JsonLdScript from "@/components/seo/JsonLdScript";
import { getBlogPosts } from "@/lib/blog-posts";
import type { AppLocale } from "@/lib/i18n/config";
import { APP_BASE_URL } from "@/lib/public-urls";
import { buildCanonicalUrl } from "@/lib/site-metadata";

export default function BlogCollectionStructuredData({ locale }: { locale: AppLocale }) {
  const posts = getBlogPosts(locale);
  const blogUrl = buildCanonicalUrl("/blog", locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Profithub Blog",
    description: "Practical guides on pricing, profitability, ecommerce, SaaS, and freelance business decisions.",
    url: blogUrl,
    publisher: {
      "@type": "Organization",
      name: "Profithub",
      url: APP_BASE_URL,
    },
    blogPost: posts.slice(0, 20).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: buildCanonicalUrl(post.href, locale),
    })),
  };

  return <JsonLdScript data={schema} />;
}
