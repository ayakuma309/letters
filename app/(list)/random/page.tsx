import React, { Suspense } from 'react';
import { Metadata } from 'next';
import getRandomVideo from '@/actions/getRandomVideo';
import RandomVideos from './_components/RandomVideos';
import Loading from '../../loading';

export const metadata: Metadata = {
  title: 'YouTube',
  description: 'YouTube動画を紹介します。',
};

export default async function Page() {
  const randomVideos = await getRandomVideo();

  if (randomVideos.length === 0) {
    return <div className='text-center'>動画はありません</div>;
  }

  return (
    <div className='sm:ml-20 mx-auto mt-10 py-4'>
      <Suspense fallback={<Loading />}>
        <RandomVideos videos={randomVideos} />
      </Suspense>
    </div>
  );
}
