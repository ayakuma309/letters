'use client';

import React, { useState } from 'react';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// 日本語の設定
import ja from 'date-fns/locale/ja';
import TagSelect from './TagSelect';

interface VideoGridItemProps {
  id: string;
  src: string;
  title: string;
}

interface OptionType {
  value: string;
  label: string;
}

const VideoGridItem: React.FC<VideoGridItemProps> = ({ id, src, title }) => {
  const [selectedTags, setSelectedTags] = useState<OptionType[]>([]);
  // 今日の日付を定義
  const initialDate = new Date();
  const [date, setDate] = React.useState(initialDate);
  registerLocale('ja', ja);

  return (
    <div
      className='flex flex-col w-96 my-10 p-10 rounded-md shadow-lg bg-orange-100'
      key={id}
    >
      <img src={src} alt={title} />
      <span>{title}</span>
      <form>
        <DatePicker
          dateFormat='yyyy/MM/dd'
          selected={date}
          locale='ja'
          onChange={(selectedDate) => {
            setDate(selectedDate || initialDate);
          }}
        />
        <TagSelect
          value={selectedTags}
          onChange={(tags) => setSelectedTags(tags)}
        />
        <button
          type='submit'
          className='mt-2 bg-gray-700 hover:bg-green-700 duration-200 text-white font-semibold py-2 px-4 rounded'
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default VideoGridItem;
