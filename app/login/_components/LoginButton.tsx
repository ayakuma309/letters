'use client';

import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/app/_components/ui/button';
import { useToast } from '@/app/_components/ui/use-toast';

// ログインボタン
const LoginButton = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      toast({
        title: 'ログインしました',
        variant: 'success',
      });

      router.push('/');
    }
  }, [router, session?.user, toast]);

  const handleLogin = async () => {
    try {
      const result = await signIn('google');

      if (result?.error) {
        toast({
          title: 'ログインに失敗しました',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'ログインに失敗しました',
        variant: 'destructive',
      });
    }
  };

  return (
    <Button variant='outline' onClick={handleLogin}>
      <FcGoogle className='mr-2 h-4 w-4' />
      Sign in with Google
    </Button>
  );
};

export default LoginButton;
