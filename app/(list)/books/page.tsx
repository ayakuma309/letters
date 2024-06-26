import getBook from '@/actions/getBook';
import { Metadata } from 'next';
import Books from './_components/Books';

export const metadata: Metadata = {
  title: '書籍情報',
  description: '書籍情報を紹介します。',
};

export default async function Page() {
  const books = await getBook();

  if (books.length === 0) {
    return <div className='text-center'>投稿はありません</div>;
  }

  return <Books books={books} />;
}
