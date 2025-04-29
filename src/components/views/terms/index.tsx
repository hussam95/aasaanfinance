'use client';

import { Typography } from '@mui/material';
import * as S from './styles';

const TermsPage = () => {
  return (
    <S.MainWrapper>
      {/* Hero Section */}
      <S.HeroSection>
        <Typography variant="h3" align="center">
          Terms & Conditions
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
          Please read these terms carefully before using AasaanFinance.
        </Typography>
      </S.HeroSection>

      {/* Terms Sections */}
      <S.SectionWrapper>
        <Typography variant="h4" align="left">
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          By accessing or using AasaanFinance, you agree to be bound by these Terms and Conditions and our Privacy Policy.
        </Typography>
      </S.SectionWrapper>

      <S.SectionWrapper gray>
        <Typography variant="h4" align="left">
          2. Use of Site
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          You agree to use the site for lawful purposes only. You must not misuse the information provided for illegal or unethical activities.
        </Typography>
      </S.SectionWrapper>

      <S.SectionWrapper>
        <Typography variant="h4" align="left">
          3. Content Disclaimer
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          All content provided is for educational purposes only. AasaanFinance does not provide personalized financial advice. Always consult a licensed financial advisor before making investment decisions.
        </Typography>
      </S.SectionWrapper>

      <S.SectionWrapper gray>
        <Typography variant="h4" align="left">
          4. Limitation of Liability
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          AasaanFinance is not liable for any financial loss or damages resulting from the use or reliance on information provided through this site.
        </Typography>
      </S.SectionWrapper>

      <S.SectionWrapper>
        <Typography variant="h4" align="left">
          5. Changes to Terms
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          We may revise these Terms & Conditions from time to time. Changes will be posted on this page, and your continued use of the site constitutes acceptance of the updated terms.
        </Typography>
      </S.SectionWrapper>

      <S.SectionWrapper gray>
        <Typography variant="h4" align="left">
          6. Contact
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          For any questions regarding these Terms & Conditions, please contact us at support@aasaanfinance.com.
        </Typography>
      </S.SectionWrapper>
    </S.MainWrapper>
  );
};

export default TermsPage;
