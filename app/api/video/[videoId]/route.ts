import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import getCurrentUser from '@/actions/getCurrentUser';

// 投稿削除
export async function DELETE(
  request: Request,
  { params }: { params: { videoId: string } }
) {
  try {
    // ログインユーザーの取得
    const currentUser = await getCurrentUser();

    // ログインしていない場合はエラー
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('認証していません', { status: 401 });
    }

    if (!params.videoId) {
      return new NextResponse('投稿IDが必要です', { status: 400 });
    }
    const videoId = parseInt(params.videoId);

    // 投稿の削除
    const response = await prisma.youTube.delete({
      where: {
        id: videoId,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return new NextResponse('Error', { status: 500 });
  }
}
