import { NextResponse } from 'next/server';
import getCurrentUser from '@/actions/getCurrentUser';
import createVideoBook from '@/actions/createVideoBook';

// 新規投稿
export async function POST(request: Request) {
  try {
    // リクエストボディの取得
    const body = await request.json();
    const { videoId, bookId } = body;

    // ログインユーザーの取得
    const currentUser = await getCurrentUser();

    // ログインしていない場合はエラー
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('認証していません', { status: 401 });
    }

    // 新規投稿
    const response = await createVideoBook({
      videoId,
      bookId,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return new NextResponse('Error', { status: 500 });
  }
}
