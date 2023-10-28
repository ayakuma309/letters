'use client';
import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { fetchSearchData } from '@/lib/youtube';
import VideoGrid from './VideoGrid';
import VideoGridItem from './VideoGridItem';

const Search = () => {
  const [term, setTerm] = useState('エンジニア転職チャンネル');
  const { data, error } = useSWR(`/search?q=${term}`, fetchSearchData, {
    revalidateOnFocus: false, // フォーカス時の再フェッチを無効にする
  });

  const searchItems =
    data && data.data && data.data.items ? data.data.items : [];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (term.trim() === '') {
      return;
    }
    // データを再フェッチ
    mutate(`/search?q=${term}`);
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
      {error && <div>エラーが発生しました。</div>}
      <VideoGrid>
        {searchItems &&
          searchItems.map((search) => (
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
