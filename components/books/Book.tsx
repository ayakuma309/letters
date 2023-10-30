'use client';
import { BookType } from '@/types/types';
import { useSession } from 'next-auth/react';

import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { toast } from '../ui/use-toast';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type BookProps = {
  book: BookType;
};
const Book: React.FC<BookProps> = ({ book }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleDelete = async (id: number) => {
    const shouldDelete = window.confirm('この投稿を削除しますか？');
    if (!shouldDelete) return;
    try {
      await axios.delete(`/api/book/${id}`);
      toast({
        title: '削除しました',
        variant: 'success',
      });
      router.push('/qiitas');
      router.refresh();
    } catch (err) {
      toast({
        title: '削除に失敗しました',
        variant: 'destructive',
      });
    }
  };
  return (
    <div className='m-1 py-3 px-8  rounded-lg shadow-lg'>
      <div className='flex flex-col items-center mt-3 justify-center'>
        <Link href={book.infoLink} rel='noopener noreferrer' target='_blank'>
          <img
            className='w-100 h-100 rounded mr-4'
            alt='User Avatar'
            src={book.image}
          />
        </Link>
      </div>
      {session?.user && (
        <button
          className='p-1 rounded-md font-bold text-2xl'
          onClick={() => handleDelete(book.id)}
        >
          <BsFillTrashFill />
        </button>
      )}
    </div>
  );
};

export default Book;
