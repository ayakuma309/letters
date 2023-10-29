import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import getCurrentUser from '@/actions/getCurrentUser';

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
      return new NextResponse('投稿IDが必要です', { status: 400 });
    }
    const id = parseInt(params.id);

    // 投稿の削除
    const response = await prisma.qiita.delete({
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
