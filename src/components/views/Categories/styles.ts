import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const MainWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowX: 'hidden',
});

export const HeroSection = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '50vh',
  backgroundImage: `
    url('/lightDots.svg'),
    linear-gradient(rgba(255, 165, 0, 0.8), rgba(255, 165, 0, 0))
  `,
  backgroundRepeat: 'repeat, no-repeat',
  backgroundSize: 'auto, cover',
  backgroundPosition: 'top left, center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem 2rem',
  textAlign: 'center',

  [theme.breakpoints.down('sm')]: {
    padding: '2rem 1rem',
  },
}));

export const SectionWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'gray',
})<{ gray?: boolean }>(({ theme, gray }) => ({
  width: '100%',
  maxWidth: '1000px',
  background: gray ? theme.palette.grey[100] : '#ffffff',
  padding: '4rem 2rem',
  textAlign: 'center',

  [theme.breakpoints.down('sm')]: {
    padding: '2rem 1rem',
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  svg: {
    fontSize: '3rem',
    color: theme.palette.secondary.main,
  },
}));
