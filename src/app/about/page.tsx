import { Metadata } from "next";
import AboutPage from "@/components/views/About";

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "About Aasaan Finance | Simplifying Investments for Every Pakistani";
  const description =
    "Learn about Aasaan Finance, our mission to make investing easier, and how we empower Pakistanis to grow wealth confidently.";
  const imageUrl = "/about.png";
  const url = "https://www.aasaanfinance.com/about";

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
          alt: "About Aasaan Finance - Empowering Pakistanis to Invest Smartly",
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

export default function Page() {
  return <AboutPage />;
}
