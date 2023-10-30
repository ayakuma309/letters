import { YouTubeBook } from '@prisma/client';
import prisma from '@/lib/prisma';

const createVideoBooks = async ({
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
        bookId: Number(bookId),
      },
    });
    return videoBooks;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default createVideoBooks;
