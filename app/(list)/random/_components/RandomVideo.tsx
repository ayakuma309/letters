import React from 'react';
import Link from 'next/link';
import { RandomVideoType } from '@/types/types';

type Props = {
  video: RandomVideoType;
};

export default function Hoge({ video }: Props) {
  return (
    <div style={{ width: '300px' }}>
      <div className='bg-white shadow-md rounded p-4 m-1 '>
        <div>
          <Link href={`/videos/${video.id}`}>
            <img
              src={video.url}
              className='w-100 h-100 rounded-md  mx-auto'
              alt='youtube image'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
