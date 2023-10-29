// アプリ内で利用するためのQiita記事 型定義
export type QiitaItemsProps = Pick<
  QiitaItemResponse,
  'id' | 'title' | 'user' | 'tags' | 'url'
>; // Pick で利用したいプロパティのみを抽出

export interface QiitaArticleProps {
  id: number;
  title: string;
  url: string;
  profileImageUrl: string;
  tags: {
    name: string;
  }[];
}

// Qiita Api レスポンスの型定義
export interface QiitaItemResponse {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: {
    created_at: string;
    description: string;
    name: string;
    private: boolean;
    updated_at: string;
    url_name: string;
  };
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  tags: [
    {
      name: string;
      versions: string[];
    },
  ];
  title: string;
  updated_at: string;
  url: string;
  user: {
    description: string;
    facebook_id: string;
    followees_count: number;
    followers_count: number;
    github_login_name: string;
    id: string;
    items_count: number;
    linkedin_id: string;
    location: string;
    name: string;
    organization: string;
    permanent_id: number;
    profile_image_url: string;
    team_only: boolean;
    twitter_screen_name: string;
    website_url: string;
  };
  page_views_count: number;
  team_membership: {
    name: string;
  };
}
