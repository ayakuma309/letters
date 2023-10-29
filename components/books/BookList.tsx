import { Book } from '@/types/types';
import BookItem from './BookItem';

function BookList({ data, error }: { data: Book[] | null; error: any }) {
  return (
    <div>
      {error && <div>データの読み込み中にエラーが発生しました。</div>}
      {data && (
        <div>
          {data.map((book: Book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;
