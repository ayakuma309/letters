// constants/menu.ts

import { ImYoutube2 } from 'react-icons/im';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { SiQiita } from 'react-icons/si';
import { FaSearch } from 'react-icons/fa';
import { BiSolidBookAlt } from 'react-icons/bi';
import { GiArchiveResearch } from 'react-icons/gi';
import { FaSearchPlus } from 'react-icons/fa';

export const Menus = [
  { title: 'youtube', path: '/videos', src: <ImYoutube2 /> },
  {
    title: 'random',
    path: '/random',
    src: <GiPerspectiveDiceSixFacesRandom />,
  },
  { title: 'Qiita', path: '/qiitas', src: <SiQiita /> },
  { title: 'Book', path: '/books', src: <BiSolidBookAlt /> },
];

export const LoginAfterMenus = [
  { title: 'Youtube検索', path: '/videos/search', src: <FaSearchPlus /> },
  { title: 'Qiita検索', path: '/qiitas/search', src: <FaSearch /> },
  { title: 'Book検索', path: '/books/search', src: <GiArchiveResearch /> },
];
