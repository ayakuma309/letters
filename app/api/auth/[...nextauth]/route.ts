import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions, Session } from 'next-auth';

import prisma from '@/lib/prisma';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';

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
  callbacks: {
    jwt: async ({ token, user }: { token: JWT; user: any }) => {
      if (user) token.role = user.role;
      return token;
    },
    session: ({ session, token }: { session: Session; token: JWT }) => {
      session.user.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
