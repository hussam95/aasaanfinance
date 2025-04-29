import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const MainWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 64px)",
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "50vh",
  backgroundImage: `
    url('/lightDots.svg'),
    linear-gradient(rgba(255, 165, 0, 0.8), rgba(255, 165, 0, 0))
  `,
  backgroundRepeat: "repeat, no-repeat",
  backgroundSize: "auto, cover",
  backgroundPosition: "top left, center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "4rem 2rem",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    padding: "2rem 1rem",
  },
}));

export const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "800px",
  padding: "4rem 2rem",
  margin: "0 auto",
  textAlign: "center",
  background: "#ffffff",

  [theme.breakpoints.down("sm")]: {
    padding: "2rem 1rem",
  },
}));

export const ContactInfo = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  // gap: "2rem",
}));

export const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
}));
