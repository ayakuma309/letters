import React from 'react';
import { Metadata } from 'next';
import Search from '@/app/qiitas/search/_components/Search';
import getCurrentUser from '@/actions/getCurrentUser';
import { redirect } from 'next/navigation';
import { Role } from '@prisma/client';

export const metadata: Metadata = {
  title: 'Qiita記事検索',
  description: 'Qiita記事検索',
};

export default async function Page() {
  // 認証情報取得
  const session = await getCurrentUser();
  // ログインしていない場合はログイン画面にリダイレクト
  if (!session || session.role !== Role.ADMIN) {
    redirect('/');
  }
  return (
    <div className='sm:ml-20 mx-auto mt-10'>
      <Search />
    </div>
  );
}
