import { getPageList } from '@/lib/notion';
import Link from 'next/link';

export async function NotionArticles() {
  const latestVideos = await getPageList();
  return (
    <>
      <Link href={`/videos`}>
        <div className='border w-42 p-3 mx-auto text-center rounded-md hover:bg-red-600 hover:text-white'>
          動画一覧へ
        </div>
      </Link>
      <div className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2'>
        {latestVideos?.map((article) => (
          <div key={article.id}>
            <Link
              className='flex flex-col items-between h-full gap-x-6 rounded-xl bg-white px-4 py-3 ring-1 ring-gray-200 hover:bg-gray-50 md:px-6 md:shadow-sm dark:bg-gray-800 dark:hover:bg-gray-800/10'
              href={article.url as string}
              rel='noopener noreferrer'
              target='_blank'
            >
              <div className='line-clamp-3 flex flex-col pt-1'>
                <div className='flex flex-1 flex-col justify-between gap-2'>
                  <p className='line-clamp-3 font-bold text-gray-900 md:text-lg dark:text-gray-200'>
                    {article.title}
                  </p>
                </div>
                <div className='text-xs text-gray-500 md:text-sm dark:text-gray-400'>
                  {article.date}
                </div>
              </div>
              <div className='flex flex-wrap gap-2'>
                {article.tags.map((tag) => (
                  <div
                    key={tag}
                    className='mt-3 text-md text-gray-500 dark:text-gray-400'
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
