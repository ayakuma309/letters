import { Bookmark } from '@prisma/client';

//modal
export type ModalType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export type OptionType = {
  value: string;
  label: string;
};

export type VideoType = {
  id: number;
  videoId: string;
  url: string;
  title: string;
  tweet: number | null;
  releaseAt: Date;
  tags: TagType[];
  bookmarks?: Bookmark[] | null;
};

export type TagType = {
  id: number;
  name: string;
};

// book一覧
export interface BooksType {
  id: number;
  bookId: string;
  title: string;
  description: string | undefined;
  pageCount: number | undefined;
  image: string | undefined;
  tags: TagType[];
}
// google books api から取得した情報のインタフェース
export type Book = Omit<BooksType, 'tags'>;

export type GoogleBooksResponse = {
  id: string;
  volumeInfo: {
    title: string;
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    pageCount?: number;
  };
};
