import Header from "@/components/globals/Header";
import Footer from "@/components/globals/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

export async function generateMetadata() {
  const defaultTitle = "Aasaan Finance | Simplifying Investments in Pakistan";
  const defaultDescription =
    "Explore the best investment opportunities in Pakistan with Aasaan Finance.";
  const defaultImage =
    "https://www.aasaanfinance.com/aasaanFinanceBranding.png";
  const defaultUrl = "https://www.aasaanfinance.com/";

  return {
    title: defaultTitle,
    description: defaultDescription,
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      type: "website",
      url: defaultUrl,
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: "Aasaan Finance - Simplifying Investments in Pakistan",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: [defaultImage],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <ThemeProvider theme={theme}>
          <Header />

          <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {children}
          </main>

          <Footer />
        </ThemeProvider>

        <style>
          {`
            *, *::before, *::after {
              box-sizing: border-box;
            }
          `}
        </style>
      </body>
    </html>
  );
}
