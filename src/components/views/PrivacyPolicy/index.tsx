'use client';

import { Typography } from '@mui/material';
import * as S from './styles';

const PrivacyPolicyPage = () => {
  return (
    <S.MainWrapper>
      {/* Hero Section */}
      <S.HeroSection>
        <Typography variant="h3" align="center">
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
          Your privacy is important to us. This page explains how AasaanFinance handles your information.
        </Typography>
      </S.HeroSection>

      {/* Policy Sections */}
      <S.SectionWrapper>
        <Typography variant="h4" align="left">
          1. What Information We Collect
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          We may collect basic information like your name, email address, and any details you provide voluntarily when you contact us or subscribe to our updates.
        </Typography>
      </S.SectionWrapper>

      <S.SectionWrapper gray>
        <Typography variant="h4" align="left">
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          We use your information solely to respond to your inquiries, provide updates, and improve our services. We never sell your data to third parties.
        </Typography>
      </S.SectionWrapper>

      <S.SectionWrapper>
        <Typography variant="h4" align="left">
          3. Data Protection
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          We implement strong security measures to protect your information. However, remember that no method of transmission over the internet is 100% secure.
        </Typography>
      </S.SectionWrapper>

      <S.SectionWrapper gray>
        <Typography variant="h4" align="left">
          4. Your Rights
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          You have the right to access, correct, or delete your personal information. Feel free to contact us anytime regarding your data.
        </Typography>
      </S.SectionWrapper>

      <S.SectionWrapper>
        <Typography variant="h4" align="left">
          5. Changes to This Policy
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with the latest revision date.
        </Typography>
      </S.SectionWrapper>

      <S.SectionWrapper gray>
        <Typography variant="h4" align="left">
          6. Contact Us
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          If you have any questions about this policy or your personal data, please reach out to us at support@aasaanfinance.com.
        </Typography>
      </S.SectionWrapper>
    </S.MainWrapper>
  );
};

export default PrivacyPolicyPage;
