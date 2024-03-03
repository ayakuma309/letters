import prisma from '@/lib/prisma';
import { Bookmark } from '@prisma/client';
const createBookmark = async ({
  videoId,
  title,
  startAt,
}: {
  videoId: string;
  title: string;
  startAt: number;
}): Promise<Bookmark | null> => {
  try {
    const bookmark = await prisma.bookmark.create({
      data: {
        youTubeId: parseInt(videoId),
        title,
        startAt,
      },
    });

    return bookmark;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default createBookmark;
