import { getPost } from "@/lib/mdx";
import {
  BlogContainer,
  Section,
  SectionTitle,
  Paragraph,
  BlogImage
} from "@/components/styled/Blog";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { frontmatter } = await getPost(params.slug);
  const { title, description } = frontmatter;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://aasaanfinance.com/blog/${params.slug}`,
      images: [
        {
          url: `https://aasaanfinance.com/${params.slug}.png`, // fallback or generated
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
      images: [`https://aasaanfinance.com/${params.slug}.png`],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { content } = await getPost(params.slug, {
    BlogContainer,
    Section,
    SectionTitle,
    Paragraph,
    BlogImage,
  });

  return (
    <BlogContainer>
      {content}
    </BlogContainer>
  );
}
