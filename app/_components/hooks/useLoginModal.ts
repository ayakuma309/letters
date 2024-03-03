import { ModalType } from '@/types/types';
import { create } from 'zustand';

// ログイン状態管理
const useLoginModal = create<ModalType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
