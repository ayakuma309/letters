'use client';

import React from 'react';
import { User } from '@prisma/client';

import { ImYoutube2 } from 'react-icons/im';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { IoMdLogIn } from 'react-icons/io';
import { IoMdLogOut } from 'react-icons/io';
import { SiQiita } from 'react-icons/si';
import { FaSearch } from 'react-icons/fa';
import { BiSolidBookAlt } from 'react-icons/bi';
import { GiArchiveResearch } from 'react-icons/gi';
import { FaSearchPlus } from 'react-icons/fa';
import MenuItems from './MenuItems';

type MenuProps = {
  currentUser: User | null;
};

const Menu: React.FC<MenuProps> = ({ currentUser }) => {
  const Menus = [
    { title: 'youtube', path: '/posts_page', src: <ImYoutube2 /> },
    {
      title: 'random',
      path: '/random_page',
      src: <GiPerspectiveDiceSixFacesRandom />,
    },
    { title: 'Qiita', path: '/qiitas', src: <SiQiita /> },
    { title: 'Book', path: '/books', src: <BiSolidBookAlt /> },
    { title: 'LogIn', path: '/login', src: <IoMdLogIn /> },
  ];

  //ログイン後のメニュー
  const LoginAfterMenus = [
    { title: 'Youtube検索', path: '/search', src: <FaSearchPlus /> },
    { title: 'Qiita検索', path: '/qiita_search', src: <FaSearch /> },
    { title: 'Book検索', path: '/book_search', src: <GiArchiveResearch /> },
  ];

  return (
    <>
      {currentUser ? (
        <>
          <MenuItems menuItems={LoginAfterMenus} />
          <li
            // onClick={logout}
            className='flex items-center gap-x-4 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
          >
            <IoMdLogOut />
            {/* <span>
              logout
            </span> */}
          </li>
        </>
      ) : (
        <MenuItems menuItems={Menus} />
      )}
    </>
  );
};

export default Menu;
