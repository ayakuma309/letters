import { toast } from '@/components/ui/use-toast';
import TagSelect from '@/components/videos/search/TagSelect';
import { QiitaItemsProps } from '@/types/qiitaTypes';
import { OptionType } from '@/types/types';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import specTag from '@/json/specTag.json';

type Props = {
  item: QiitaItemsProps;
};

const QiitaItem: React.FC<Props> = ({ item }) => {
  const [selectedTags, setSelectedTags] = useState<OptionType[]>([]);
  const { data: session } = useSession();
  const router = useRouter();

  // Qiita記事をDBに保存する
  const handleSubmitQiita = async () => {
    try {
      // Qiita記事のタグ名を取得
      const selectedTagNames = selectedTags.map((tag) => tag.label);
      // 投稿
      await axios.post('/api/qiita', {
        qiitaId: item.id,
        title: item.title,
        url: item.url,
        profileImageUrl: item.user.profile_image_url,
        tags: selectedTagNames,
      });
      router.push('/qiitas');
      toast({
        title: 'Qiita記事を保存しました',
        variant: 'success',
      });
    } catch (err) {
      toast({
        title: 'Qiita記事の保存に失敗しました',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='mb-3 py-3 px-8  rounded-lg shadow-lg w-10/12'>
      <p className='text-center font-bold  text-blue-800 mb-4'>
        <a href={item.url} target='_blank' rel='noopener noreferrer'>
          {item.title}
        </a>
      </p>
      <div className='flex flex-wrap items-center justify-center'>
        {item.tags.length > 0 &&
          item.tags.map((tag, index) => (
            <span
              key={index}
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
            >
              {tag.name}
            </span>
          ))}
      </div>
      <div className='flex items-center mt-3 justify-between'>
        <div>
          <img
            className='w-10 h-10 rounded-full mr-4'
            alt='User Avatar'
            src={item.user.profile_image_url}
          />
          <p className='text-gray-700'>{item.user.name}</p>
        </div>
        {session?.user && (
          <>
            <TagSelect
              value={selectedTags}
              onChange={(tags) => setSelectedTags(tags)}
              tagOpt={specTag}
            />
            <button
              type='submit'
              className='mt-2 bg-gray-700 hover:bg-green-800 duration-200 text-white font-semibold py-2 px-3 rounded-lg hover:shadow-lg block'
              onClick={handleSubmitQiita}
            >
              <BsBookmark />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QiitaItem;
