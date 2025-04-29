"use client";

import Link from "next/link";
import * as S from "./styles";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterLinks>
        <Link href="/about" style={{ textDecoration: "none" }}>
          <S.FooterLink>About</S.FooterLink>
        </Link>

        <Link href="/privacy-policy" style={{ textDecoration: "none" }}>
          <S.FooterLink>Privacy Policy</S.FooterLink>
        </Link>

        <Link href="/terms" style={{ textDecoration: "none" }}>
          <S.FooterLink>Terms</S.FooterLink>
        </Link>

        <Link href="/contact" style={{ textDecoration: "none" }}>
          <S.FooterLink>Contact</S.FooterLink>
        </Link>
      </S.FooterLinks>

      <Typography variant="caption" align="center">
        © AasaanFinance 2025
      </Typography>
    </S.Footer>
  );
};

export default Footer;
