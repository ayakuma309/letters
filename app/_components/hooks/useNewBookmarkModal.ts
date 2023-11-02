import { ModalType } from '@/types/types';
import { create } from 'zustand';

// 新規投稿状態管理
const useNewBookmarkModal = create<ModalType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNewBookmarkModal;
