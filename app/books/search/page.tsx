import React from 'react';
import { Metadata } from 'next';
import Search from './_components/Search';
import getCurrentUser from '@/actions/getCurrentUser';
import { redirect } from 'next/navigation';
import { Role } from '@prisma/client';

export const metadata: Metadata = {
  title: '書籍検索',
  description: '書籍検索',
};

export default async function Page() {
  // 認証情報取得
  const session = await getCurrentUser();
  // ログインしていない場合はログイン画面にリダイレクト
  if (!session || session.role !== Role.ADMIN) {
    redirect('/login');
  }

  return (
    <div className='space-y-2 mx-auto'>
      <Search />
    </div>
  );
}
