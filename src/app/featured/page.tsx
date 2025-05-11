import { Metadata } from "next";
import FeaturedPage from "@/components/views/Featured";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Featured Content | Aasaan Finance";
  const description =
    "Explore our top investment guides, financial insights, and exclusive content curated for Pakistani investors.";
  const imageUrl = "/featured.png";
  const url = "https://www.aasaanfinance.com/featured";

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
          alt: "Featured Content - Aasaan Finance",
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

export default function Featured() {
  return <FeaturedPage />;
}
