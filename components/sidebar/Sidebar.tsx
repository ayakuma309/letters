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
    <div className='w-20 sm:block fixed h-screen duration-300 bg-gray-100 p-3 dark:bg-slate-800 shadow-lg'>
      <div className='flex justify-center'>
        <Avatar>
          <AvatarImage src='/ogp.png' />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
      <Menu currentUser={currentUser} />
    </div>
  );
};

export default Sidebar;
