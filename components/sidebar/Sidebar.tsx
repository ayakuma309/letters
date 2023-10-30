'use client';

import React from 'react';
import { User } from '@prisma/client';
import Menu from './Menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type SidebarProps = {
  currentUser: User | null;
};

const Sidebar: React.FC<SidebarProps> = ({ currentUser }) => {
  return (
    <div className='w-full sm:w-20 flex flex-col justify-center md:justify-start bg-gray-100 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen p-3 dark:bg-slate-800 shadow-inner md:shadow-lg'>
      <div className='hidden md:flex md:justify-center'>
        <Avatar>
          <AvatarImage src='/ogp.png' />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
      <div className='md:relative mx-auto'>
        <Menu currentUser={currentUser} />
      </div>
    </div>
  );
};

export default Sidebar;
