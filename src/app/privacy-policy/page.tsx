import { Metadata } from "next";
import PrivacyPolicyPage from "@/components/views/PrivacyPolicy";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Privacy Policy | Aasaan Finance";
  const description = "Read the privacy policy of Aasaan Finance to understand how we handle your data and ensure your privacy.";
  const imageUrl = "/privacy.png";
  const url = "https://www.aasaanfinance.com/privacy";

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
          alt: "Privacy Policy - Aasaan Finance",
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

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
