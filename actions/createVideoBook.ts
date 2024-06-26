import prisma from '@/lib/prisma';
import { YouTubeBook } from '@prisma/client';

const createVideoBook = async ({
  videoId,
  bookId,
}: {
  videoId: number;
  bookId: string;
}): Promise<YouTubeBook | null> => {
  try {
    const videoBooks = await prisma.youTubeBook.create({
      data: {
        youTubeId: videoId,
        bookId: parseInt(bookId),
      },
    });
    return videoBooks;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default createVideoBook;
