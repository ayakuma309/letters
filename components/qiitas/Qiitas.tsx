'use client';
import React from 'react';
import QiitaArticle from './QiitaArticle';
import { QiitaArticleType } from '@/types/qiitaTypes';
import { useQiitaTagSearch } from '../hooks/useTagSearch';
import TagList from '../common/search/TagList';
import { qiitaTags } from '@/constants/qiitaTag';

type QiitasProps = {
  qiitas: QiitaArticleType[];
};
const Qiitas: React.FC<QiitasProps> = ({ qiitas }) => {
  const { searchResults, handleSearch } = useQiitaTagSearch(qiitas);
  return (
    <>
      <TagList handleSearch={handleSearch} tagOptions={qiitaTags} />
      {searchResults &&
        searchResults.map((qiita) => (
          <QiitaArticle key={qiita.id} {...qiita} />
        ))}
    </>
  );
};

export default Qiitas;
