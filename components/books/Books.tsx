'use client';
import React from 'react';
import { useBookTagSearch } from '../hooks/useTagSearch';
import TagList from '../common/search/TagList';
import Book from './Book';
import { BookType } from '@/types/types';
import { bookTags } from '@/constants/bookTag';

type BooksProps = {
  books: BookType[];
};
const Books: React.FC<BooksProps> = ({ books }) => {
  const { searchResults, handleSearch } = useBookTagSearch(books);
  return (
    <>
      <TagList handleSearch={handleSearch} tagOptions={bookTags} />
      <div className='flex flex-wrap items-center'>
        {searchResults &&
          searchResults.map((book) => <Book key={book.id} book={book} />)}
      </div>
    </>
  );
};

export default Books;
