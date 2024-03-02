import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('ja');

export const formatTimeElapsed = (pubDate: string) => {
  const currentDate = dayjs();
  const date = dayjs(pubDate);

  const secondsDiff = currentDate.diff(date, 'second');

  if (secondsDiff < 60) {
    return `${secondsDiff} 秒前`;
  } else if (secondsDiff < 3600) {
    const minutesDiff = Math.floor(secondsDiff / 60);
    return `${minutesDiff} 分前`;
  } else if (secondsDiff < 86400) {
    const hoursDiff = Math.floor(secondsDiff / 3600);
    return `約${hoursDiff}${hoursDiff === 1 ? '時間' : '時間'}前`;
  } else {
    return date.from(currentDate);
  }
};
