import { Metadata } from "next";
import TermsPage from "@/components/views/Terms";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Terms & Conditions | Aasaan Finance";
  const description = "Review the terms and conditions of Aasaan Finance to understand the guidelines and policies governing our platform.";
  const imageUrl = "/terms.png";
  const url = "https://www.aasaanfinance.com/terms";

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
          alt: "Terms & Conditions - Aasaan Finance",
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

export default function Terms() {
  return <TermsPage />;
}
