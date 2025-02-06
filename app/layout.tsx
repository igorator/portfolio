import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FilmGrainOverlay } from './components/FilmGrainAnimation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Ihor`s protfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center min-h-[100dvh] justify-between`}
      >
        <Header id='header' />
        <main id='main' className='w-full flex flex-col justify-center '>
          {children}
        </main>
        <Footer id='footer' />
        <FilmGrainOverlay />
      </body>
    </html>
  );
}
