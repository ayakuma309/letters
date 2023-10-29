// import Link from 'next/link';
import React from 'react';
import { useSession } from 'next-auth/react';
import VideoTags from './VideoTags';
import { VideoType } from '@/types/types';
import axios from 'axios';
import { toast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = {
  video: VideoType;
};

const Video: React.FC<Props> = ({ video }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleDeletePost = async () => {
    const shouldDelete = window.confirm('この投稿を削除しますか？');
    if (!shouldDelete) return;
    const id = video.id;
    try {
      await axios.delete(`/api/video/${id}`);
      toast({
        title: '投稿を削除しました',
        variant: 'success',
      });
      router.push('/');
      router.refresh();
    } catch (err) {
      toast({
        title: '投稿の削除に失敗しました',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='md:w-1/2 p-2'>
      <div className='bg-white shadow-md rounded p-5 mb-4'>
        <div className='mb-4'>
          <Link href={`/videos/${video.id}`}>
            <img
              src={video.url}
              className='w-100 h-100 rounded-md  mx-auto'
              alt='youtube image'
            />
          </Link>
          <p className='break-words'>{video.title}</p>
          <div className='flex justify-between mt-2'>
            {/* タグ情報を表示 */}
            {video.tags && video.tags.length > 0 && (
              <VideoTags tags={video.tags} />
            )}
            {session?.user && (
              <button
                className='p-2 bg-red-500 rounded-md text-white font-bold'
                onClick={handleDeletePost}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
