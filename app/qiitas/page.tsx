import React from 'react';
import { Metadata } from 'next';
import getQiita from '@/actions/getQiita';

export const metadata: Metadata = {
  title: 'Qiita記事',
  description: 'Qiita記事を紹介します。',
};

export default async function Page() {
  const qiitas = await getQiita();
  console.log(qiitas);
  return <div className='space-y-2'></div>;
}
