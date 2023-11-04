import { fetchSearchData } from '@/lib/youtube';

const getFetchYouTubeVideo = async (query: string) => {
  try {
    const res = await fetchSearchData(query);
    const videos = res.data.items;
    return videos;
  } catch (error) {
    console.log(error);
    return { videos: [] };
  }
};

export default getFetchYouTubeVideo;
