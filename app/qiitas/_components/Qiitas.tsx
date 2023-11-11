'use client';
import React from 'react';
import QiitaArticle from './QiitaArticle';
import { QiitaArticleType } from '@/types/qiitaTypes';
import { useQiitaTagSearch } from '../../_components/hooks/useTagSearch';
import TagList from '../../_components/common/search/TagList';
import { qiitaTags } from '@/constants/qiitaTag';

type Props = {
  qiitas: QiitaArticleType[];
};

export default function Qiitas({ qiitas }: Props) {
  const { searchResults, handleSearch } = useQiitaTagSearch(qiitas);
  return (
    <div className='py-4'>
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
