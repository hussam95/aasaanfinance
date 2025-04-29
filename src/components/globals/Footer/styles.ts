import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Footer = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.grey[200],
  padding: '2rem 1rem',
  textAlign: 'center',
}));

export const FooterLinks = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  marginBottom: '1rem',
});

export const FooterLink = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    padding: '0.4rem 0.7rem', // ← slightly tighter padding
    borderRadius: theme.shape.borderRadius,
    transition: 'background-color 0.3s, color 0.3s, letter-spacing 0.3s',
    fontSize: '0.95rem',
    color: theme.palette.text.primary,
    textDecoration: 'none',
  
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: '#ffffff',
      letterSpacing: '0.5px',
    },
  }));
  
  