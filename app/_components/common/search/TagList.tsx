import { OptionType } from '@/types/types';
import React from 'react';

type TagListProps = {
  handleSearch: (tag: OptionType) => void;
  tagOptions: OptionType[];
};
const TagList: React.FC<TagListProps> = ({ handleSearch, tagOptions }) => {
  return (
    <div className='mt-3 mb-5 flex flex-wrap p-2'>
      {tagOptions.map((tag) => (
        <div onClick={() => handleSearch(tag)} key={tag.value}>
          <p className='bg-white text-gray-800 p-4 rounded-md text-xs mr-2 mb-2 cursor-pointer'>
            {tag.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TagList;
