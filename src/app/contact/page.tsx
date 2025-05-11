import { Metadata } from "next";
import ContactPage from "@/components/views/Contact";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Contact Aasaan Finance | Get in Touch";
  const description =
    "Have questions or need support? Reach out to Aasaan Finance for assistance and investment guidance.";
  const imageUrl = "/contact.png";
  const url = "https://www.aasaanfinance.com/contact";

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
          alt: "Contact Aasaan Finance - Get in Touch",
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

export default function Contact() {
  return <ContactPage />;
}
