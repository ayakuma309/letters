'use client';
import React from 'react';
import Book from './Book';
import { BookType } from '@/types/types';
import { bookTags } from '@/constants/bookTag';
import TagList from '@/app/_components/common/search/TagList';
import { useBookTagSearch } from '@/app/_components/hooks/useTagSearch';

type BooksProps = {
  books: BookType[];
};
const Books: React.FC<BooksProps> = ({ books }) => {
  const { searchResults, handleSearch } = useBookTagSearch(books);
  return (
    <div className='mx-auto py-4 sm:ml-20'>
      <TagList handleSearch={handleSearch} tagOptions={bookTags} />
      <div className='flex flex-wrap items-center justify-center'>
        {searchResults &&
          searchResults.map((book) => <Book key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default Books;
