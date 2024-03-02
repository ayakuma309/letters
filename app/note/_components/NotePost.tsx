import { RssFeedPostType } from '@/actions/get-note-feed';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: RssFeedPostType;
};

export default function NotePost({ post }: Props) {
  return (
    <div className='my-2 flex flex-col max-h-[180px] w-full items-between justify-between overflow-scroll rounded-lg bg-white p-3 shadow-lg sm:max-w-[500px]'>
      <div className='flex'>
        <div className='flex-1'>
          <Link href={post.slug} target='_blank' rel='noopener noreferrer'>
            <p className='my-2 text-sm hover:text-blue-500 dark:text-gray-900'>
              {post.title}
            </p>
          </Link>
          <p className='text-sm text-gray-500'>{post.date}</p>
          <div className='flex justify-start mt-2'>
            {post['note:creatorImage'] && (
              <Image
                width={0}
                height={0}
                src={post['note:creatorImage'] as string}
                alt='creator image'
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              />
            )}
            <p className='text-sm text-gray-500'>
              {post['note:creatorName'] && `by ${post['note:creatorName']}`}
            </p>
          </div>
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
    </div>
  );
}
