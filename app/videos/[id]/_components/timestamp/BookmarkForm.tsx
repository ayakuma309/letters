import React from 'react';
import NewBookmarkModal from './NewBookmarkModal';
import { VideoType } from '@/types/types';

type Props = {
  video: VideoType;
  time: number | undefined;
  handleMakeTimestamp: () => void;
};

export default function BookmarkForm({
  video,
  time,
  handleMakeTimestamp,
}: Props) {
  return (
    <>
      <div className='text-center my-3'>
        <button
          className='p-4 bg-orange-500 rounded-md text-white font-bold'
          onClick={handleMakeTimestamp}
        >
          タイムスタンプ作成
        </button>
      </div>
      <NewBookmarkModal youTubeId={video.id} time={time} />
    </>
  );
}
