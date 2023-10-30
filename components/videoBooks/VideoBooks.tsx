import React, { useState } from 'react';
import Select from 'react-select';
import { BookVideoType, OptionType } from '@/types/types';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from '../ui/use-toast';

type VideoBooksProps = {
  videoId: number;
  books: BookVideoType[];
};

const VideoBooks: React.FC<VideoBooksProps> = ({ videoId, books }) => {
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
        router.push('/');
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
    <form onSubmit={handleSubmitPost}>
      <Select
        id='selectbox'
        options={BookList}
        value={selectedBook}
        onChange={(selectedBooks) => {
          setSelectedBook(selectedBooks as OptionType);
        }}
        placeholder='書籍を選択してください'
      />
      <button>登録</button>
    </form>
  );
};

export default VideoBooks;
