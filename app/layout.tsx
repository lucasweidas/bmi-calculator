import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: 'variable',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'BMI Calculator',
  description: 'Calculate your body mass index (BMI) in a fast and easy way.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
