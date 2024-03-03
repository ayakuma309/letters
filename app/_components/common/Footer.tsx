import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='py-5'>
      <div className='text-center text-sm'>
        &copy; {new Date().getFullYear()} Letters Tube
        <div className='flex justify-center'>
          <Link href={'/terms'} className='text-gray-500'>
            利用規約
          </Link>

          <Link href={'/privacy-policy'} className='text-gray-500 ml-3'>
            プライバシーポリシー
          </Link>
        </div>
        <p className='text-center text-xs leading-5 text-gray-500'>
          当サイトは個人で収集した情報をもとに作成されたサイトです。
        </p>
      </div>
    </footer>
  );
}
