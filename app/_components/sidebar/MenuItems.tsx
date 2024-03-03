import Link from 'next/link';
import React from 'react';
import MenuItem from './MenuItem';

type Props = {
  menuItems: {
    title: string;
    path: string;
    icon: React.ReactNode;
  }[];
};

export default function MenuItems({ menuItems }: Props) {
  return (
    <>
      {menuItems.map((menu, index) => (
        <Link href={menu.path} key={index}>
          <li className='flex-1 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'>
            <MenuItem title={menu.title} icon={menu.icon} />
          </li>
        </Link>
      ))}
    </>
  );
}
