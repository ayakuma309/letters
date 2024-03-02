import { NotionArticles } from '@/app/_components/notion/Notion';
import Loading from '@/app/loading';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <NotionArticles />
    </Suspense>
  );
}
