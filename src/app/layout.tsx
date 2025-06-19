import type { Metadata } from 'next';
// import { Nunito, Roboto } from 'next/font/google';
import { ThemeProvider } from '@/context/theme-providers';
import './globals.css';
import Matomo from '@/components/matomo-analytics';
import { Toaster } from '@/components/ui/sonner';
import ReactLenisProvider from '@/components/react-lenis';
import { nunito, roboto } from '@/fonts';
// const nunito = Nunito({
//   variable: '--font-nunito',
//   subsets: ['latin'],
//   weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
// });
// const roboto = Roboto({
//   variable: '--font-roboto',
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });

export const metadata: Metadata = {
  title: 'Creva',
  description: 'Your AI-powered assistant for Hiring Managers',
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
          {children}

          <Toaster className="dark:bg-clrBlackPearl bg-clrAquaHaze text-clrTextLight dark:text-clrText" />
          <ReactLenisProvider />
        </ThemeProvider>
        <Matomo />
      </body>
    </html>
  );
}
