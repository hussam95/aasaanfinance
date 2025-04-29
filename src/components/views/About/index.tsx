"use client";

import { Typography } from "@mui/material";
import * as S from "./styles";
import {
  Savings,
  TrendingUp,
  Warning,
  VerifiedUser,
  AccountBalanceWallet,
} from "@mui/icons-material";

const AboutPage = () => {
  return (
    <S.MainWrapper>
      {/* Hero Section */}
      <S.HeroSection>
        <Typography variant="h3" align="center">
          Making Investing Simple for Every Pakistani
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
          Because saving alone isn’t enough anymore. It is time to learn smartly,
          invest confidently, and grow your future — the easy way.
        </Typography>
      </S.HeroSection>

      {/* Section 1: Inflation */}
      <S.SectionWrapper>
        <S.IconWrapper>
          <TrendingUp fontSize="large" />
        </S.IconWrapper>
        <Typography variant="h4" align="center">
          Inflation: The Silent Killer
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Over the last two years, Pakistan&apos;s inflation has surged beyond{" "}
          <b>24% to 29%</b>. Essentials like <b>food</b>, <b>fuel</b>, and{" "}
          <b>healthcare</b> have nearly <b>doubled in price</b>.
          <br />
          <br />
          Imagine buying groceries for your family. Two years ago, it cost you{" "}
          <b>10,000 PKR</b>. Today, the same groceries cost nearly{" "}
          <b>18,000 to 20,000 PKR</b> — even though your salary may have stayed
          the same.
          <br />
          <br />
          Many families are <b>forced to take second jobs</b>, work overtime, or
          cut down on essentials — just to maintain a life they once lived
          easily.
          <br />
          <br />
          This is why <b>saving alone is no longer enough</b>. We need to be
          smarter — we need to invest.
        </Typography>
      </S.SectionWrapper>

      {/* Section 2: Saving isn't saving anymore */}
      <S.SectionWrapper gray>
        <S.IconWrapper>
          <Savings fontSize="large" />
        </S.IconWrapper>
        <Typography variant="h4" align="center">
          Saving Is not Saving Anymore
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Banks offer <b>10% to 13%</b> annual return on your savings. But when
          prices are rising by <b>24% to 29%</b>, your savings{" "}
          <b>lose value every month</b>.
          <br />
          <br />
          Example: If you save <b>100,000 PKR</b>, you might earn{" "}
          <b>12,000 PKR interest</b> in a year. But if inflation raises prices
          by 25%, you now need <b>125,000 PKR</b> just to buy what you could
          last year.
          <br />
          <br />
          <b>In simple words:</b>
          Your <b>money grows slower</b> than <b>prices rise</b> — that is why
          you feel poorer even after saving.
        </Typography>
      </S.SectionWrapper>

      {/* Section 3: Need for Investing */}
      <S.SectionWrapper>
        <S.IconWrapper>
          <AccountBalanceWallet fontSize="large" />
        </S.IconWrapper>
        <Typography variant="h4" align="center">
          Investing: No Longer Optional
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Investing is not about being greedy. It is about{" "}
          <b>protecting yourself</b>. Without investing, your savings can’t even
          keep up with your <b>grocery bills</b>, your{" "}
          <b>children’s education</b>, or your <b>basic healthcare</b>.
          <br />
          <br />
          In today’s world, <b>investing is survival</b>, not luxury.
        </Typography>
      </S.SectionWrapper>

      {/* Section 4: YouTube Clickbait Issue */}
      <S.SectionWrapper gray>
        <S.IconWrapper>
          <Warning fontSize="large" />
        </S.IconWrapper>
        <Typography variant="h4" align="center">
          Clickbait vs Real Education
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Today, the internet is full of <b>fake promises</b>:
          <br />
          - Double your money overnight!&quot; - &quot;Become a millionaire in 6 months!&quot;
          <br />
          <br />
          But most of these creators have <b>no real research</b> and{" "}
          <b>no accountability</b>. They confuse people with <b>big words</b>{" "}
          instead of teaching real steps.
          <br />
          <br />
          <b>Real financial education</b> should be so simple that a{" "}
          <b>10-year-old</b> can understand it. That’s exactly what
          AasaanFinance promises.
        </Typography>
      </S.SectionWrapper>

      {/* Section 5: AasaanFinance Mission */}
      <S.SectionWrapper>
        <S.IconWrapper>
          <VerifiedUser fontSize="large" />
        </S.IconWrapper>
        <Typography variant="h4" align="center">
          AasaanFinance: Investing Made Easy
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          We break down real investing — <b>stocks</b>, <b>mutual funds</b>,{" "}
          <b>crypto</b>, <b>bonds</b>, <b>gold</b>, and <b>foreign markets</b> —
          into simple, understandable steps.
          <br />
          <br />
          Our mission is to{" "}
          <b>make learning to invest as easy as saving your first rupee</b>. No
          big words. No complex jargon. Just <b>real-world education</b> that
          even your younger sibling can follow.
          <br />
          <br />
          <b>And most importantly:</b>
          <br />
          We will never tell you to blindly invest somewhere.
          <br />
          <b>We empower you</b> — so you can confidently{" "}
          <b>choose what is best for your future</b>, whether it’s <b>stocks</b>,{" "}
          <b>crypto</b>, <b>mutual funds</b> or anything else.
          <br />
          <br />
          <b>You will not need to depend on anyone else.</b>
          You will lead your own investment life — with knowledge, with
          confidence, and on your own terms.
        </Typography>
      </S.SectionWrapper>

      {/* Final Section: Mission Statement */}
      <S.MissionSection>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ lineHeight: 1.5 }}
        >
          &quot;Making Investing Easy, Understandable, and Achievable for Every
          Pakistani.&quot;
        </Typography>
      </S.MissionSection>
    </S.MainWrapper>
  );
};

export default AboutPage;
