'use client';

import React from 'react';

interface VideoGridProps {
  children: React.ReactNode;
}

const VideoGrid: React.FC<VideoGridProps> = ({ children }) => {
  return <div className='flex flex-wrap justify-evenly m-5'>{children}</div>;
};

export default VideoGrid;
