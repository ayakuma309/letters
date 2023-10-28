import prisma from '@/lib/prisma';

const getVideo = async ({ id }: { id: string }) => {
  try {
    const video = await prisma.youTube.findUnique({
      where: { id: parseInt(id) },
      include: {
        tags: true,
        bookmarks: true,
      },
    });

    if (!video) {
      return null;
    }
    return video;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getVideo;
