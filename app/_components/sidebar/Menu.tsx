import { Role, User } from '@prisma/client';
import React from 'react';
// import Link from 'next/link';
import { signOut } from 'next-auth/react';

// import { IoMdLogIn } from 'react-icons/io';
import { IoMdLogOut } from 'react-icons/io';
import { LoginAfterMenus, Menus } from '@/constants/menu';

import MenuItems from './MenuItems';
import MenuItem from './MenuItem';
import { toast } from '../ui/use-toast';

type Props = {
  currentUser: User | null;
};

export default function Menu({ currentUser }: Props) {
  //logout
  const handleLogout = () => {
    const confirmed = window.confirm('ログアウトしますか？');
    if (confirmed) {
      signOut();
      toast({
        title: 'ログアウトしました',
        variant: 'success',
      });
    }
  };
  return (
    <ul className='list-reset flex flex-row sm:flex-col text-center'>
      <MenuItems menuItems={Menus} />
      {currentUser && currentUser.role === Role.ADMIN && (
        <>
          <MenuItems menuItems={LoginAfterMenus} />
          <div
            onClick={handleLogout}
            className='flex items-center gap-x-4 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
          >
            <MenuItem title={'LogOut'} icon={<IoMdLogOut />} />
          </div>
        </>
      )}
    </ul>
  );
}
