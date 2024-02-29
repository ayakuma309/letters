'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/app/_components/ui/card';
import LoginButton from './LoginButton';

export default function Login() {
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
}
