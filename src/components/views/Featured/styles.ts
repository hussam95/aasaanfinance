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
  minHeight: '45vh',
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

export const CardsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
//   marginTop: '4rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  padding: '2rem',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

export const Card = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  padding: '2rem',
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',

  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));
