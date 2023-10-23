'use client';

import React from 'react';
import MenuItem from './MenuItem';

type MenuItemsProps = {
  menuItems: {
    title: string;
    path: string;
    src: React.ReactNode;
  }[];
};

const MenuItems: React.FC<MenuItemsProps> = ({ menuItems }) => {
  return (
    <ul className='pt-2'>
      {menuItems.map((menu, index) => (
        <MenuItem
          key={index}
          title={menu.title}
          path={menu.path}
          src={menu.src}
        />
      ))}
    </ul>
  );
};

export default MenuItems;
