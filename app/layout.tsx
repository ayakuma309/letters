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
  title: 'Letters Tube',
  description: 'Letters Tube',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='ja'>
      <body className={inter.className}>
        <AuthContext>
          <div className='flex min-h-screen flex-col'>
            <Sidebar currentUser={currentUser} />
            <Toaster />

            <main className='container mx-auto max-w-screen-md flex-1 px-2'>
              {children}
            </main>

            {/* フッター */}
            <footer className='py-5'>
              <div className='text-center text-sm'>
                Copyright © All rights reserved | Letters Tube
              </div>
            </footer>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
