"use client";
import theme from "@/theme";
import { styled } from "@mui/material/styles";

export const PageWrapper = styled("div")({
  padding: "2rem 1rem",
  maxWidth: "960px",
  margin: "0 auto",
});

export const PageTitle = styled("h1")({
  fontSize: "2.25rem",
  textAlign: "center",
  marginBottom: "3rem",
  backgroundColor: "#f5f5f5",
  display: "inline-block",
  padding: "0.5rem 2rem",
  borderRadius: "999px",
});

export const CategorySection = styled("section")({
  marginBottom: "3rem",
});

export const CategoryTitle = styled("h2")({
  fontSize: "1.5rem",
  marginBottom: "1.5rem",
  color: theme.palette.secondary.main,
  backgroundColor: "#f0f0f0",
  padding: "0.4rem 1.2rem",
  borderRadius: "999px",
  display: "inline-block",
  textAlign: "center",
});

export const TilesGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
});

export const Tile = styled("div")({
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",

  h3: {
    fontSize: "1.1rem",
    margin: "1rem 0 0.5rem",
  },

  p: {
    fontSize: "0.95rem",
    color: "#555",
  },

  a: {
    color: "#1976d2",
    textDecoration: "none",
    fontWeight: 500,
    "&:hover": {
      textDecoration: "underline",
    },
  },
});
