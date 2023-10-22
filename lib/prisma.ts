import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// PrismaClient をインスタンス化し、それをグローバルオブジェクトに保存する
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  const globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };

  // PrismaClient がグローバルオブジェクトに存在しない場合のみ、インスタンス化する
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  // PrismaClient がグローバルオブジェクトに存在する場合は、
  // 同じインスタンスを再度使用し、余分な PrismaClient インスタンスを生成しないようにする
  prisma = globalWithPrisma.prisma;
}

export default prisma;
