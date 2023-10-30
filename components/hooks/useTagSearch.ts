import { QiitaArticleType } from '@/types/qiitaTypes';
import { BookType, OptionType, TagType, VideoType } from '@/types/types';
import { useState } from 'react';

const useTagSearch = <T extends { tags?: TagType[] }>(items: T[]) => {
  const [searchResults, setSearchResults] = useState(items);

  const handleSearch = (tag: OptionType) => {
    const newSearchTerm = tag.label;
    const results = items.filter(
      (item) => item.tags?.some((tag) => tag.name === newSearchTerm)
    );
    setSearchResults(results.length > 0 ? results : items);
  };

  return { searchResults, handleSearch };
};

// Tag検索からOptionTypeもしくはTagTypeを受け取る場合
// const useTagSearch = <T extends { tags?: TagType[] }>(items: T[], tagType: "OptionType" | "TagType") => {
//   const handleSearch = (tag: OptionType | TagType) => {
//     const newSearchTerm = tagType === "OptionType" ? tag.label : tag.name;

export const useVideoTagSearch = (items: VideoType[]) => {
  return useTagSearch(items);
};

export const useQiitaTagSearch = (items: QiitaArticleType[]) => {
  return useTagSearch(items);
};

export const useBookTagSearch = (items: BookType[]) => {
  return useTagSearch(items);
};
