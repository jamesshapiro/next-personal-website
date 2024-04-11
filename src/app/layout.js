import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

import StyledComponentsRegistry from './registry'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home | James Shapiro',
  description: 'Homepage of James Shapiro',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </StyledComponentsRegistry>
      
    </html>
  );
}
