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

// Pick で利用したいプロパティのみを抽出
export type RandomVideoType = Pick<VideoType, 'id' | 'videoId' | 'url'>;

export type TagType = {
  id: number;
  name: string;
};

// book一覧
export interface BookType {
  id: number;
  bookId: string;
  title: string;
  description?: string | undefined;
  image: string | undefined;
  infoLink: string;
  tags: TagType[];
}
export type BookSearchResultType = Omit<BookType, 'tags'>;

export type GoogleBooksResponse = {
  id: string;
  volumeInfo: {
    title: string;
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    infoLink?: string;
  };
};
