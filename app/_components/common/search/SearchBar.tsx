import { useState } from 'react';

type Props = {
  handleSearch: (tag: string) => void;
  bgColor?: string;
};

export default function SearchBar({
  bgColor = 'bg-red-600',
  handleSearch,
}: Props) {
  const [title, setTitle] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    handleSearch(title);
  };

  return (
    <div className='space-y-8'>
      <div className='flex items-center p-6 space-x-5 bg-white rounded-xl shadow-lg hover:shadow-xl'>
        <div className='flex bg-gray-100 p-4 w-full space-x-4 rounded-lg'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 opacity-30'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
          <input
            className='bg-gray-100 outline-none w-full'
            type='text'
            placeholder='title or keyword...'
            value={title}
            onChange={handleChange}
          />
        </div>
        <div
          onClick={handleClick}
          className={`${bgColor} py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer`}
        >
          Search
        </div>
      </div>
    </div>
  );
}
