import React, { Suspense } from 'react';
import { Metadata } from 'next';
import getBook from '@/actions/getBook';
import Books from './_components/Books';
import Loading from '../loading';

export const metadata: Metadata = {
  title: '書籍情報',
  description: '書籍情報を紹介します。',
};

export default async function Page() {
  const books = await getBook();

  if (books.length === 0) {
    return <div className='text-center'>投稿はありません</div>;
  }

  return (
    <div className='sm:ml-20 mx-auto mt-10 py-4'>
      <Suspense fallback={<Loading />}>
        <Books books={books} />
      </Suspense>
    </div>
  );
}
