'use client';
import React from 'react';
import QiitaArticle from './QiitaArticle';
import { QiitaArticleType } from '@/types/qiitaTypes';
import { useQiitaTagSearch } from '../../_components/hooks/useSearch';
import TagList from '../../_components/common/search/TagList';
import { qiitaTags } from '@/constants/qiitaTag';
import SearchBar from '@/app/_components/common/search/SearchBar';

type Props = {
  qiitas: QiitaArticleType[];
};

export default function Qiitas({ qiitas }: Props) {
  const { searchResults, handleSearch } = useQiitaTagSearch(qiitas);
  return (
    <div className='py-4'>
      <SearchBar handleSearch={handleSearch} bgColor='bg-green-800' />
      <TagList handleSearch={handleSearch} tagOptions={qiitaTags} />
      <div className='flex flex-col items-center justify-center'>
        {searchResults &&
          searchResults.map((qiita) => (
            <QiitaArticle key={qiita.id} {...qiita} />
          ))}
      </div>
    </div>
  );
}
