import { getPost } from "@/lib/mdx";
import {
  BlogContainer,
  Section,
  SectionTitle,
  Paragraph,
  BlogImage,
  BulletItem,
  BulletList,
  Table,
  TableHead,
  TableRow,
  TableData,
} from "@/components/styled/Blog";

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: Params }) {
  const { slug } = await props.params;
  const { frontmatter } = await getPost(slug);
  const { title, description } = frontmatter;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://www.aasaanfinance.com/blog/${slug}`,
      images: [
        {
          url: `https://www.aasaanfinance.com/blog-imgs/${slug}/${slug}.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://www.aasaanfinance.com/blog-imgs/${slug}/${slug}.png`],
    },
  };
}

export default async function BlogPost(props: { params: Params }) {
  const { slug } = await props.params;
  const { content } = await getPost(slug, {
    BlogContainer,
    Section,
    SectionTitle,
    Paragraph,
    BlogImage,
    BulletItem,
    BulletList,
    Table,
    TableHead,
    TableRow,
    TableData,
  });

  return <BlogContainer>{content}</BlogContainer>;
}
