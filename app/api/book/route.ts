import createBook from '@/actions/createBook';
import getCurrentUser from '@/actions/getCurrentUser';
import { NextResponse } from 'next/server';
// import createBook from '@/actions/createBook';

// 新規投稿
export async function POST(request: Request) {
  try {
    // リクエストボディの取得
    const body = await request.json();
    const { bookId, title, image, infoLink, tags } = body;
    // ログインユーザーの取得
    const currentUser = await getCurrentUser();

    // ログインしていない場合はエラー
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('認証していません', { status: 401 });
    }

    // 新規投稿
    const response = await createBook({
      bookId,
      title,
      image,
      infoLink,
      tags,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return new NextResponse('Error', { status: 500 });
  }
}
