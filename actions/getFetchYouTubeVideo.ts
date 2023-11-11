import { fetchSearchData } from '@/lib/youtube';
import { VideoResponseProps } from '@/types/types';

const getFetchYouTubeVideo = async (query: string) => {
  try {
    const res = await fetchSearchData(query);
    const videos: VideoResponseProps[] = res.data.items;
    return videos;
  } catch (error) {
    console.error('Error fetching YouTubeVideo data:', error);
    return null;
  }
};

export default getFetchYouTubeVideo;
