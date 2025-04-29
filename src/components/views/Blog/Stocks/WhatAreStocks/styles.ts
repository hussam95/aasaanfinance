// styles.ts
import { styled } from '@mui/material/styles';
import { Box, Typography, Container } from '@mui/material';

export const BlogContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
}));

export const Section = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2rem',
  marginBottom: theme.spacing(3),
}));

export const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  lineHeight: 1.7,
  marginBottom: theme.spacing(2),
}));

export const BulletList = styled('ul')(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

export const BulletItem = styled('li')(({ theme }) => ({
  fontSize: '1.1rem',
  marginBottom: theme.spacing(1),
}));

export const Table = styled('table')(({ theme }) => ({
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

export const TableHead = styled('thead')(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
}));

export const TableRow = styled('tr')(({ theme }) => ({}));

export const TableCell = styled('td')(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1),
  fontSize: '1rem',
}));
