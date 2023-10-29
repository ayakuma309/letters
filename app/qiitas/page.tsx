import React from 'react';
import { Metadata } from 'next';
import getQiita from '@/actions/getQiita';
import QiitaArticle from '@/components/qiitas/QiitaArticle';

export const metadata: Metadata = {
  title: 'Qiita記事',
  description: 'Qiita記事を紹介します。',
};

export default async function Page() {
  const qiitas = await getQiita();
  return (
    <div className='space-y-2 mx-auto'>
      {qiitas &&
        qiitas.map((qiita) => (
          // <QiitaArticle key={qiita.id} {...qiita} />
          <QiitaArticle
            key={qiita.id}
            id={qiita.id}
            url={qiita.url}
            title={qiita.title}
            tags={qiita.tags}
            profileImageUrl={qiita.profileImageUrl}
          />
        ))}
    </div>
  );
}
