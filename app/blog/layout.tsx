import BlogArticleEnhancer from "@/components/blog/BlogArticleEnhancer";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <BlogArticleEnhancer>{children}</BlogArticleEnhancer>;
}
