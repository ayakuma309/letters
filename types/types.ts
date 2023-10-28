import { Decimal } from '@prisma/client/runtime/library';

//modal
export type ModalType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export type VideoType = {
  id: number;
  videoId: string;
  url: string;
  title: string;
  tweet: number | null;
  releaseAt: Date;
  tags: TagType[];
};

export type TagType = {
  id: number;
  name: string;
};

//bookmarks
export interface BookmarkType {
  id: string;
  title: string;
  startAt: Decimal;
  youTubeId: number;
}
