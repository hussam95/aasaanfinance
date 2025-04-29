import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Header = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: theme.palette.background.paper,
  position: "sticky",
  top: 0,
  zIndex: 1000,

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1rem",
  },
}));

export const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const LogoImage = styled("img")({
  width: "42px",
  height: "42px",
  objectFit: "contain",
});

export const LogoText = styled("div")(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: theme.palette.primary.main,

  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

export const NavMenu = styled(Box) ({
  display: "flex",
  gap: "1rem", // Important: smaller gap to fit mobile
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
});

export const NavItem = styled("div")(({ theme }) => ({
  cursor: "pointer",
  padding: "0.5rem 0.75rem",
  borderRadius: theme.shape.borderRadius,
  transition: "background-color 0.3s, color 0.3s",
  fontSize: "0.95rem",
  minHeight: "48px",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.primary, // ← force text color to black from theme
  textDecoration: "none", // ← remove default link underline

  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
    letterSpacing: "0.5px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0.25rem 0.5rem",
    fontSize: "0.85rem",
  },
}));
