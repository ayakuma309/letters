import { getPageList } from '@/lib/notion';

export default async function Page() {
  const videos = await getPageList();

  if (videos.length === 0) {
    return <div className='text-center'>動画はありません</div>;
  }

  return <div className='sm:ml-20 mx-auto mt-10 py-4'>Videos</div>;
}
