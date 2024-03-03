import prisma from '@/lib/prisma';
import { Qiita } from '@prisma/client';

const createVideo = async ({
  qiitaId,
  title,
  url,
  profileImageUrl,
  tags,
}: {
  qiitaId: string;
  title: string;
  url: string;
  profileImageUrl: string;
  tags: string[];
}): Promise<Qiita | null> => {
  try {
    const tagPromises = tags.map(async (tagName: string) => {
      const existingTag = await prisma.qiitaTag.findUnique({
        where: { name: tagName },
      });

      if (existingTag) {
        return existingTag;
      } else {
        return prisma.qiitaTag.create({ data: { name: tagName } });
      }
    });

    const createdTags = await Promise.all(tagPromises);

    const qiitas = await prisma.qiita.create({
      data: {
        qiitaId,
        title,
        url,
        profileImageUrl,
        tags: {
          connect: createdTags.map((tag) => ({ id: tag.id })),
        },
      },
      include: {
        tags: true,
      },
    });

    return qiitas;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default createVideo;
