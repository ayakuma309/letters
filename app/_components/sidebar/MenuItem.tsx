import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/_components/ui/tooltip';

type MenuItemProps = {
  title: string;
  src: React.ReactNode;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, src }) => {
  return (
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
  );
};

export default MenuItem;
