"use client";

import { Typography } from "@mui/material";
import * as S from "./styles";
import { Email, Phone } from "@mui/icons-material";

const ContactPage = () => {
  return (
    <S.MainWrapper>
      {/* Hero Section */}
      <S.HeroSection>
        <Typography variant="h3" align="center">
          Get In Touch
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
          We would love to hear from you! Whether you have a question, feedback, or
          just want to connect — reach out.
        </Typography>
      </S.HeroSection>

      {/* Contact Info Section */}
      <S.SectionWrapper>
        <Typography variant="h4" align="center">
          Contact Information
        </Typography>

        <S.ContactInfo>
          <S.ContactItem>
            <Email sx={{ fontSize: 32 }} />
            <Typography variant="body1" sx={{ mt: 1 }}>
              support@aasaanfinance.com
            </Typography>
          </S.ContactItem>

          <S.ContactItem>
            <Phone sx={{ fontSize: 32 }} />
            <Typography variant="body1" sx={{ mt: 1 }}>
              +92 300 1234567
            </Typography>
          </S.ContactItem>
        </S.ContactInfo>

        <Typography variant="subtitle2" align="center" sx={{ mt: 4 }}>
          We will get back to you as soon as possible!
        </Typography>
      </S.SectionWrapper>
    </S.MainWrapper>
  );
};

export default ContactPage;
