'use client';
import { BookmarkType, VideoType } from '@/types/types';
import React, { useState } from 'react';
import Youtube from 'react-youtube';
import VideoTags from './VideoTags';
import { TwitterShareButton } from 'react-share';
import useNewBookmarkModal from '../hooks/useNewBookmarkModal';
import { useSession } from 'next-auth/react';
import NewBookmarkModal from '../timestamp/NewBookmarkModal';
import Bookmarks from '../timestamp/Bookmarks';

type VideoItemType = {
  video: VideoType;
  bookmarks: BookmarkType[] | null;
};
const VideoItem: React.FC<VideoItemType> = ({ video, bookmarks }) => {
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

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='bg-white shadow-md rounded p-4 mb-4'>
        <div className='mb-4'>
          <Youtube
            videoId={video.videoId}
            className='w-100 h-100 rounded-md  mx-auto'
            onReady={makeYTPlayer}
          />
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
      </div>
      {session?.user && (
        <>
          <div className='text-center'>
            <button
              className='p-4 bg-orange-500 rounded-md text-white font-bold'
              onClick={handleMakeTimestamp}
            >
              タイムスタンプ作成
            </button>
          </div>
          <NewBookmarkModal youTubeId={video.id} time={time} />
        </>
      )}
      {bookmarks && bookmarks.length != 0 && (
        <Bookmarks bookmarks={bookmarks} ytPlayer={YTPlayer} />
      )}
    </div>
  );
};

export default VideoItem;
