type Props = {
  bgColor?: string;
};

export default function SearchBar({ bgColor = 'bg-red-600' }: Props) {
  return (
    <div className='space-y-8'>
      <div className='flex items-center p-6 space-x-5 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500'>
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
            className='bg-gray-100 outline-none'
            type='text'
            placeholder='title or keyword...'
          />
        </div>
        <div
          className={`${bgColor} py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer`}
        >
          <span>Search</span>
        </div>
      </div>
    </div>
  );
}
