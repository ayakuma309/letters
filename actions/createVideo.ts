import prisma from '@/lib/prisma';
import { YouTube } from '@prisma/client';

const createVideo = async ({
  videoId,
  title,
  url,
  releaseAt,
  tags,
}: {
  videoId: string;
  title: string;
  url: string;
  tweet?: number;
  releaseAt: Date;
  tags: string[];
}): Promise<YouTube | null> => {
  try {
    const tagPromises = tags.map(async (tagName: string) => {
      const existingTag = await prisma.youTubeTag.findUnique({
        where: { name: tagName },
      });

      if (existingTag) {
        return existingTag;
      } else {
        return prisma.youTubeTag.create({ data: { name: tagName } });
      }
    });

    const createdTags = await Promise.all(tagPromises);

    const youtubes = await prisma.youTube.create({
      data: {
        videoId,
        title,
        url,
        releaseAt,
        tags: {
          connect: createdTags.map((tag) => ({ id: tag.id })),
        },
      },
      include: {
        tags: true,
      },
    });

    return youtubes;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default createVideo;
