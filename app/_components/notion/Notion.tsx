import { getPageList } from '@/lib/notion';
import Link from 'next/link';

export async function NotionArticles() {
  const results = await getPageList();
  return (
    <div className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2'>
      {results?.map((article, i) => (
        <div key={article.id}>
          {i + 1}
          <Link
            className='flex flex-col h-full gap-x-6 rounded-xl bg-white px-4 py-3 ring-1 ring-gray-200 hover:bg-gray-50 md:px-6 md:shadow-sm dark:bg-gray-800 dark:hover:bg-gray-800/10'
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
            </div>
            <div className=''>
              {article.tags.map((tag) => (
                <div
                  key={tag}
                  className='text-xs text-gray-500 md:text-sm dark:text-gray-400'
                >
                  {tag}
                </div>
              ))}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
