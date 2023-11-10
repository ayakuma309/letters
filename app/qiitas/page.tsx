import React, { Suspense } from 'react';
import { Metadata } from 'next';
import getQiita from '@/actions/getQiita';
import Qiitas from '@/app/qiitas/_components/Qiitas';
import Loading from '../loading';

export const metadata: Metadata = {
  title: 'Qiita記事',
  description: 'Qiita記事を紹介します。',
};

export default async function Page() {
  const qiitas = await getQiita();
  return (
    <div className='sm:ml-20 mx-auto mt-10 py-4'>
      <Suspense fallback={<Loading />}>
        <Qiitas qiitas={qiitas} />
      </Suspense>
    </div>
  );
}
