import getBook from '@/actions/getBook';
import getVideoById from '@/actions/getVideoById';
import VideoItem from './VideoItem';

type Props = {
  videoId: string;
};

export default async function VideoDetail({ videoId }: Props) {
  const [video, books] = await Promise.all([getVideoById(videoId), getBook()]);

  if (!video || !books) {
    return (
      <div className='text-center'>
        {video ? '書籍はありません' : '動画はありません'}
      </div>
    );
  }

  return (
    <div className='container px-4 py-8'>
      <VideoItem video={video} books={books} />
    </div>
  );
}
