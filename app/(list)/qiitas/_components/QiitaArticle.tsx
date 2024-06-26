import { toast } from '@/app/_components/ui/use-toast';
import { QiitaArticleType } from '@/types/qiitaTypes';
import { Role } from '@prisma/client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { BsFillTrashFill } from 'react-icons/bs';

export default function QiitaArticle({
  id,
  url,
  title,
  tags,
  profileImageUrl,
}: QiitaArticleType) {
  const { data: session } = useSession();
  const handleDeleteQiita = async (id: number) => {
    const router = useRouter();

    const shouldDelete = window.confirm('この投稿を削除しますか？');
    if (!shouldDelete) return;
    try {
      await axios.delete(`/api/qiita/${id}`);
      toast({
        title: '削除しました',
        variant: 'success',
      });
      router.push('/qiitas');
      router.refresh();
    } catch (err) {
      toast({
        title: '削除に失敗しました',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='mb-3 py-3 px-8  rounded-md shadow-lg w-10/12'>
      <p className='text-center font-bold  text-blue-800 mb-4'>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {title}
        </a>
      </p>
      <div className='flex flex-wrap items-center justify-center'>
        {tags.length > 0 &&
          tags.map((tag, index) => (
            <span
              key={index}
              className='inline-block bg-gray-100 shadow-md rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
              style={{ backgroundColor: '#9bca77' }}
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
            src={profileImageUrl}
          />
        </div>
        {session?.user.role === Role.ADMIN && (
          <button
            className='p-1 rounded-md font-bold text-2xl'
            onClick={() => handleDeleteQiita(id)}
          >
            <BsFillTrashFill />
          </button>
        )}
      </div>
    </div>
  );
}
