'use client';
import React, { useState } from 'react';
import VideoGrid from './VideoGrid';
import VideoGridItem from './VideoGridItem';
import axios from 'axios';
import { params } from '../../../../lib/youtube';

type VideoResponseProps = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};
const Search = ({ videos }: any) => {
  const [term, setTerm] = useState('');
  const [searchItems, setSearchItems] = useState(videos);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          ...params,
          q: term,
        },
      }
    );
    setSearchItems(res.data.items);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className='flex justify-center'>
          <input
            type='text'
            placeholder='検索'
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            className='p-5 rounded-md'
          />
          <button
            type='submit'
            className='p-4 bg-orange-500 rounded-md text-white font-bold'
          >
            検索
          </button>
        </form>
      </div>
      <VideoGrid>
        {searchItems &&
          searchItems.map((search: VideoResponseProps) => (
            <VideoGridItem
              id={search.id.videoId}
              key={search.id.videoId}
              src={search.snippet.thumbnails.medium.url}
              title={search.snippet.title}
            />
          ))}
      </VideoGrid>
    </>
  );
};

export default Search;