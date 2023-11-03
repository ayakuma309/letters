import NextAuth, { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/lib/prisma';

// NextAuth設定
export const authOptions: NextAuthOptions = {
  // Prismaを使うための設定
  adapter: PrismaAdapter(prisma),
  // 認証プロバイダーの設定
  providers: [
    // Google認証
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
