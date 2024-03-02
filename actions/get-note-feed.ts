import { formatTimeElapsed } from '@/lib/format-time-elapsed';
import Parser from 'rss-parser';

export interface RssFeedPostType {
  slug: string;
  title: string;
  date: string;
  'note:creatorImage'?: string;
  'note:creatorName'?: string;
  'media:thumbnail'?: string;
}

const getRssFeed = async (
  url: string,
  title: string
): Promise<{
  link?: string;
  pagePosts: RssFeedPostType[];
  title: string;
}> => {
  try {
    const feed = await new Parser({
      customFields: {
        item: ['note:creatorImage', 'note:creatorName', 'media:thumbnail'],
      },
    }).parseURL(url);
    const link = feed.link ?? '';
    const pagePosts: RssFeedPostType[] = feed.items
      .sort((a, b) => {
        const dateA = a.pubDate ? new Date(a.pubDate) : new Date();
        const dateB = b.pubDate ? new Date(b.pubDate) : new Date();
        return dateB.getTime() - dateA.getTime();
      })
      .map((item) => ({
        slug: item.link ?? url,
        title: item.title ?? '',
        date: item.pubDate ? formatTimeElapsed(item.pubDate) : '',
        'note:creatorImage': item['note:creatorImage'] ?? '',
        'note:creatorName': item['note:creatorName'] ?? '',
        'media:thumbnail': item['media:thumbnail'] ?? '',
      }));
    return {
      link,
      pagePosts,
      title,
    };
  } catch (error) {
    console.error(`Error fetching or parsing RSS feed for ${url}:`, error);
    return {
      pagePosts: [],
      title,
    };
  }
};

const noteFeedUrls = [
  {
    url: 'https://note.com/runteq_official/m/m3fc7eadd5d43/rss',
    title: '公式',
  },
  { url: 'https://note.com/hi_kuma8888/m/m12537f774106/rss', title: '転職' },
  { url: 'https://note.com/hi_kuma8888/m/md3d7194d19a7/rss', title: '転職後' },
  {
    url: 'https://note.com/hi_kuma8888/m/mad170fdee7d0/rss',
    title: '自己紹介',
  },
  {
    url: 'https://note.com/hi_kuma8888/m/m3ca63b1a13e5/rss',
    title: 'すごい！',
  },
  {
    url: 'https://note.com/hi_kuma8888/m/m79e019a9edef/rss',
    title: '学校生活について',
  },
];

export const getNoteRssFeeds = async () => {
  const feedPromises = noteFeedUrls.map(({ url, title }) =>
    getRssFeed(url, title)
  );
  return Promise.all(feedPromises);
};
