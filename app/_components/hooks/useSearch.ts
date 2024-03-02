import { QiitaArticleType } from '@/types/qiitaTypes';
import { BookType, TagType, VideoType } from '@/types/types';
import { useState } from 'react';

const useSearch = <T extends { tags?: TagType[]; title?: string }>(
  items: T[]
) => {
  const [searchResults, setSearchResults] = useState(items);

  const handleSearch = (searchTerm: string) => {
    const results = items.filter(
      (item) =>
        item.tags?.some((tag) => tag.name === searchTerm) ||
        item.title?.includes(searchTerm)
    );
    setSearchResults(results.length > 0 ? results : items);
  };

  return { searchResults, handleSearch };
};

export const useVideoTagSearch = (items: VideoType[]) => {
  return useSearch(items);
};

export const useQiitaTagSearch = (items: QiitaArticleType[]) => {
  return useSearch(items);
};

export const useBookTagSearch = (items: BookType[]) => {
  return useSearch(items);
};
