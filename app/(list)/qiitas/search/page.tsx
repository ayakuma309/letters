import getCurrentUser from '@/actions/getCurrentUser';
import Search from '@/app/(list)/qiitas/search/_components/Search';
import { Role } from '@prisma/client';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Qiita記事検索',
  description: 'Qiita記事検索',
};

export default async function Page() {
  // 認証情報取得
  const session = await getCurrentUser();
  // ログインしていない場合はログイン画面にリダイレクト
  if (!session || session.role !== Role.ADMIN) {
    redirect('/');
  }
  return (
    <div className='sm:ml-20 mx-auto mt-10'>
      <Search />
    </div>
  );
}
