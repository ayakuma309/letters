import React from 'react';
import { Metadata } from 'next';
import getVideoById from '@/actions/getVideoById';
import VideoItem from '@/components/videos/VideoItem';
import getBook from '@/actions/getBook';

export const metadata: Metadata = {
  title: 'YouTube',
  description: 'YouTube動画を紹介します。',
};

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params: { id } }: Props) {
  const [video, books] = await Promise.all([getVideoById({ id }), getBook()]);
  if (!video || !books) {
    return (
      <div className='text-center'>
        {video ? '書籍はありません' : '動画はありません'}
      </div>
    );
  }
  return (
    <div className='space-y-2'>
      <VideoItem video={video} books={books} />
    </div>
  );
}
