import React from 'react';
import { Metadata } from 'next';
import Search from '@/app/qiitas/search/_components/Search';

export const metadata: Metadata = {
  title: 'Qiita記事検索',
  description: 'Qiita記事検索',
};

export default async function Page() {
  return (
    <div className='space-y-2'>
      <Search />
    </div>
  );
}
