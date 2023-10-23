'use client';

import React from 'react';
import { User } from '@prisma/client';
import Menu from './Menu';

type SidebarProps = {
  currentUser: User | null;
};

const Sidebar: React.FC<SidebarProps> = ({ currentUser }) => {
  return (
    <>
      <div className='w-20 sm:block fixed h-screen duration-300 bg-gray-100 p-3 dark:bg-slate-800 shadow-lg'>
        {/* <Avatar img='/ogp.png' /> */}
        <Menu currentUser={currentUser} />
      </div>
    </>
  );
};

export default Sidebar;
