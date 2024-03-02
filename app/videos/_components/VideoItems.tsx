'use client';
import React from 'react';
import { VideoType } from '@/types/types';
import Video from './Video';
import { videoTags } from '@/constants/videoTag';
import { useVideoTagSearch } from '@/app/_components/hooks/useSearch';
import TagList from '@/app/_components/common/search/TagList';
import SearchBar from '@/app/_components/common/search/SearchBar';

type Props = {
  videos: VideoType[];
};

export default function VideoItems({ videos }: Props) {
  const { searchResults, handleSearch } = useVideoTagSearch(videos);

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <TagList handleSearch={handleSearch} tagOptions={videoTags} />
      <div className='flex flex-wrap justify-between'>
        {searchResults &&
          searchResults.map((video: VideoType) => (
            <Video key={video.id} video={video} />
          ))}
      </div>
    </>
  );
}
