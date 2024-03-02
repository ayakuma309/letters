import { getNoteRssFeeds } from '@/actions/get-all-feed';
import NotePost from './_components/NotePost';

export default async function Page() {
  const notes = await getNoteRssFeeds();
  return (
    <div className='bg-red-700 flex flex-col'>
      <div className='mt-5 flex'>
        {notes.map(({ pagePosts, title }, i) => (
          <div key={i} className='mr-1 h-screen overflow-scroll p-3'>
            {title}
            {pagePosts.map((post, i) => (
              <NotePost key={i} post={post} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
