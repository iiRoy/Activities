import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from './client-layout';
import { TransitionProvider } from '@/components/TransitionContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Patrones Hermosos',
  description: 'Next.js School Management System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TransitionProvider>
          <ClientLayout>{children}</ClientLayout>
        </TransitionProvider>
      </body>
    </html>
  );
}
