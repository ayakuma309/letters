import axios from 'axios';
import { AxiosResponse } from 'axios';

const KEY = process.env.NEXT_APP_YOUTUBE_API_KEY;

const params = {
  part: 'snippet',
  maxResults: 20,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
};

// YouTube API レスポンスの型定義
interface YouTubeResponse {
  items: {
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
    };
  }[]; // 本当はYouTube API のレスポンスに合わせて型を定義
}

export const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: params,
});

//検索リスト取得 // fetchSearchData 関数の型定義
export const fetchSearchData = async (
  query: string
): Promise<AxiosResponse<YouTubeResponse>> => {
  return await youtube.get('/search', {
    params: {
      ...params,
      q: query,
    },
  });
};
