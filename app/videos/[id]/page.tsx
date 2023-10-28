import React from 'react';
import { Metadata } from 'next';
import getVideoById from '@/actions/getVideoById';
import VideoItem from '@/components/youtube/VideoItem';

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
  const video = await getVideoById({ id });
  if (!video) {
    return <div className='text-center'>動画はありません</div>;
  }

  return (
    <div className='space-y-2'>
      <VideoItem video={video} />
    </div>
  );
}
