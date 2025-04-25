import '../styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hey, I\'m Ergert',
  description: 'A portfolio website showcasing product design work',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@github/mona-sans@latest/dist/mona-sans.css" />
      </head>
      <body className="font-mona-sans">
        {children}
      </body>
    </html>
  );
}
