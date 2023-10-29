import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '書籍情報',
  description: '書籍情報を紹介します。',
};

export default async function Page() {
  return <div className='space-y-2 mx-auto'></div>;
}
