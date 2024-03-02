import { getNoteRssFeeds } from '@/actions/get-all-feed';
import NotePost from './_components/NotePost';

export default async function Page() {
  const notes = await getNoteRssFeeds();
  return (
    <div className='mt-5 flex sm:pl-24'>
      {notes.map(({ pagePosts, title }, i) => (
        <div
          key={i}
          className='mr-1 h-screen overflow-scroll p-3 min-w-[400px]'
        >
          <p className='text-2xl font-bold'>{title}</p>
          {pagePosts.map((post, i) => (
            <NotePost key={i} post={post} />
          ))}
        </div>
      ))}
    </div>
  );
}
