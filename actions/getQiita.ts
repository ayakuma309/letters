import prisma from '@/lib/prisma';

const getQiita = async () => {
  try {
    const qiitas = await prisma.qiita.findMany({
      include: {
        tags: true,
      },
    });
    return qiitas;
  } catch (error) {
    return [];
  }
};

export default getQiita;
