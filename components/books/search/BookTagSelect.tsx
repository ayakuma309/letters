import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import bookTagOptions from '@/json/bookTag.json';

interface OptionType {
  value: string;
  label: string;
}

interface BookTagSelectProps {
  onChange: (selectedTags: OptionType[]) => void;
  value: OptionType[];
}

const BookTagSelect: React.FC<BookTagSelectProps> = ({ onChange, value }) => {
  const [selectedTags, setSelectedTags] = useState<OptionType[]>(value);

  useEffect(() => {
    setSelectedTags(value);
  }, [value]);

  return (
    <Select
      isMulti
      options={bookTagOptions}
      value={selectedTags}
      onChange={(selectedTags) => {
        setSelectedTags(selectedTags as OptionType[]);
        onChange(selectedTags as OptionType[]);
      }}
      placeholder='タグを選択してください'
    />
  );
};

export default BookTagSelect;
