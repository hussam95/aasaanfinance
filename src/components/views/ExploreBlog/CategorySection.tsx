"use client";
import Image from "next/image";
import Link from "next/link";
import { BlogFrontmatter } from "@/lib/getPosts";
import * as S from "./styles";

interface Props {
  category: string;
  posts: BlogFrontmatter[];
}

export default function CategorySection({ category, posts }: Props) {
  const title = category
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <S.CategorySection>
      <S.CategoryTitle>{title}</S.CategoryTitle>
      <S.TilesGrid>
        {posts.map((post) => (
          <S.Tile key={post.slug}>
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={600}
              height={315}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          </S.Tile>
        ))}
      </S.TilesGrid>
    </S.CategorySection>
  );
}
