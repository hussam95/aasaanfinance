import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";
import { BlogFrontmatter } from "@/lib/getPosts";

interface Props {
  category: string;
  posts: BlogFrontmatter[];
}

export default function BlogSection({ category, posts }: Props) {
  const prettyTitle =
    category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ");

  const totalTiles = 10;
  const upcomingCount = totalTiles - posts.length;

  return (
    <S.PageWrapper>
      <S.TitleWrapper>
        <S.PageTitle>All About {prettyTitle}</S.PageTitle>
      </S.TitleWrapper>
      <S.CardsWrapper>
        {posts.map((post, idx) => (
          <S.Card key={`post-${idx}`}>
            <S.ThumbnailWrapper>
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={300}
                height={180}
              />
            </S.ThumbnailWrapper>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          </S.Card>
        ))}

        {[...Array(upcomingCount)].map((_, idx) => (
          <S.UpcomingCard key={`upcoming-${idx}`}>
            <S.ThumbnailWrapper>
              <Image
                src="/comingSoon.png"
                alt="Coming Soon"
                width={300}
                height={180}
              />
            </S.ThumbnailWrapper>
            <h3>New Post Coming Soon</h3>
            <p>Stay tuned for more insights on {prettyTitle.toLowerCase()}!</p>
            <span className="coming-soon-label">Coming Soon</span>
          </S.UpcomingCard>
        ))}
      </S.CardsWrapper>
    </S.PageWrapper>
  );
}
