import getCurrentUser from '@/actions/getCurrentUser';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// 投稿削除
export async function DELETE(
  request: Request,
  { params }: { params: { bookmarkId: string } }
) {
  try {
    // ログインユーザーの取得
    const currentUser = await getCurrentUser();

    // ログインしていない場合はエラー
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('認証していません', { status: 401 });
    }

    if (!params.bookmarkId) {
      return new NextResponse('投稿IDが必要です', { status: 400 });
    }
    const id = params.bookmarkId;

    // 投稿の削除
    const response = await prisma.bookmark.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return new NextResponse('Error', { status: 500 });
  }
}
