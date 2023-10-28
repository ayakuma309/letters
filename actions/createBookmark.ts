import { Bookmark } from '@prisma/client';
import prisma from '@/lib/prisma';
import { Decimal } from '@prisma/client/runtime/library';
const createBookmark = async ({
  videoId,
  title,
  startAt,
}: {
  videoId: string;
  title: string;
  startAt: Decimal;
}): Promise<Bookmark | null> => {
  try {
    const bookmark = await prisma.bookmark.create({
      data: {
        youTubeId: Number(videoId),
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
