import getQiita from '@/actions/getQiita';
import Qiitas from '@/app/(list)/qiitas/_components/Qiitas';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qiita記事',
  description: 'Qiita記事を紹介します。',
};

export default async function Page() {
  const qiitas = await getQiita();
  return <Qiitas qiitas={qiitas} />;
}
