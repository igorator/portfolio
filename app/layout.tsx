import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FilmGrainOverlay } from './shared/animations/FilmGrainAnimation';

const departureMono = localFont({
  src: '../public/fonts/DepartureMono.woff',
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
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
        className={`${geistSans.variable} ${departureMono.className} antialiased flex flex-col items-center`}
      >
        <Header id='header' />
        <main id='main' className='flex flex-col items-center w-full'>
          {children}
        </main>
        <FilmGrainOverlay />
        <Footer id='footer' />
      </body>
    </html>
  );
}
