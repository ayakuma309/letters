import { Book } from '@prisma/client';
import prisma from '@/lib/prisma';

const createBook = async ({
  bookId,
  title,
  image,
  infoLink,
  tags,
}: {
  bookId: string;
  title: string;
  image: string;
  infoLink: string;
  tags: string[];
}): Promise<Book | null> => {
  try {
    const tagPromises = tags.map(async (tagName: string) => {
      const existingTag = await prisma.bookTag.findUnique({
        where: { name: tagName },
      });

      if (existingTag) {
        console.log(existingTag);
        return existingTag;
      } else {
        return prisma.bookTag.create({ data: { name: tagName } });
      }
    });

    const createdTags = await Promise.all(tagPromises);

    const books = await prisma.book.create({
      data: {
        bookId,
        title,
        image,
        infoLink,
        tags: {
          connect: createdTags.map((tag) => ({ id: tag.id })),
        },
      },
      include: {
        tags: true,
      },
    });

    return books;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default createBook;
