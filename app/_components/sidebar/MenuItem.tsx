import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/_components/ui/tooltip';
import React from 'react';

type Props = {
  title: string;
  icon: React.ReactNode;
};

export default function MenuItem({ title, icon }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <p className='text-3xl'>{icon}</p>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
