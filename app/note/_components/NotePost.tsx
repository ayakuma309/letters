import { RssFeedPostType } from '@/actions/get-note-feed';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: RssFeedPostType;
};

export default function NotePost({ post }: Props) {
  return (
    <div className='my-2 flex max-h-[150px] w-96 items-center justify-center overflow-scroll rounded-lg bg-white p-3 shadow-lg sm:max-w-[500px]'>
      <div className='w-1/2'>
        <Link href={post.slug} target='_blank' rel='noopener noreferrer'>
          <p className='my-2 text-sm hover:text-blue-500 dark:text-gray-900'>
            {post.title}
          </p>
        </Link>
        <p className='text-sm text-gray-500'>{post.date}</p>
      </div>
      {post['media:thumbnail'] && (
        <Image
          width={0}
          height={0}
          src={post['media:thumbnail'] as string}
          alt={post.title}
          style={{ width: '200px', height: 'auto' }}
        />
      )}
    </div>
  );
}
