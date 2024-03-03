import Spinner from '@/app/_components/ui/spinner';
import { Metadata } from 'next';
import { Suspense } from 'react';
import VideoDetail from './_components/VideoDetail';
import VideoBooks from './_components/books/VideoBooks';

export const metadata: Metadata = {
  title: 'YouTube',
  description: 'YouTube動画を紹介します。',
};

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params: { id } }: Props) {
  return (
    <div className='sm:ml-20 mx-auto mt-10'>
      <Suspense fallback={<Spinner />}>
        <VideoDetail videoId={id} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <VideoBooks videoId={id} />
      </Suspense>
    </div>
  );
}
