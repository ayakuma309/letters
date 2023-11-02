'use client';
import { BookVideoListType, BookVideoType, VideoType } from '@/types/types';
import React, { useState } from 'react';
import Youtube from 'react-youtube';
import { TwitterShareButton } from 'react-share';
import { useSession } from 'next-auth/react';
import useNewBookmarkModal from '@/app/_components/hooks/useNewBookmarkModal';
import VideoTags from '../../_components/VideoTags';
import BookmarkForm from '@/app/_components/timestamp/BookmarkForm';
import VideoBookForm from './books/VideoBookForm';
import Bookmarks from '@/app/_components/timestamp/Bookmarks';
import VideoBook from './books/VideoBook';

type VideoItemType = {
  video: VideoType;
  books: BookVideoType[];
  videoBooks: BookVideoListType[];
};
const VideoItem: React.FC<VideoItemType> = ({ video, books, videoBooks }) => {
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
      <div className='flex flex-wrap items-center'>
        {videoBooks &&
          videoBooks.length != 0 &&
          videoBooks.map((book) => (
            <VideoBook key={book.id} videoBook={book} />
          ))}
      </div>
    </div>
  );
};

export default VideoItem;
