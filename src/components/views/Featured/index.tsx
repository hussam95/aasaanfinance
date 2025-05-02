'use client';

import { Typography, Button } from '@mui/material';
import * as S from './styles';

export const featuredBlogs = [
  {
    title: "What Are Stocks?",
    description: "Learn the basics of stocks, how ownership works, and why companies offer shares.",
    link: "/blog/what-are-stocks",
  },
  {
    title: "Introduction to Mutual Funds",
    description: "Explore how mutual funds pool money and make investing easier for everyone.",
    link: "/blog/what-are-mutual-funds",
  },
  {
    title: "Understanding Bitcoin and Crypto",
    description: "Crypto simplified — what it is, how it works, and what risks to understand before investing.",
    link: "/blog/what-is-crypto",
  },
];

const FeaturedPage = () => {
  return (
    <S.MainWrapper>
      {/* Hero Section */}
      <S.HeroSection>
        <Typography variant="h3" align="center">
          Featured Insights
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
          Explore some of our most essential beginner guides — handpicked for you.
        </Typography>
      </S.HeroSection>

      {/* Cards Section */}
      <S.CardsContainer>
        {featuredBlogs.map((blog, index) => (
          <S.Card key={index}>
            <Typography variant="h5" gutterBottom>
              {blog.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {blog.description}
            </Typography>
            <Button variant="contained" color="primary" href={blog.link}>
              Read More
            </Button>
          </S.Card>
        ))}
      </S.CardsContainer>
    </S.MainWrapper>
  );
};

export default FeaturedPage;
