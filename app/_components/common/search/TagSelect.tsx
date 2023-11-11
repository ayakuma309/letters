import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { OptionType } from '@/types/types';

interface Props {
  onChange: (selectedTags: OptionType[]) => void;
  value: OptionType[];
  tagOpt: OptionType[];
}

export default async function TagSelect({ onChange, value, tagOpt }: Props) {
  const [selectedTags, setSelectedTags] = useState<OptionType[]>(value);

  useEffect(() => {
    setSelectedTags(value);
  }, [value]);

  return (
    <Select
      isMulti
      options={tagOpt}
      value={selectedTags}
      onChange={(selectedTags) => {
        setSelectedTags(selectedTags as OptionType[]);
        onChange(selectedTags as OptionType[]);
      }}
      placeholder='タグを選択してください'
    />
  );
}
