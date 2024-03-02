import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// ログイン中のユーザー情報を取得する
import AuthContext from '@/app/_components/context/AuthContext';
import getCurrentUser from '@/actions/getCurrentUser';
import Sidebar from '@/app/_components/sidebar/Sidebar';

import { Toaster } from '@/app/_components/ui/toaster';
import GoogleAnalytics from './_components/common/GoogleAnalytics/GoogleAnalytics';
import Footer from './_components/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Letters Tube',
  description: '情報をまとめました',
  metadataBase: new URL('https://letters-tube.vercel.app/'),
  openGraph: {
    title: 'Letters Tube',
    description: '情報をまとめました',
  },
  twitter: {
    title: 'Letters Tube',
    description: '情報をまとめました',
    card: 'summary_large_image',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='ja'>
      <head>
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <AuthContext>
          <div className='flex min-h-screen flex-col'>
            <Sidebar currentUser={currentUser} />
            <div className='flex-1'>
              <Toaster />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
