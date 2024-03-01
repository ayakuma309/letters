import { NotionArticles } from '@/app/_components/notion/Notion';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <NotionArticles />
    </Suspense>
  );
}
