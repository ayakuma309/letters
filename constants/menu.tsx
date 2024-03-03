// constants/menu.ts

import { FaRegStickyNote, FaSearch } from 'react-icons/fa';
import {
  GiArchiveResearch,
  GiPerspectiveDiceSixFacesRandom,
} from 'react-icons/gi';
import { ImBooks, ImYoutube2 } from 'react-icons/im';
import { SiQiita } from 'react-icons/si';
import { TbDeviceDesktopSearch } from 'react-icons/tb';

export const Menus = [
  { title: 'youtube', path: '/videos', icon: <ImYoutube2 /> },
  {
    title: 'random',
    path: '/random',
    icon: <GiPerspectiveDiceSixFacesRandom />,
  },
  { title: 'Qiita', path: '/qiitas', icon: <SiQiita /> },
  { title: 'Book', path: '/books', icon: <ImBooks /> },
  { title: 'Note', path: '/note', icon: <FaRegStickyNote /> },
];

export const LoginAfterMenus = [
  {
    title: 'Youtube検索',
    path: '/videos/search',
    icon: <TbDeviceDesktopSearch />,
  },
  { title: 'Qiita検索', path: '/qiitas/search', icon: <FaSearch /> },
  { title: 'Book検索', path: '/books/search', icon: <GiArchiveResearch /> },
];
