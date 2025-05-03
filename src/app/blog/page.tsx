// src/app/blog/page.tsx
import { getAllPosts } from "@/lib/getPosts";
import BlogsPage from "@/components/views/ExploreBlog";

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogsPage posts={posts} />;
}
