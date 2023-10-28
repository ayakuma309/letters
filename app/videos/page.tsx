import React from 'react';
import { Metadata } from 'next';
import VideoItems from '@/components/youtube/VideoItems';
import getVideo from '@/actions/getVideo';

export const metadata: Metadata = {
  title: 'YouTube',
  description: 'YouTube動画を紹介します。',
};

export default async function Page() {
  const videos = await getVideo();

  if (videos.length === 0) {
    return <div className='text-center'>動画はありません</div>;
  }

  return (
    <div className='space-y-2'>
      <VideoItems videos={videos} />
    </div>
  );
}
