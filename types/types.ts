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
  tags: { id: number; name: string }[];
};

export type TagType = {
  id: number;
  name: string;
};
