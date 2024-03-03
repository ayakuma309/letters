// constants/menu.ts

import { ImYoutube2 } from 'react-icons/im';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { SiQiita } from 'react-icons/si';
import { FaSearch } from 'react-icons/fa';
import { GiArchiveResearch } from 'react-icons/gi';
import { FaRegStickyNote } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
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
