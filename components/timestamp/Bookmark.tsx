import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { useSession } from 'next-auth/react';
import useTimeFormatter from '../hooks/useTimeFormatter';
import { Bookmark } from '@prisma/client';

interface BookmarkProps {
  bookmark: Bookmark;
  ytPlayer: YT.Player | undefined;
  handleDelete: (bookmarkId: string) => void;
}

const Bookmark: React.FC<BookmarkProps> = ({
  bookmark,
  ytPlayer,
  handleDelete,
}) => {
  const { data: session } = useSession();
  const timeToLink = () => {
    if (ytPlayer) {
      ytPlayer.seekTo(parseInt(bookmark.startAt.toString(), 10), true);
    }
  };

  return (
    <>
      <div className='mb-4'>
        <div className='text-gray-700 break-all'>
          <a
            href='#'
            onClick={timeToLink}
            className='link'
            style={{ color: '#2e63f5' }}
          >
            {useTimeFormatter(bookmark.startAt)} : {bookmark.title}
          </a>
        </div>
        <div className='mt-2 mx-1'>
          {session?.user && (
            <button
              className='font-bold text-red-700'
              onClick={() => handleDelete(bookmark.id)}
            >
              <BsFillTrashFill />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Bookmark;
