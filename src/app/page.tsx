import { getAllPostsSortedByDate } from "@/lib/getPosts";
import HomePage from "@/components/views/Home";

export async function generateMetadata() {
  const title = "Aasaan Finance | Simplifying Investments in Pakistan";
  const description =
    "Your go-to platform for easy-to-understand financial content in Pakistan. Explore stocks, mutual funds, crypto, and more.";
  const imageUrl = "https://www.aasaanfinance.com/aasaanFinanceBranding.png";
  const url = "https://www.aasaanfinance.com/";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Aasaan Finance - Simplifying Investments in Pakistan",
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

export default function Home() {
  const latestPosts = getAllPostsSortedByDate().slice(0, 2);
  return <HomePage latestPosts={latestPosts} />;
}
