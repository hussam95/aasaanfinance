"use client";

import Link from "next/link";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.LogoContainer>
        <S.LogoImage src="/logoOrange.png" alt="Logo" />
        <Link href="/" style={{ textDecoration: "none" }}>
          <S.LogoText>AasaanFinance</S.LogoText>
        </Link>
      </S.LogoContainer>
      <S.NavMenu>
        <Link href="/" style={{ textDecoration: "none" }}>
          <S.NavItem>Home</S.NavItem>
        </Link>

        <Link href="/about" style={{ textDecoration: "none" }}>
          <S.NavItem>About</S.NavItem>
        </Link>

        <Link href="/categories" style={{ textDecoration: "none" }}>
          <S.NavItem>Categories</S.NavItem>
        </Link>

        <Link href="/contact" style={{ textDecoration: "none" }}>
          <S.NavItem>Contact</S.NavItem>
        </Link>
      </S.NavMenu>
    </S.Header>
  );
};

export default Header;
