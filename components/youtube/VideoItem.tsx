'use client';
import { VideoType } from '@/types/types';
import React from 'react';
import Youtube from 'react-youtube';
import VideoTags from './VideoTags';
import { TwitterShareButton } from 'react-share';

type VideoItemType = {
  video: VideoType;
};
const VideoItem: React.FC<VideoItemType> = ({ video }) => {
  // const [YTPlayer, setYTPlayer] = useState<YT.Player>();
  // const [time, setTime] = useState<number>();
  // const makeYTPlayer = (e: { target: YT.Player }) => {
  //   setYTPlayer(e.target);
  // };

  return (
    <div className='bg-white shadow-md rounded p-4 mb-4'>
      <div className='mb-4'>
        <Youtube
          videoId={video.videoId}
          className='w-100 h-100 rounded-md  mx-auto'
          // onReady={makeYTPlayer}
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
  );
};

export default VideoItem;
