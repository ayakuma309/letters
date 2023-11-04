import React from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';

type MenuItemsProps = {
  menuItems: {
    title: string;
    path: string;
    src: React.ReactNode;
  }[];
};

const MenuItems: React.FC<MenuItemsProps> = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((menu, index) => (
        <Link href={menu.path} key={index}>
          <li className='flex-1 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'>
            <MenuItem title={menu.title} src={menu.src} />
          </li>
        </Link>
      ))}
    </>
  );
};

export default MenuItems;