import type { Metadata } from 'next';
import './globals.css';
import { openSans, raleway, roboto } from '@/fonts';
import { ThemeProvider } from '@/providers/theme-provider';
import ReactLenisProvider from '@/components/react-lenis';
import ToasterProvider from '@/providers/toaster-provider';
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
        className={`${openSans.variable} ${roboto.variable} ${raleway.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <ToasterProvider />
        <ReactLenisProvider />
      </body>
    </html>
  );
}
