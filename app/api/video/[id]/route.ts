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
      return new NextResponse('投稿IDが必要です', { status: 400 });
    }
    const id = parseInt(params.id);

    // 投稿の削除
    const response = await prisma.youTube.delete({
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

export async function GET(
  request: Request,
  response: NextResponse,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new NextResponse('投稿IDが必要です', { status: 400 });
    }
    const id = parseInt(params.id);

    const post = await prisma.youTube.findUnique({
      where: {
        id: id,
      },
      include: {
        tags: true,
      },
    });

    if (!post) {
      return new NextResponse('投稿が見つかりません', { status: 404 });
    }
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return new NextResponse('Error', { status: 500 });
  }
}
