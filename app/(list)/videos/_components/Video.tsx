import { toast } from '@/app/_components/ui/use-toast';
import { VideoType } from '@/types/types';
import { Role } from '@prisma/client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import VideoTags from './VideoTags';

type Props = {
  video: VideoType;
};

export default function Video({ video }: Props) {
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
      router.push('/videos');
      router.refresh();
    } catch (err) {
      toast({
        title: '投稿の削除に失敗しました',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='sm:mx-auto md:w-1/2 p-2 w-1/2 overflow-y-scroll'>
      <div className='bg-white shadow-md rounded p-5 mb-4'>
        <div className='mb-4'>
          <Link href={`/videos/${video.id}`}>
            <img
              src={video.url}
              className='w-100 h-100 rounded-md  mx-auto'
              alt='youtube image'
            />
          </Link>
          <div className='flex justify-between mt-2'>
            {/* タグ情報を表示 */}
            {video.tags && video.tags.length > 0 && (
              <VideoTags tags={video.tags} />
            )}
          </div>
          {session?.user.role === Role.ADMIN && (
            <button
              className='p-1 m-2 bg-red-500 rounded-md text-white font-bold'
              onClick={handleDeletePost}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
