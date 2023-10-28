import prisma from '@/lib/prisma';

const getVideo = async () => {
  try {
    const videos = await prisma.youTube.findMany({
      orderBy: {
        releaseAt: 'desc',
      },
      include: {
        tags: true,
      },
    });
    return videos;
  } catch (error) {
    return [];
  }
};

export default getVideo;
