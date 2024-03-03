'use client';
import useNewBookmarkModal from '@/app/_components/hooks/useNewBookmarkModal';
import { BookVideoType, VideoType } from '@/types/types';
import { Role } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { TwitterShareButton } from 'react-share';
import YouTube from 'react-youtube';
import VideoTags from '../../_components/VideoTags';
import VideoBookForm from './books/VideoBookForm';
import BookmarkForm from './timestamp/BookmarkForm';
import Bookmarks from './timestamp/Bookmarks';

type Props = {
  video: VideoType;
  books: BookVideoType[];
};

export default function VideoItem({ video, books }: Props) {
  const { data: session } = useSession();
  const newBookmarkModal = useNewBookmarkModal();
  const [YTPlayer, setYTPlayer] = useState<YT.Player>();
  const [time, setTime] = useState<number>();
  const makeYTPlayer = (e: { target: YT.Player }) => {
    setYTPlayer(e.target);
  };

  const handleMakeTimestamp = () => {
    //再生を一時停止
    YTPlayer?.pauseVideo();
    //再生時間を取得
    setTime(YTPlayer?.getCurrentTime());
    newBookmarkModal.onOpen();
  };

  const opts = {
    height: '100%',
    width: '100%',
  };
  return (
    <div className='bg-white shadow-md rounded p-4 mb-4'>
      <div className='mb-4'>
        <div className='video-container'>
          <YouTube videoId={video.videoId} opts={opts} onReady={makeYTPlayer} />
        </div>
        <p className='text-xl font-bold my-2'>{video.title}</p>
        <div className='flex justify-between'>
          {video.tags && video.tags.length > 0 && (
            <VideoTags tags={video.tags} />
          )}
          <TwitterShareButton
            hashtags={['おすすめ動画']}
            url={`https://www.youtube.com/watch?v=${video.videoId}`}
          >
            <div className='text-white font-bold rounded mr-5 bg-black px-2 py-1'>
              \uD835\uDD4F
            </div>
          </TwitterShareButton>
        </div>
      </div>
      {session?.user.role === Role.ADMIN && (
        <>
          <BookmarkForm
            video={video}
            time={time}
            handleMakeTimestamp={handleMakeTimestamp}
          />
          <VideoBookForm videoId={video.id} books={books} />
        </>
      )}
      {video.bookmarks && video.bookmarks.length != 0 && (
        <Bookmarks bookmarks={video.bookmarks} ytPlayer={YTPlayer} />
      )}
    </div>
  );
}
