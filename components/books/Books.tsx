'use client';
import React from 'react';
import { useBookTagSearch } from '../hooks/useTagSearch';
import TagList from '../common/search/TagList';
import tagOptions from '@/json/bookTag.json';
import Book from './Book';
import { BookType } from '@/types/types';

type BooksProps = {
  books: BookType[];
};
const Books: React.FC<BooksProps> = ({ books }) => {
  const { searchResults, handleSearch } = useBookTagSearch(books);
  return (
    <>
      <TagList handleSearch={handleSearch} tagOptions={tagOptions} />
      <div className='flex flex-wrap items-center'>
        {searchResults &&
          searchResults.map((book) => <Book key={book.id} book={book} />)}
      </div>
    </>
  );
};

export default Books;
