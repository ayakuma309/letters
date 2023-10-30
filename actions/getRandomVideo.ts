import prisma from '@/lib/prisma';

const getRandomVideo = async () => {
  try {
    const result = await prisma.youTube.count();
    const videos = await prisma.youTube.findMany({
      skip: Math.floor(Math.random() * result),
      take: 3,
    });
    return videos;
  } catch (error) {
    return [];
  }
};

export default getRandomVideo;
