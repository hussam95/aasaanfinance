import BlogSection from "@/components/views/BlogSection";
import { getPostsByCategory } from "@/lib/getPosts";
import type { BlogFrontmatter } from "@/lib/getPosts";

type Params = Promise<{ category: string }>;

export default async function DynamicCategoryPage(props: { params: Params }) {
  const { category } = await props.params;
  const posts: BlogFrontmatter[] = await getPostsByCategory(category);
  return <BlogSection category={category} posts={posts} />;
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
