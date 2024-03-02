import { getNoteRssFeeds } from '@/actions/get-note-feed';
import NotePost from './_components/NotePost';
import Link from 'next/link';

export default async function Page() {
  const notes = await getNoteRssFeeds();
  return (
    <div className='mt-5 flex sm:pl-24'>
      {notes.map(({ link, pagePosts, title }, i) => (
        <div
          key={i}
          className='mr-1 h-screen overflow-scroll p-3 min-w-[450px]'
        >
          <p className='text-2xl font-bold'>{title}</p>
          {pagePosts.map((post, i) => (
            <NotePost key={i} post={post} />
          ))}
          <Link href={link as string} rel='noopener noreferrer' target='_blank'>
            さらに見る
          </Link>
        </div>
      ))}
    </div>
  );
}
