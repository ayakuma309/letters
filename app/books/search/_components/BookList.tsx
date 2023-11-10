import { BookSearchResultType } from '@/types/types';
import BookItem from './BookItem';
import Loading from '@/app/loading';

function BookList({
  data,
  error,
  isLoading,
}: {
  data: BookSearchResultType[] | null;
  error: Error | null;
  isLoading: boolean;
}) {
  if (error) return <div>データの読み込み中にエラーが発生しました。</div>;
  if (isLoading) return <Loading />;
  return (
    <div>
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
