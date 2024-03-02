import getVideoBook from '@/actions/getVideoBook';
import VideoBook from './VideoBook';

type Props = {
  videoId: string;
};

export default async function VideoBooks({ videoId }: Props) {
  const videoBooks = await getVideoBook(videoId);
  return (
    <div className='flex flex-wrap items-center'>
      {videoBooks &&
        videoBooks.length != 0 &&
        videoBooks.map((book) => <VideoBook key={book.id} videoBook={book} />)}
    </div>
  );
}
