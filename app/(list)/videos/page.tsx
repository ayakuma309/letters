import { Metadata } from 'next';
import getVideo from '@/actions/getVideo';
import VideoItems from './_components/VideoItems';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YouTube',
  description: 'YouTube動画を紹介します。',
};

export default async function Page() {
  const videos = await getVideo();

  if (videos.length === 0) {
    return <div className='text-center'>動画はありません</div>;
  }

  return (
    <>
      <Link href={`/videos/all`}>
        <div className='mb-2 border w-42 p-3 mx-auto text-center rounded-md hover:bg-red-500 hover:text-white'>
          最新動画はこちら
        </div>
      </Link>
      <VideoItems videos={videos} />
    </>
  );
}
