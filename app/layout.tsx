import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// ログイン中のユーザー情報を取得する
import AuthContext from '@/app/_components/context/AuthContext';
import getCurrentUser from '@/actions/getCurrentUser';
import Sidebar from '@/app/_components/sidebar/Sidebar';

import { Toaster } from '@/app/_components/ui/toaster';
import MenuItem from './_components/sidebar/MenuItem';

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
          <div className='flex min-h-screen flex-col bg-gray-100'>
            <Sidebar currentUser={currentUser} />
            <div className='flex-1'>
              <Toaster />
              <main className='container mx-auto max-w-screen-md px-2'>
                {children}
              </main>
              {/* フッター */}
              <footer className='py-5'>
                <div className='text-center text-sm'>
                  <div className='flex justify-center space-x-5'>
                    <a
                      href='https://twitter.com/ZCunkuma'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <MenuItem
                        title={'お問い合わせはこちらからお願いします'}
                        src={
                          <img src='https://img.icons8.com/fluent/30/000000/twitter.png' />
                        }
                      />
                    </a>
                  </div>
                  Copyright © All rights reserved | Letters Tube
                </div>
              </footer>
            </div>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
