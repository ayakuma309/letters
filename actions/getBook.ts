import prisma from '@/lib/prisma';

const getBook = async () => {
  try {
    const books = await prisma.book.findMany({
      include: {
        tags: true,
      },
    });
    return books;
  } catch (error) {
    return [];
  }
};

export default getBook;
