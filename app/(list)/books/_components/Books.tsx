'use client';
import SearchBar from '@/app/_components/common/search/SearchBar';
import { useBookTagSearch } from '@/app/_components/hooks/useSearch';
import { BookType } from '@/types/types';
import Book from './Book';

type Props = {
  books: BookType[];
};

export default function Books({ books }: Props) {
  const { searchResults, handleSearch } = useBookTagSearch(books);
  return (
    <>
      <SearchBar handleSearch={handleSearch} bgColor='bg-orange-500' />
      <div className='flex flex-wrap items-center justify-center'>
        {searchResults &&
          searchResults.map((book) => <Book key={book.id} book={book} />)}
      </div>
    </>
  );
}
