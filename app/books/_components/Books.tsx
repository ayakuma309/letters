'use client';
import React from 'react';
import Book from './Book';
import { BookType } from '@/types/types';
import SearchBar from '@/app/_components/common/search/SearchBar';

type Props = {
  books: BookType[];
};

export default function Books({ books }: Props) {
  return (
    <>
      <SearchBar />
      <div className='flex flex-wrap items-center justify-center'>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}
