'use client';

import { SessionProvider } from 'next-auth/react';

type AuthContextProps = {
  children: React.ReactNode;
};

// 認証コンテキスト
function AuthContext({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AuthContext;
