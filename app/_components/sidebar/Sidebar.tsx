'use client';
import React from 'react';
import { User } from '@prisma/client';
import Menu from './Menu';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/_components/ui/avatar';
import Link from 'next/link';

type Props = {
  currentUser: User | null;
};

export default function Sidebar({ currentUser }: Props) {
  return (
    <div className='w-full sm:w-20 flex flex-col justify-center md:justify-start bg-gray-100 px-2 text-center fixed bottom-0 sm:pt-8 sm:top-0 sm:left-0 h-16 sm:h-screen p-3 dark:bg-slate-800 shadow-inner sm:shadow-lg'>
      <div className='hidden sm:flex sm:justify-center'>
        <Link href='/'>
          <Avatar>
            <AvatarImage src='/ogp.png' />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div className='sm:relative mx-auto'>
        <Menu currentUser={currentUser} />
      </div>
    </div>
  );
}
