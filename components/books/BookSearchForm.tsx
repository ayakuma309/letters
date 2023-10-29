import React, { useState } from 'react';

function BookSearchForm({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleFormSubmit} className='mt-12 mb-6'>
      <input
        type='text'
        placeholder='例: React 書籍検索'
        value={query}
        className='shadow appearance-none border rounded w-10/12 py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <button
        type='submit'
        className='text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        検索
      </button>
    </form>
  );
}

export default BookSearchForm;
