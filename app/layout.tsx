import './globals.css';
import { Inter } from 'next/font/google';

import ThemeProvider from '@/components/theme-provider';
import Header from '@/components/layouts/Header';

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
          <main className="flex flex-col items-center m-6 md:m-12 lg:m-24">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
