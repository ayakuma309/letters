import prisma from '@/lib/prisma';

const getVideoBook = async (videoId: string) => {
  try {
    const videoBooks = await prisma.youTubeBook.findMany({
      where: {
        youTubeId: parseInt(videoId),
      },
      include: {
        book: true,
      },
    });

    return videoBooks.map((videoBook) => videoBook.book);
  } catch (error) {
    console.error('Error fetching video books:', error);
    return [];
  }
};

export default getVideoBook;
