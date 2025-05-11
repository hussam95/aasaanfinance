import { Metadata } from "next";
import CategoriesPage from "@/components/views/Categories";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Investment Categories | Aasaan Finance";
  const description =
    "Explore diverse investment categories including stocks, crypto, mutual funds, and more tailored for Pakistani investors.";
  const imageUrl = "/categories.png";
  const url = "https://www.aasaanfinance.com/categories";

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
          alt: "Investment Categories - Aasaan Finance",
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

export default function Categories() {
  return <CategoriesPage />;
}
