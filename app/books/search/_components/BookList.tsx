import { BookSearchResultType } from '@/types/types';
import BookItem from './BookItem';

export default function BookList({
  data,
  error,
}: {
  data: BookSearchResultType[] | null;
  error: Error | null;
}) {
  if (error) return <div>データの読み込み中にエラーが発生しました。</div>;
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
