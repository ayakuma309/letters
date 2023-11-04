import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import useNewBookmarkModal from '../../../../_components/hooks/useNewBookmarkModal';
import { toast } from '../../../../_components/ui/use-toast';
import { Input } from '../../../../_components/ui/input';
import Modal from './Modal';
import axios from 'axios';

type Props = {
  time?: number;
  youTubeId: number;
};

// 入力データの検証ルールを定義
const schema = z.object({
  title: z.string(),
});

// 新規投稿モーダル
const NewBookmarkModal: React.FC<Props> = ({ time = 0, youTubeId }) => {
  const newBookmarkModal = useNewBookmarkModal();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    // 入力値の検証
    resolver: zodResolver(schema),
  });
  // 送信
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      // 新規投稿
      await axios.post('/api/bookmark', {
        title: data.title,
        startAt: time,
        videoId: youTubeId,
      });

      toast({
        title: 'タイムスタンプを登録しました',
        variant: 'success',
      });
      newBookmarkModal.onClose();
    } catch (error) {
      toast({
        title: 'タイムスタンプの登録に失敗しました',
        variant: 'destructive',
      });
      return;
    } finally {
      setLoading(false);
    }
  };

  // モーダルの内容
  const getBodyContent = (): React.ReactElement => {
    return (
      <div className='flex flex-col gap-4'>
        <Input
          id='title'
          label='タイトル'
          type='title'
          disabled={loading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  };

  return (
    <Modal
      disabled={loading}
      isOpen={newBookmarkModal.isOpen}
      title='登録する'
      primaryLabel={loading ? '登録中...' : '登録する'}
      onSubmit={handleSubmit(onSubmit)}
      onClose={newBookmarkModal.onClose}
      body={getBodyContent()}
    />
  );
};

export default NewBookmarkModal;
