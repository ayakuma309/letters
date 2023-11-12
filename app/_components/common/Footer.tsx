import Link from 'next/link';
import React from 'react';
import MenuItem from '../sidebar/MenuItem';

export default function Footer() {
  return (
    <footer className='py-5'>
      <div className='text-center text-sm'>
        <div className='flex justify-center space-x-5'>
          <a
            href='https://twitter.com/ZCunkuma'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MenuItem
              title={'お問い合わせはこちらからお願いします'}
              src={
                <img src='https://img.icons8.com/fluent/30/000000/twitter.png' />
              }
            />
          </a>
        </div>
        Copyright © All rights reserved | Letters Tube
        <div className='flex justify-center'>
          <Link href={'/terms'} className='text-gray-400'>
            利用規約
          </Link>

          <Link href={'/privacy-policy'} className='text-gray-400 ml-3'>
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
