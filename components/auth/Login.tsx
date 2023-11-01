'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import LoginButton from '@/components/auth/LoginButton';

// ログイン
const Login = () => {
  return (
    <Card className='max-w-[500px] mx-auto'>
      <CardHeader>
        <CardTitle className='text-xl text-center'>ログイン</CardTitle>
        <CardDescription className='text-center'>
          ログインが必要です
        </CardDescription>
      </CardHeader>
      <CardContent className='text-center'>
        <LoginButton />
      </CardContent>
    </Card>
  );
};

export default Login;
