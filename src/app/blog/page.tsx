import { Metadata } from "next";
import { getAllPosts } from "@/lib/getPosts";
import BlogsPage from "@/components/views/ExploreBlog";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Aasaan Finance Blog | Investment Insights, Tips & Strategies";
  const description =
    "Explore the latest blog posts from Aasaan Finance on investing, finance, and wealth-building strategies tailored for Pakistanis.";
  const imageUrl = "/blog.png";
  const url = "https://www.aasaanfinance.com/blog";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Aasaan Finance Blog - Investment Insights & Strategies",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogsPage posts={posts} />;
}
