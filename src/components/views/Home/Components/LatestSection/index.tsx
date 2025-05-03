"use client";
import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";
import { BlogFrontmatter } from "@/lib/getPosts";

export default function LatestSectionContent({
  posts,
}: {
  posts: BlogFrontmatter[];
}) {
  return (
    <S.Section>
      <S.SectionTitleWrapper>
        <Link href="/latest" style={{ textDecoration: "none" }}>
          <S.SectionTitle>Latest</S.SectionTitle>
        </Link>
      </S.SectionTitleWrapper>
      <S.LatestContainer>
        {posts.map((post) => (
          <S.LatestItem key={post.slug}>
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={600}
              height={315}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          </S.LatestItem>
        ))}
      </S.LatestContainer>
    </S.Section>
  );
}
