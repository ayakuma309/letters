import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import tagOptions from '@/json/tag.json';

interface OptionType {
  value: string;
  label: string;
}

interface TagSelectProps {
  onChange: (selectedTags: OptionType[]) => void;
  value: OptionType[];
}

const TagSelect: React.FC<TagSelectProps> = ({ onChange, value }) => {
  const [selectedTags, setSelectedTags] = useState<OptionType[]>(value);

  useEffect(() => {
    setSelectedTags(value);
  }, [value]);

  return (
    <Select
      isMulti
      options={tagOptions}
      value={selectedTags}
      onChange={(selectedTags) => {
        setSelectedTags(selectedTags as OptionType[]);
        onChange(selectedTags as OptionType[]);
      }}
      placeholder='タグを選択してください'
    />
  );
};

export default TagSelect;
