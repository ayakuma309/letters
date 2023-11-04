import { Metadata } from 'next';
import React from 'react';
import { redirect } from 'next/navigation';
import getCurrentUser from '@/actions/getCurrentUser';
import Search from '@/app/videos/search/_components/Search';
import { Role } from '@prisma/client';
import getFetchYouTubeVideo from '@/actions/getFetchYouTubeVideo';

export const metadata: Metadata = {
  title: 'YouTube',
  description: 'YouTube動画を紹介します。',
};

export default async function Page() {
  // 認証情報取得
  const session = await getCurrentUser();
  const videos = await getFetchYouTubeVideo('エンジニア転職チャンネル');
  // ログインしていない場合はログイン画面にリダイレクト
  if (!session || session.role !== Role.ADMIN) {
    redirect('/login');
  }
  return (
    <div className='ml-20 mt-10'>
      <Search videos={videos} />
    </div>
  );
}
