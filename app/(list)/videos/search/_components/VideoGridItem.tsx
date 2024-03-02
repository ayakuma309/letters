'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// 日本語の設定
import ja from 'date-fns/locale/ja';
import axios from 'axios';
import { toast } from '@/app/_components/ui/use-toast';
import { OptionType } from '@/types/types';
import { videoTags } from '@/constants/videoTag';
import TagSelect from '@/app/_components/common/search/TagSelect';
interface Props {
  id: string;
  src: string;
  title: string;
}

export default async function VideoGridItem({ id, src, title }: Props) {
  const [selectedTags, setSelectedTags] = useState<OptionType[]>([]);
  // 今日の日付を定義
  const initialDate = new Date();
  const [date, setDate] = useState(initialDate);
  registerLocale('ja', ja);
  const router = useRouter();

  const handleSubmitPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const selectedTagNames = selectedTags.map((tag) => tag.label);

      // 新規投稿
      const res = await axios.post('/api/video', {
        videoId: id,
        url: src,
        title: title,
        releaseAt: date,
        tags: selectedTagNames,
      });

      if (res.status === 200) {
        toast({
          title: '投稿しました',
          variant: 'success',
        });
        router.refresh();
        router.push('/');
      }
      // 投稿後、投稿フォームのテキストエリアをクリア
      setSelectedTags([]);
    } catch (err) {
      console.log(err);
      toast({
        title: '投稿に失敗しました',
        variant: 'destructive',
      });
    }
  };

  return (
    <div
      className='flex flex-col w-96 my-10 p-10 rounded-md shadow-lg bg-orange-100'
      key={id}
    >
      <img src={src} alt={title} />
      <span>{title}</span>
      <form onSubmit={handleSubmitPost}>
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
          tagOpt={videoTags}
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
}
