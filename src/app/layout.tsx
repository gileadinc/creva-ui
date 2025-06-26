import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/theme-providers';
import './globals.css';
import Matomo from '@/components/matomo-analytics';
import { Toaster } from '@/components/ui/sonner';
import ReactLenisProvider from '@/components/react-lenis';
import { nunito, roboto } from '@/fonts';
import ReactQueryProvider from '@/context/react-query-provider';

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
  manifest: '/site.webmanifest',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${nunito.variable} overflow-x-hidden scroll-smooth antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>

          <Toaster className="dark:bg-clrBlackPearl bg-clrAquaHaze text-clrTextLight dark:text-clrText" />
          <ReactLenisProvider />
        </ThemeProvider>
        <Matomo />
      </body>
    </html>
  );
}
