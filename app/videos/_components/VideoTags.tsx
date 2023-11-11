import { TagType } from '@/types/types';
import React from 'react';

type Props = {
  tags: TagType[];
};

export default function VideoTags({ tags }: Props) {
  return (
    <div className='flex flex-wrap'>
      {tags.map((tag, index) => (
        <span
          key={index}
          className='bg-gray-200 text-gray-800 p-2  rounded-md text-xs mr-1 flex items-center'
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}
