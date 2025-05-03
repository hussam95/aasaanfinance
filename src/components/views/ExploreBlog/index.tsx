"use client";
import { BlogFrontmatter } from "@/lib/getPosts";
import * as S from "./styles";
import CategorySection from "./CategorySection";

interface Props {
  posts: BlogFrontmatter[];
}

const ORDERED_CATEGORIES = [
  "stocks",
  "crypto",
  "mutual-funds",
  "gold",
  "bonds",
  "property",
  "foreign-investment",
  "forex",
];

export default function BlogsPage({ posts }: Props) {
  return (
    <S.PageWrapper>
      {ORDERED_CATEGORIES.map((cat) => {
        const catPosts = posts.filter((post) =>
          post.tags?.map((t) => t.toLowerCase()).includes(cat)
        );
        if (!catPosts.length) return null;

        return <CategorySection key={cat} category={cat} posts={catPosts} />;
      })}
    </S.PageWrapper>
  );
}
