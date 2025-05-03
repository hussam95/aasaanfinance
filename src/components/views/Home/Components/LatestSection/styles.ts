"use client";

import { styled } from "@mui/material/styles";

export const Section = styled("section")({
  padding: "0rem 1rem",
  maxWidth: "960px",
  margin: "0 auto",
});

export const SectionTitleWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export const SectionTitle = styled("h2")(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  textAlign: "center",
  color: theme.palette.primary.light,
  marginBottom: "2rem",
  position: "relative",
  display: "inline-block",

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
    fontSize: "1.5rem",
  },
}));

export const LatestContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
});

export const LatestItem = styled("div")({
  backgroundColor: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  display: "flex",
  flexDirection: "column",

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
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
    color: "#333",
  },

  p: {
    fontSize: "0.95rem",
    margin: "0 1rem 1rem 1rem",
    color: "#555",
  },

  a: {
    alignSelf: "flex-start",
    margin: "0 1rem 1rem 1rem",
    fontWeight: 500,
    color: "#1976d2",
    textDecoration: "none",

    "&:hover": {
      color: "#0d47a1",
      textDecoration: "underline",
    },
  },
});
