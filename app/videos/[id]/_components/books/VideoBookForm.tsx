import React, { useState } from 'react';
import Select from 'react-select';
import { BookVideoType, OptionType } from '@/types/types';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from '@/app/_components/ui/use-toast';
import { Button } from '@/app/_components/ui/button';

type VideoBookFormProps = {
  videoId: number;
  books: BookVideoType[];
};

const VideoBookForm: React.FC<VideoBookFormProps> = ({ videoId, books }) => {
  const router = useRouter();
  const [selectedBook, setSelectedBook] = useState<OptionType>();

  const BookList: OptionType[] = books.map((book) => ({
    value: book.id.toString(),
    label: book.title,
  }));

  const handleSubmitPost = async () => {
    const data = {
      videoId: videoId,
      bookId: selectedBook?.value,
    };
    try {
      // 新規投稿
      const res = await axios.post('/api/video/books', data);

      if (res.status === 200) {
        toast({
          title: '投稿しました',
          variant: 'success',
        });
        router.push(`videos/${videoId}`);
        router.refresh();
      }
    } catch (err) {
      console.log(err);
      toast({
        title: '投稿に失敗しました',
        variant: 'destructive',
      });
    }
  };

  return (
    <form onSubmit={handleSubmitPost} className='flex justify-center my-5'>
      <Select
        id='selectbox'
        options={BookList}
        value={selectedBook}
        onChange={(selectedBooks) => {
          setSelectedBook(selectedBooks as OptionType);
        }}
        placeholder='書籍を選択してください'
      />
      <Button>登録</Button>
    </form>
  );
};

export default VideoBookForm;
