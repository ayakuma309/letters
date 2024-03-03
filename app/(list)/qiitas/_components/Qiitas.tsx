'use client';
import SearchBar from '@/app/_components/common/search/SearchBar';
import { qiitaTags } from '@/constants/qiitaTag';
import { QiitaArticleType } from '@/types/qiitaTypes';
import TagList from '../../../_components/common/search/TagList';
import { useQiitaTagSearch } from '../../../_components/hooks/useSearch';
import QiitaArticle from './QiitaArticle';

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
