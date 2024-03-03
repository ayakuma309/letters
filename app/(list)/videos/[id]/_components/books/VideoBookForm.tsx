import { Button } from '@/app/_components/ui/button';
import { toast } from '@/app/_components/ui/use-toast';
import { BookVideoType, OptionType } from '@/types/types';
import axios from 'axios';
import { useState } from 'react';
import Select from 'react-select';

type Props = {
  videoId: number;
  books: BookVideoType[];
};

export default function VideoBookForm({ videoId, books }: Props) {
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
}
