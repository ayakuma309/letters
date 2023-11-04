import React from 'react';
import { Metadata } from 'next';
import getVideoById from '@/actions/getVideoById';
import getBook from '@/actions/getBook';
import getVideoBook from '@/actions/getVideoBook';
import VideoItem from './_components/VideoItem';

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
  const [video, books, videoBooks] = await Promise.all([
    getVideoById(id),
    getBook(),
    getVideoBook(id),
  ]);
  if (!video || !books) {
    return (
      <div className='text-center'>
        {video ? '書籍はありません' : '動画はありません'}
      </div>
    );
  }
  return (
    <div className='sm:ml-20 mx-auto mt-10'>
      <VideoItem video={video} books={books} videoBooks={videoBooks} />
    </div>
  );
}
