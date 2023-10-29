import React, { useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import BookTagSelect from './BookTagSelect';
import { Book, OptionType } from '@/types/types';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';

type Props = {
  book: Book;
};

const BookItem: React.FC<Props> = ({ book }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [selectedTags, setSelectedTags] = useState<OptionType[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // タグのラベルのみを取得
      const selectedTagNames = selectedTags.map((tag) => tag.label);

      // 本の投稿
      await axios.post('/api/book', {
        bookId: book.id,
        title: book.title,
        image: book.image,
        infoLink: book.infoLink,
        tags: selectedTagNames,
      });

      setSelectedTags([]);
      router.push('/books');
      router.refresh();
      toast({
        title: '投稿しました',
        variant: 'success',
      });
    } catch (err) {
      toast({
        title: '投稿に失敗しました',
        variant: 'destructive',
      });
    }
  };
  return (
    <div className='mb-3 py-3 px-8  rounded-lg shadow-lg w-10/12'>
      <div className='text-center font-bold  text-blue-800 mb-4'>
        {book.image ? <img src={book.image} /> : <div>No Image</div>}
      </div>
      <div className='flex items-center mt-3 justify-between'>
        <div>{book.description}</div>
      </div>
      {session?.user && (
        <form onSubmit={handleSubmit}>
          <BookTagSelect
            value={selectedTags}
            onChange={(tags) => setSelectedTags(tags)}
          />
          <button
            type='submit'
            className='mt-2 bg-gray-700 hover:bg-green-800 duration-200 text-white font-semibold py-2 px-3 rounded-lg hover:shadow-lg block'
          >
            <BsBookmark />
          </button>
        </form>
      )}
    </div>
  );
};

export default BookItem;
