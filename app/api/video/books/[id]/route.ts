import getCurrentUser from '@/actions/getCurrentUser';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
// 投稿削除
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // ログインユーザーの取得
    const currentUser = await getCurrentUser();

    // ログインしていない場合はエラー
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('認証していません', { status: 401 });
    }

    if (!params.id) {
      return new NextResponse('Idが必要です', { status: 400 });
    }
    // 投稿の削除
    const deletedVideoBook = await prisma.youTubeBook.delete({
      where: {
        id: parseInt(params.id),
      },
    });

    return NextResponse.json(deletedVideoBook, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse('Error', { status: 500 });
  }
}
