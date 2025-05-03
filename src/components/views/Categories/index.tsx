"use client";

import { Typography } from "@mui/material";
import * as S from "./styles";
import Link from "next/link";
import {
  ShowChart,
  AccountBalance,
  CurrencyBitcoin,
  Public,
  MonetizationOn,
  HomeWork,
  Savings,
  CurrencyExchange,
} from "@mui/icons-material";

const CategoriesPage = () => {
  return (
    <S.MainWrapper>
      {/* Hero Section */}
      <S.HeroSection>
        <Typography variant="h3" align="center">
          Explore Your Investment Opportunities
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
          AasaanFinance will help you understand every major market — simply and
          confidently.
        </Typography>
      </S.HeroSection>

      {/* Stocks */}
      <Link href="/stocks" style={{ textDecoration: "none" }}>
        <S.SectionWrapper>
          <S.IconWrapper>
            <ShowChart fontSize="large" />
          </S.IconWrapper>
          <Typography variant="h4" align="center">
            Stocks
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            Stocks let you <b>own a small piece of companies</b> like Unilever,
            Nestle, or Tesla. As companies grow, so can your investment.
            <br />
            <br />
            We will cover every aspect — from choosing your first stock to
            building a portfolio — in our upcoming blogs.
          </Typography>
        </S.SectionWrapper>
      </Link>

      {/* Crypto */}
      <Link href="/crypto" style={{ textDecoration: "none" }}>
        <S.SectionWrapper gray>
          <S.IconWrapper>
            <CurrencyBitcoin fontSize="large" />
          </S.IconWrapper>
          <Typography variant="h4" align="center">
            Crypto
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            Crypto is <b>digital money</b> like Bitcoin and Ethereum. It’s risky
            but revolutionary if understood properly.
            <br />
            <br />
            We will teach you real-world crypto basics — no hype, no scams — so
            you make informed decisions.
          </Typography>
        </S.SectionWrapper>
      </Link>

      {/* Mutual Funds */}
      <Link href="/mutual-funds" style={{ textDecoration: "none" }}>
        <S.SectionWrapper>
          <S.IconWrapper>
            <AccountBalance fontSize="large" />
          </S.IconWrapper>
          <Typography variant="h4" align="center">
            Mutual Funds
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            Mutual Funds are like a <b>team game</b> — you pool your money with
            others, and experts invest it for you.
            <br />
            <br />
            AasaanFinance will guide you step-by-step in understanding the best
            mutual funds for every type of investor.
          </Typography>
        </S.SectionWrapper>
      </Link>

      {/* Bonds */}
      <Link href="/bonds" style={{ textDecoration: "none" }}>
        <S.SectionWrapper gray>
          <S.IconWrapper>
            <MonetizationOn fontSize="large" />
          </S.IconWrapper>
          <Typography variant="h4" align="center">
            Bonds
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            Bonds are like <b>lending your money</b> to governments or companies
            and earning fixed interest back. They are generally{" "}
            <b>lower-risk</b> compared to stocks.
            <br />
            <br />
            Our blogs will explain how bonds work, and how you can use them for
            stable growth.
          </Typography>
        </S.SectionWrapper>
      </Link>

      {/* Gold */}
      <Link href="/gold" style={{ textDecoration: "none" }}>
        <S.SectionWrapper>
          <S.IconWrapper>
            <Savings fontSize="large" />
          </S.IconWrapper>
          <Typography variant="h4" align="center">
            Gold
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            Gold has historically been a <b>safe-haven investment</b> —
            protecting your money during inflation and uncertainty.
            <br />
            <br />
            Whether it’s physical gold or digital forms (like Gold-backed crypto
            or ETFs), we’ll help you understand when and how to invest in it
            smartly.
          </Typography>
        </S.SectionWrapper>
      </Link>

      {/* Property / Real Estate */}
      <Link href="/property" style={{ textDecoration: "none" }}>
        <S.SectionWrapper gray>
          <S.IconWrapper>
            <HomeWork fontSize="large" />
          </S.IconWrapper>
          <Typography variant="h4" align="center">
            Property / Real Estate
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            Real estate can be powerful — <b>only if used productively</b>.
            <br />
            <br />
            In Pakistan, non-productive property buying (empty plots,
            speculation) has caused serious problems: frozen capital, inflation,
            and artificial land prices.
            <br />
            <br />
            AasaanFinance will explain — through blogs —{" "}
            <b>why productive real estate</b> (rental properties, commercial
            spaces) can create real wealth, while <b>land hoarding</b> often
            harms both you and the economy.
          </Typography>
        </S.SectionWrapper>
      </Link>

      {/* Foreign Investment */}
      <Link href="/foreign-investment" style={{ textDecoration: "none" }}>
        <S.SectionWrapper>
          <S.IconWrapper>
            <Public fontSize="large" />
          </S.IconWrapper>
          <Typography variant="h4" align="center">
            Foreign Markets (US Stocks)
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            Investing in companies like Apple, Microsoft, or Amazon means
            growing with the world’s biggest economy.
            <br />
            <br />
            We will show you safe ways to access foreign markets like the{" "}
            <b>S&P 500</b> from Pakistan — step-by-step.
          </Typography>
        </S.SectionWrapper>
      </Link>

      {/* Forex */}
      <Link href="/forex" style={{ textDecoration: "none" }}>
        <S.SectionWrapper gray>
          <S.IconWrapper>
            <CurrencyExchange fontSize="large" />
          </S.IconWrapper>
          <Typography variant="h4" align="center">
            Forex
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            Forex (foreign exchange) is the{" "}
            <b>world’s largest financial market</b>. It involves trading
            currencies like USD/PKR, EUR/USD etc.
            <br />
            <br />
            We will teach how Forex works, what affects currency values, and the
            risks and rewards of engaging in this fast-paced market.
          </Typography>
        </S.SectionWrapper>
      </Link>
    </S.MainWrapper>
  );
};

export default CategoriesPage;
