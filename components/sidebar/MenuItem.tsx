'use client';

import React from 'react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type MenuItemProps = {
  title: string;
  path: string;
  src: React.ReactNode;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, path, src }) => {
  return (
    <Link href={path}>
      <li className='flex items-center p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p className='text-3xl'>{src}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </li>
    </Link>
  );
};

export default MenuItem;
