import { Metadata } from 'next';
import React from 'react';
import Search from '@/components/youtube/Search';
import { redirect } from 'next/navigation';
import getCurrentUser from '@/actions/getCurrentUser';

export const metadata: Metadata = {
  title: 'YouTube',
  description: 'YouTube動画を紹介します。',
};

export default async function Page() {
  // 認証情報取得
  const session = await getCurrentUser();
  // ログインしていない場合はログイン画面にリダイレクト
  if (!session) {
    redirect('/login');
  }
  return (
    <div className='mt-12'>
      <Search />
    </div>
  );
}
