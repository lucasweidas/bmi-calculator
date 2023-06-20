import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: 'variable',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Body Mass Index Calculator',
  description: "Calculate your body mass index, it's fast and easy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
