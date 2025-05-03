import BlogSection from "@/components/views/BlogSection";
import { getPostsByCategory } from "@/lib/getPosts";

export default async function DynamicCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = getPostsByCategory(params.category);
  return <BlogSection category={params.category} posts={posts} />;
}

export async function generateStaticParams() {
  return [
    "stocks",
    "crypto",
    "mutual-funds",
    "bonds",
    "gold",
    "property",
    "forex",
    "foreign-investment",
  ].map((category) => ({ category }));
}
