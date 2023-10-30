import React from 'react';
import Link from 'next/link';
import { RandomVideoType } from '@/types/types';
import RandomVideo from './RandomVideo';

type RandomVideosType = {
  videos: RandomVideoType[];
};

const RandomVideos: React.FC<RandomVideosType> = ({ videos }) => {
  return (
    <>
      <div className='flex flex-wrap  my-10 justify-center'>
        <div className='flex flex-wrap my-10 justify-center'>
          {videos &&
            videos.map((video: RandomVideoType) => (
              <RandomVideo key={video.id} video={video} />
            ))}
        </div>
      </div>
      <div className='flex my-10 justify-center'>
        <Link href={`/videos`}>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>
            一覧へ
          </button>
        </Link>
      </div>
    </>
  );
};

export default RandomVideos;
