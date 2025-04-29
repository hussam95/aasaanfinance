"use client";
import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#006837', // deep green from your logo
    },
    secondary: {
      main: '#FF7A00', // orange-gold
    },
    background: {
      default: '#f8f9fa', // off-white page bg
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#5f6368',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: { fontWeight: 900, fontSize: '3rem', lineHeight: 1.2 },
    h2: { fontWeight: 800, fontSize: '2.4rem' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    body1: { fontSize: '1.05rem', lineHeight: 1.7 },
    body2: { fontSize: '0.95rem' },
    button: {
      textTransform: 'none',
      fontWeight: 1200,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

export default theme;
