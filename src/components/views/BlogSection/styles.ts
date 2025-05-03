"use client";
import { styled } from "@mui/material/styles";

export const PageWrapper = styled("div")({
  padding: "0rem 1rem 2rem",
  maxWidth: "960px",
  margin: "0 auto",
});

export const TitleWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
});

export const PageTitle = styled("h2")(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  color: theme.palette.primary.light,

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -6,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    height: "4px",
    backgroundImage: `linear-gradient(270deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    backgroundSize: "200% auto",
    animation: "gradientMove 2s linear infinite",
    borderRadius: "4px",
  },

  "@keyframes gradientMove": {
    "0%": { backgroundPosition: "0% 50%" },
    "100%": { backgroundPosition: "100% 50%" },
  },

  "@media (max-width: 600px)": {
    fontSize: "1.75rem",
  },
}));

export const CardsWrapper = styled("div")({
  display: "grid",
  cursor: "pointer",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "2rem",

  "@media (max-width: 700px)": {
    gridTemplateColumns: "1fr",
  },
});

export const Card = styled("div")({
  border: "1px solid #e0e0e0",
  borderRadius: "12px",
  backgroundColor: "#fff",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",

  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
  },

  img: {
    width: "100%",
    height: "auto",
    aspectRatio: "1200 / 630",
    objectFit: "fill",
    display: "block",
  },

  h3: {
    fontSize: "1.2rem",
    fontWeight: 600,
    margin: "1rem 1rem 0.5rem 1rem",
    lineHeight: 1.4,
    "@media (max-width: 600px)": {
      fontSize: "1.05rem",
    },
  },

  p: {
    fontSize: "0.95rem",
    margin: "0 1rem 1rem 1rem",
    color: "#555",
    "@media (max-width: 600px)": {
      fontSize: "0.85rem",
    },
  },

  a: {
    alignSelf: "flex-start",
    margin: "0 1rem 1rem 1rem",
    fontWeight: 500,
    color: "#1976d2",
    textDecoration: "none",
    transition: "color 0.2s ease",

    "&:hover": {
      color: "#0d47a1",
      textDecoration: "underline",
    },
  },
});

export const ThumbnailWrapper = styled("div")({
  width: "100%",
  aspectRatio: "1200 / 630",
  overflow: "hidden",
  flexShrink: 0, // Prevent layout shift
});

export const UpcomingCard = styled(Card)({
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  position: "relative",

  img: {
    width: "100%",
    height: "auto",
    aspectRatio: "1200 / 630",
    objectFit: "cover", // ⬅️ previously "fill"
    display: "block",
    flexShrink: 0,
  },

  h3: {
    fontSize: "1.2rem",
    fontWeight: 600,
    margin: "1rem 1rem 0.5rem 1rem",
    "@media (max-width: 600px)": {
      fontSize: "1rem",
    },
  },

  p: {
    fontSize: "0.95rem",
    margin: "0 1rem 0.5rem 1rem",
    color: "#555",
    "@media (max-width: 600px)": {
      fontSize: "0.85rem",
    },
  },

  ".coming-soon-label": {
    margin: "0.5rem 0 1rem",
    backgroundColor: "#ffe082",
    color: "#5d4037",
    padding: "0.4rem 0.8rem",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: 600,
    "@media (max-width: 600px)": {
      fontSize: "0.75rem",
      padding: "0.3rem 0.6rem",
    },
  },
});
