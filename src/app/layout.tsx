import Header from '@/components/globals/Header';
import Footer from '@/components/globals/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden', // ✅
        }}
      >
        <ThemeProvider theme={theme}>
          <Header />

          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>

          <Footer />
        </ThemeProvider>

        <style>
          {`
            *, *::before, *::after {
              box-sizing: border-box;
            }
          `}
        </style>
      </body>
    </html>
  );
}
