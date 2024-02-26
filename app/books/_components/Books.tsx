'use client';
import React from 'react';
import Book from './Book';
import { BookType } from '@/types/types';

type Props = {
  books: BookType[];
};

export default function Books({ books }: Props) {
  return (
    <>
      <div className='flex flex-wrap items-center justify-center'>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}
