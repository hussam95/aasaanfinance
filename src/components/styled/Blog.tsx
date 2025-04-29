'use client';

import { styled } from '@mui/material/styles';

// Blog container wrapper
export const BlogContainer = styled('div')({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem',
  lineHeight: 1.75,
  color: '#1a1a1a',
});

// Section wrapper for each major topic
export const Section = styled('section')({
  marginBottom: '3rem',
});

// Section headings
export const SectionTitle = styled('h2')({
  fontSize: '1.75rem',
  fontWeight: 600,
  marginBottom: '1rem',
});

// Regular paragraph
export const Paragraph = styled('div')({
  marginBottom: '1rem',
  fontSize: '1.05rem',
  lineHeight: 1.75,
});

// Bullet list
export const BulletList = styled('ul')({
  paddingLeft: '1.25rem',
  marginBottom: '1rem',
});

// Bullet point
export const BulletItem = styled('li')({
  marginBottom: '0.5rem',
});

// Table
export const Table = styled('table')({
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '2rem',
  fontSize: '0.95rem',
});

// Table head
export const TableHead = styled('thead')({
  backgroundColor: '#f2f2f2',
});

// Table row
export const TableRow = styled('tr')({
  borderBottom: '1px solid #ccc',
});

// Table cell
export const TableCell = styled('td')({
  padding: '0.75rem',
  borderBottom: '1px solid #eee',
});

export const BlogImage = styled('img')({
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    // margin: '2rem 0',
  });
  