import { TagType } from '@/types/types';
import React from 'react';

type VideoTagsProps = {
  tags: TagType[];
};

const VideoTags: React.FC<VideoTagsProps> = ({ tags }) => {
  return (
    <div className='flex flex-wrap'>
      {tags.map((tag, index) => (
        <span
          key={index}
          className='bg-gray-200 text-gray-800 p-2  rounded-md text-xs mr-2 flex items-center'
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
};

export default VideoTags;
