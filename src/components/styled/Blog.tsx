'use client';

import { styled } from '@mui/material/styles';

export const BlogContainer = styled('div')({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0rem',
  lineHeight: 1.75,
  color: '#1a1a1a',
});

export const Section = styled('section')({
  marginBottom: '3rem',
});

export const SectionTitle = styled('h2')(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 600,
  marginBottom: '1rem',
  color: theme.palette.primary.main,
}));

export const Paragraph = styled('div')({
  marginBottom: '1rem',
  fontSize: '1.25rem',
  lineHeight: 1.75,
});

export const BulletList = styled('ul')({
  paddingLeft: '1.25rem',
  marginBottom: '1rem',
});

export const BulletItem = styled('li')({
  marginBottom: '0.5rem',
  fontSize: '1.25rem',
});

export const Table = styled('table')({
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '2rem',
  fontSize: '0.95rem',
});

export const TableHead = styled('th')({
  backgroundColor: '#f2f2f2',
  padding: '0.75rem',
  textAlign: 'left',
});

export const TableRow = styled('tr')({
  borderBottom: '1px solid #ccc',
});

export const TableData = styled('td')({
  padding: '0.75rem',
  borderBottom: '1px solid #eee',
});

export const BlogImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px',
});
