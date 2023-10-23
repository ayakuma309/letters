import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// ログイン中のユーザー情報を取得する
import AuthContext from '@/components/context/AuthContext';
import getCurrentUser from '@/actions/getCurrentUser';
import Sidebar from '@/components/sidebar/Sidebar';

import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthContext>
          <main>
            <Sidebar currentUser={currentUser} />
            {children}
          </main>
          <Toaster />
          <footer className='py-5'>
            <div className='text-center text-sm'>
              Copyright © All rights reserved | letters-tube
            </div>
          </footer>
        </AuthContext>
      </body>
    </html>
  );
}
