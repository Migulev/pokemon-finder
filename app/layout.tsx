import './globals.css';
import { Inter } from 'next/font/google';

import ThemeProvider from '@/components/theme-provider';
import Header from '@/components/layouts/Header';
import QueryProvider from '@/components/query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pokemon Finder',
  description: 'find your pokemon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* <QueryProvider> */}
          <main className="flex min-h-screen flex-col items-center m-24">
            <Header className=" mb-16" />
            {children}
          </main>
          {/* </QueryProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
