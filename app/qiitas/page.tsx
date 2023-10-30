import React from 'react';
import { Metadata } from 'next';
import getQiita from '@/actions/getQiita';
import Qiitas from '@/components/qiitas/Qiitas';

export const metadata: Metadata = {
  title: 'Qiita記事',
  description: 'Qiita記事を紹介します。',
};

export default async function Page() {
  const qiitas = await getQiita();
  return (
    <div className='space-y-2 mx-auto'>
      <Qiitas qiitas={qiitas} />
    </div>
  );
}
