'use client';
import React, { useState } from 'react';
import tagOptions from '@/json/tag.json';
import Video from './Video';
import { VideoType } from '@/types/types';

type OptionType = {
  value: string;
  label: string;
};

type VideoItemsProps = {
  videos: VideoType[];
};

const VideoItems: React.FC<VideoItemsProps> = ({ videos }) => {
  const [searchResults, setSearchResults] = useState(videos);
  const handleSearch = (tag: OptionType) => {
    const newSearchTerm = tag.label;
    const results = videos.filter(
      (video: VideoType) =>
        video.tags?.some((tag) => tag.name === newSearchTerm)
    );
    const res = results.length > 0 ? results : videos;
    setSearchResults(res);
  };

  return (
    <div className='min-h-screen'>
      <main className='container mx-auto py-4'>
        <div className='mt-3 mb-5 flex flex-wrap'>
          {tagOptions.map((tag) => (
            <div onClick={() => handleSearch(tag)} key={tag.value}>
              <p className='bg-white text-gray-800 p-4 rounded-md text-xs mr-2 mb-2 cursor-pointer'>
                {tag.label}
              </p>
            </div>
          ))}
        </div>
        <div className='flex flex-wrap justify-between'>
          {searchResults &&
            searchResults.map((video: VideoType) => (
              <Video key={video.id} video={video} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default VideoItems;
