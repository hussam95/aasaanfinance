import { Metadata } from "next";
import { getAllPostsSortedByDate } from "@/lib/getPosts";
import LatestSectionContent from "@/components/views/Home/Components/LatestSection";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Latest Posts & Updates | Aasaan Finance";
  const description =
    "Stay updated with the latest investment insights, market trends, and financial tips from Aasaan Finance.";
  const imageUrl = "/latest.png";
  const url = "https://www.aasaanfinance.com/latest";

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
          alt: "Latest Posts - Aasaan Finance",
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

export default async function Page() {
  const latestPosts = getAllPostsSortedByDate();
  return <LatestSectionContent posts={latestPosts} />;
}
