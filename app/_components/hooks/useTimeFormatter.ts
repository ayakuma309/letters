import { useMemo } from 'react';

const useTimeFormatter = (secValue: number) => {
  return useMemo(() => {
    const secInt = parseInt(secValue.toString(), 10);
    const hours = Math.floor(secInt / 3600);
    const minutes = Math.floor((secInt - hours * 3600) / 60);
    const seconds = secInt - hours * 3600 - minutes * 60;

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSecounds = seconds < 10 ? '0' + seconds : seconds;

    if (formattedHours == '00') {
      return formattedMinutes + ':' + formattedSecounds;
    }

    return formattedHours + ':' + formattedMinutes + ':' + formattedSecounds;
  }, [secValue]);
};

export default useTimeFormatter;
