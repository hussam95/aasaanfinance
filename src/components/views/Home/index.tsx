"use client";

import { Typography, TextField } from "@mui/material";
import * as S from "./styles";
import { featuredBlogs } from "../Featured";
import theme from "@/theme";
import Link from "next/link";
import LatestSectionContent from "./Components/LatestSection";
import { BlogFrontmatter } from "@/lib/getPosts";

interface Props {
  latestPosts: BlogFrontmatter[];
}

const HomePage = ({ latestPosts }: Props) => {
  return (
    <S.MainWrapper>
      {/* Hero Section */}
      <S.HeroSection>
        <Typography variant="h3" align="center">
          Investing Made Simple for Every Pakistani
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
          Learn Stocks, Crypto, Gold, Mutual Funds — All in One Place.
        </Typography>
        <Link href="/blog" style={{ textDecoration: "none" }}>
          <S.HeroButton variant="contained" color="primary" sx={{ mt: 4 }}>
            Explore Blog
          </S.HeroButton>
        </Link>
      </S.HeroSection>

      {/* Featured Insights */}
      <S.Section>
        <Link href="/featured" style={{ textDecoration: "none" }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: theme.palette.primary.main,
              position: "relative",
              display: "inline-block",
              mb: 2,
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -2,
                left: 0,
                width: "100%",
                height: "3px",
                backgroundImage: `linear-gradient(270deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundSize: "200% auto",
                animation: "gradientMove 2s linear infinite",
                borderRadius: "4px",
              },
              "@keyframes gradientMove": {
                "0%": {
                  backgroundPosition: "0% 50%",
                },
                "100%": {
                  backgroundPosition: "100% 50%",
                },
              },
            }}
          >
            Featured
          </Typography>
        </Link>

        <S.CardsContainer>
          {featuredBlogs.map((blog, index) => (
            <S.Card key={index}>
              <Typography variant="h6" gutterBottom>
                {blog.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {blog.description}
              </Typography>
              <S.ReadMoreButton
                variant="contained"
                color="primary"
                href={blog.link}
              >
                Read More
              </S.ReadMoreButton>
            </S.Card>
          ))}
        </S.CardsContainer>
      </S.Section>

      {/* Browse by Category */}
      <S.Section>
        <Link href="/categories" style={{ textDecoration: "none" }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: theme.palette.primary.main,
              position: "relative",
              display: "inline-block",
              mb: 6,
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -6,
                left: 0,
                width: "100%",
                height: "3px",
                backgroundImage: `linear-gradient(270deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundSize: "200% auto",
                animation: "gradientMove 2s linear infinite",
                borderRadius: "4px",
              },
              "@keyframes gradientMove": {
                "0%": {
                  backgroundPosition: "0% 50%",
                },
                "100%": {
                  backgroundPosition: "100% 50%",
                },
              },
            }}
          >
            Categories
          </Typography>
        </Link>
        <S.CategoriesContainer>
          {[
            "stocks",
            "crypto",
            "mutual-funds",
            "bonds",
            "gold",
            "property",
            "forex",
            "foreign-investment",
          ].map((cat) => (
            <Link key={cat} href={`/${cat}`} style={{ textDecoration: "none" }}>
              <S.Category>
                {cat.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </S.Category>
            </Link>
          ))}
        </S.CategoriesContainer>
      </S.Section>

      {/* Latest Updates */}
      <LatestSectionContent posts={latestPosts}></LatestSectionContent>
      {/* Newsletter Signup */}
      <S.NewsletterSection>
        <Typography variant="h5" align="center">
          Stay Updated!
        </Typography>
        <S.NewsletterForm>
          <TextField variant="outlined" placeholder="Email" size="small" />
          <S.SubscribeButton variant="contained" color="primary">
            Subscribe
          </S.SubscribeButton>
        </S.NewsletterForm>
      </S.NewsletterSection>
    </S.MainWrapper>
  );
};

export default HomePage;
