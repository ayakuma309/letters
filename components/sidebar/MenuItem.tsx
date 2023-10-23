'use client';

import React from 'react';
import Link from 'next/link';
import { Tooltip } from 'flowbite-react';

type MenuItemProps = {
  title: string;
  path: string;
  src: React.ReactNode;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, path, src }) => {
  return (
    <Link href={path}>
      <li className='flex items-center p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'>
        <Tooltip content={title} placement='right'>
          <span className='text-3xl'>{src}</span>
        </Tooltip>
      </li>
    </Link>
  );
};

export default MenuItem;
