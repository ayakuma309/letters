'use client';
import { BookVideoListType } from '@/types/types';
import { useSession } from 'next-auth/react';

import { toast } from '@/app/_components/ui/use-toast';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsFillTrashFill } from 'react-icons/bs';

type Props = {
  videoBook: BookVideoListType;
};

export default function VideoBook({ videoBook }: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleDelete = async (videoBookId: number) => {
    const shouldDelete = window.confirm('この投稿を削除しますか？');
    if (!shouldDelete) return;
    try {
      await axios.delete(`/api/video/books/${videoBookId}`);
      toast({
        title: '削除しました',
        variant: 'success',
      });
      router.refresh();
      router.push(`/`);
    } catch (err) {
      toast({
        title: '削除に失敗しました',
        variant: 'destructive',
      });
    }
  };
  return (
    <div className='mt-3 m-1 py-3 px-3  rounded-lg shadow-lg'>
      <div className='flex flex-col items-center justify-center'>
        <Link
          href={videoBook.book.infoLink}
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            className='w-100 h-100'
            alt='User Avatar'
            src={videoBook.book.image}
          />
        </Link>
        {session?.user && (
          <button
            className='p-1 rounded-md font-bold text-2xl'
            onClick={() => handleDelete(videoBook.id)}
          >
            <BsFillTrashFill />
          </button>
        )}
      </div>
    </div>
  );
}
