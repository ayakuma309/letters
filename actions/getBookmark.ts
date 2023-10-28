import prisma from '@/lib/prisma';

const getBookmark = async ({ id }: { id: string }) => {
  try {
    const bookmark = await prisma.bookmark.findMany({
      where: {
        youTubeId: Number(id),
      },
    });

    if (!bookmark) {
      return null;
    }
    return bookmark;
  } catch (error) {
    return [];
  }
};

export default getBookmark;
