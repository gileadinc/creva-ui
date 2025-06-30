import type { Metadata } from 'next';
import { montserrat, roboto, jost, openSans, nunito } from '@/fonts';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import ReactLenisProvider from '@/components/react-lenis';
import ReactQueryProvider from '@/providers/react-query-provider';
import ToasterProvider from '@/providers/toast-provider';
import Matomo from '@/components/matomo-analytics';

export const metadata: Metadata = {
  title: 'Creva',
  description: 'Your AI-powered assistant for Hiring Managers',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96' },
    ],
    apple: '/apple-touch-icon.png',
  },
  // manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${roboto.variable} ${jost.variable} ${openSans.variable} ${nunito.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <ToasterProvider />
          <ReactLenisProvider />
        </ThemeProvider>
        <Matomo />
      </body>
    </html>
  );
}
