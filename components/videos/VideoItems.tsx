'use client';
import React from 'react';
import { VideoType } from '@/types/types';
import { useVideoTagSearch } from '../hooks/useTagSearch';
import Video from './Video';
import TagList from '../common/search/TagList';
import { videoTags } from '@/constants/videoTag';

type VideoItemsProps = {
  videos: VideoType[];
};

const VideoItems: React.FC<VideoItemsProps> = ({ videos }) => {
  const { searchResults, handleSearch } = useVideoTagSearch(videos);

  return (
    <div className='container mx-auto py-4'>
      <TagList handleSearch={handleSearch} tagOptions={videoTags} />
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
