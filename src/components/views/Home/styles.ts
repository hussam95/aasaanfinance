import { styled } from "@mui/material/styles";
import { Box, Button, keyframes } from "@mui/material";

// Main wrapper
export const MainWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowX: "hidden",
});

// Hero Section
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

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
  boxShadow: "inset 0 0 50px rgba(0,0,0,0.03)",
  animation: `${fadeIn} 1s ease-out`,
  opacity: 0.95,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "4rem 2rem",

  [theme.breakpoints.down("sm")]: {
    minHeight: "50vh",
    padding: "1.5rem",
  },
}));

export const HeroButton = styled(Button)({
  transition: "transform 0.3s ease",

  "&:hover": {
    transform: "scale(1.25)",
  },
});

// Sections
export const Section = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  padding: "1rem 2rem",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 2em",
  },
}));

// Cards
export const CardsContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "2rem",
  marginTop: "1rem",
});

export const Card = styled(Box)(({ theme }) => ({
  flex: "1 1 300px", // responsive width
  maxWidth: "350px",
  background: "#ffffff",
  padding: "2rem",
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  textAlign: "left",

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

export const ReadMoreButton = styled(Button)({
  transition: "transform 0.3s ease, background-color 0.3s ease",

  "&:hover": {
    transform: "scale(1.15)",
  },
});

// Categories
export const CategoriesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "1rem",
  // marginTop: "1rem",

  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyContent: "center",
  },
}));

export const Category = styled(Box)(({ theme }) => ({
  padding: "1rem 1rem",
  background: theme.palette.grey[300],
  borderRadius: "50px",
  cursor: "pointer",
  transition: "background-color 0.3s, color 0.3s, letter-spacing 0.3s",
  textAlign: "center",
  fontWeight: 500,
  color: theme.palette.text.primary,
  textDecoration: "none",

  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
    letterSpacing: "0.5px",
  },
}));

// Latest
export const LatestContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
  padding: "0 1rem",
});

export const LatestItem = styled("div")({
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "1rem",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
  },

  h3: {
    fontSize: "1.2rem",
    fontWeight: 600,
    margin: "1rem 0 0.5rem",
    color: "#333",
  },

  p: {
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: "1rem",
  },

  a: {
    fontWeight: 500,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

// Newsletter
export const NewsletterSection = styled(Box)({
  width: "100%",
  maxWidth: "600px",
  padding: "2rem",
  textAlign: "center",
});

export const NewsletterForm = styled(Box)({
  marginTop: "1rem",
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
});

export const SubscribeButton = styled(Button)({
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.25)",
  },
});
