import { Metadata } from 'next';
import getVideo from '@/actions/getVideo';
import VideoItems from './_components/VideoItems';

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
    <div className='sm:ml-20 mx-auto mt-10 py-4'>
      <VideoItems videos={videos} />
    </div>
  );
}
