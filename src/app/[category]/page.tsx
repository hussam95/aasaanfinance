import { Metadata } from "next";
import BlogSection from "@/components/views/BlogSection";
import { getPostsByCategory } from "@/lib/getPosts";
import type { BlogFrontmatter } from "@/lib/getPosts";

type Params = Promise<{ category: string }>;

const CATEGORY_IMAGES: Record<string, string> = {
  stocks: "blog-imgs/what-are-stocks/what-are-stocks.png",
  crypto: "blog-imgs/what-is-crypto/what-is-crypto.png",
  "mutual-funds": "blog-imgs/what-are-mutual-funds/what-are-mutual-funds.png",
};

const DEFAULT_IMAGE = "/aasaanFinanceBranding.png";

const CATEGORY_TITLES: Record<string, string> = {
  stocks: "Stocks",
  crypto: "Cryptocurrency",
  "mutual-funds": "Mutual Funds",
  bonds: "Bonds",
  gold: "Gold",
  property: "Property",
  forex: "Forex",
  "foreign-investment": "Foreign Investment",
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  stocks:
    "Learn all about investing in stocks and how to grow your wealth with Aasaan Finance.",
  crypto:
    "Discover the world of cryptocurrency investments and trading strategies with Aasaan Finance.",
  "mutual-funds":
    "Explore mutual funds and how they can help you diversify your investment portfolio.",
  bonds:
    "Understand how bonds work and how they can provide stable returns for your investments.",
  gold: "Learn about investing in gold and its role as a secure asset in your portfolio.",
  property:
    "Explore real estate investments and how property can build wealth over time.",
  forex:
    "Learn about foreign exchange investments and how to trade currencies effectively.",
  "foreign-investment":
    "Discover opportunities in international investments and global markets.",
};

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { category } = await props.params;

  const titleBase = "Aasaan Finance | ";
  const title = CATEGORY_TITLES[category]
    ? `${titleBase}${CATEGORY_TITLES[category]}`
    : `${titleBase}Investing`;

  const description =
    CATEGORY_DESCRIPTIONS[category] ||
    "Explore investment opportunities with Aasaan Finance.";

  const imageUrl = CATEGORY_IMAGES[category]
    ? `/${CATEGORY_IMAGES[category]}`
    : DEFAULT_IMAGE;

  const url = `https://www.aasaanfinance.com/${category}`;

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
          alt: `${title} - Aasaan Finance`,
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

export async function generateStaticParams() {
  return [
    "stocks",
    "crypto",
    "mutual-funds",
    "bonds",
    "gold",
    "property",
    "forex",
    "foreign-investment",
  ].map((category) => ({ category }));
}

export default async function DynamicCategoryPage(props: { params: Params }) {
  const { category } = await props.params;
  const posts: BlogFrontmatter[] = await getPostsByCategory(category);
  return <BlogSection category={category} posts={posts} />;
}
