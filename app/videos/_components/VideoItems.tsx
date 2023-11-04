'use client';
import React from 'react';
import { VideoType } from '@/types/types';
import Video from './Video';
import { videoTags } from '@/constants/videoTag';
import { useVideoTagSearch } from '@/app/_components/hooks/useTagSearch';
import TagList from '@/app/_components/common/search/TagList';

type VideoItemsProps = {
  videos: VideoType[];
};

const VideoItems: React.FC<VideoItemsProps> = ({ videos }) => {
  const { searchResults, handleSearch } = useVideoTagSearch(videos);

  return (
    <>
      <TagList handleSearch={handleSearch} tagOptions={videoTags} />
      <div className='flex flex-wrap justify-between'>
        {searchResults &&
          searchResults.map((video: VideoType) => (
            <Video key={video.id} video={video} />
          ))}
      </div>
    </>
  );
};

export default VideoItems;
