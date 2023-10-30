import React, { useState } from 'react';
import Select from 'react-select';
import { BookVideoType, OptionType } from '@/types/types';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';
// import { toast } from '../ui/use-toast';

type VideoBooksProps = {
  videoId: number;
  books: BookVideoType[];
};

const VideoBooks: React.FC<VideoBooksProps> = ({ videoId, books }) => {
  const [selectedBooks, setSelectedBooks] = useState<OptionType[]>([]);

  // const router = useRouter();
  const BookList: OptionType[] = books.map((book) => ({
    value: book.id.toString(),
    label: book.title,
  }));

  const handleSubmitPost = async () => {
    const data = {
      videoId: videoId,
      bookIds: selectedBooks.map((book) => book.value),
    };
    console.log(data);
    // try {
    //   // 新規投稿
    //   const res = await axios.post('/api/video', data);

    //   if (res.status === 200) {
    //     toast({
    //       title: '投稿しました',
    //       variant: 'success',
    //     });
    //     router.push('/');
    //     router.refresh()
    //   }
    //   setSelectedBooks([]);
    // } catch (err) {
    //   console.log(err);
    //   toast({
    //     title: '投稿に失敗しました',
    //     variant: 'destructive',
    //   });
    // }
  };

  return (
    <form onSubmit={handleSubmitPost}>
      <Select
        isMulti
        options={BookList}
        value={selectedBooks}
        onChange={(selectedBooks) => {
          setSelectedBooks(selectedBooks as OptionType[]);
        }}
        placeholder='書籍を選択してください'
      />
      <button>登録</button>
    </form>
  );
};

export default VideoBooks;
