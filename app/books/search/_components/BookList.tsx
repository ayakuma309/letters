import { BookSearchResultType } from '@/types/types';
import BookItem from './BookItem';

function BookList({
  data,
  error,
}: {
  data: BookSearchResultType[] | null;
  error: any;
}) {
  return (
    <div>
      {error && <div>データの読み込み中にエラーが発生しました。</div>}
      {data && (
        <div>
          {data.map((book: BookSearchResultType) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;
