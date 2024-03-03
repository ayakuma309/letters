import { Bookmark } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { BsFillTrashFill } from 'react-icons/bs';
import useTimeFormatter from '../../../../../_components/hooks/useTimeFormatter';

interface Props {
  bookmark: Bookmark;
  ytPlayer: YT.Player | undefined;
  handleDelete: (bookmarkId: string) => void;
}

export default function Bookmark({ bookmark, ytPlayer, handleDelete }: Props) {
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
          <a href='#' onClick={timeToLink} className='link text-blue-700'>
            {useTimeFormatter(bookmark.startAt)} :{' '}
            <span className='text-black font-bold'>{bookmark.title}</span>
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
}
