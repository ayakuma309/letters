import React from 'react';
import { Metadata } from 'next';
import Search from '@/components/qiitas/search/Search';

export const metadata: Metadata = {
  title: 'Qiita記事一覧',
  description: 'Qiita記事を紹介します。',
};

export default async function Page() {
  return (
    <div className='space-y-2'>
      <Search />
    </div>
  );
}
