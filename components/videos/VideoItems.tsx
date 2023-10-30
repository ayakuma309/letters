'use client';
import React from 'react';
import { VideoType } from '@/types/types';
import { useVideoTagSearch } from '../hooks/useTagSearch';
import tagOptions from '@/json/tag.json';
import Video from './Video';
import TagList from '../common/search/TagList';

type VideoItemsProps = {
  videos: VideoType[];
};

const VideoItems: React.FC<VideoItemsProps> = ({ videos }) => {
  const { searchResults, handleSearch } = useVideoTagSearch(videos);

  return (
    <div className='container mx-auto py-4'>
      <TagList handleSearch={handleSearch} tagOptions={tagOptions} />
      <div className='flex flex-wrap justify-between'>
        {searchResults &&
          searchResults.map((video: VideoType) => (
            <Video key={video.id} video={video} />
          ))}
      </div>
    </div>
  );
};

export default VideoItems;
