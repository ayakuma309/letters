import React, { useCallback } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Button } from '../../../../_components/ui/button';

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  primaryLabel: string;
  disabled?: boolean;
  del?: boolean;
};

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  disabled,
}: Props) {
  // 閉じる
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [onClose, disabled]);

  // メインボタンのアクション
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  // オープンしていない場合は何も表示しない
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className='w-10/12 h-1/2  mx-auto fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/50'>
        <div className='relative mx-auto h-full w-full md:h-auto md:max-w-screen-sm'>
          <div className='translate h-full duration-75'>
            <div className='h-full bg-white shadow-lg md:rounded-lg'>
              {/* ヘッダー */}
              <div className='relative flex items-center justify-center border-b p-6'>
                {/* 閉じる */}
                <div
                  className='absolute right-5 cursor-pointer rounded-full p-2 transition hover:bg-neutral-100'
                  onClick={handleClose}
                >
                  <IoMdClose size={20} />
                </div>
                {/* タイトル */}
                <div className='text-lg font-bold'>{title}</div>
              </div>

              {/* 内容 */}
              <div className='relative flex-auto p-6'>{body}</div>

              <div className='flex flex-col gap-2 px-6 pb-6'>
                {/* ボタン */}
                <div className='flex w-full flex-row items-center gap-4'>
                  {/* メインボタン */}
                  <Button disabled={disabled} onClick={handleSubmit}>
                    登録
                  </Button>
                </div>

                {/* フッター */}
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
