import React from 'react';
import { Metadata } from 'next';
import Search from '@/components/books/search/Search';

export const metadata: Metadata = {
  title: '書籍検索',
  description: '書籍検索',
};

export default async function Page() {
  return (
    <div className='space-y-2 mx-auto'>
      <Search />
    </div>
  );
}
