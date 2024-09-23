import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { twMerge } from "tailwind-merge";

dayjs.extend(relativeTime);

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const toFromNow = (date: number | Date) => {
  return dayjs(date).fromNow();
};

export const toSlashDateString = (date: number | Date) => {
  return dayjs(date).format("YYYY年M月D日 dddd HH:mm:ss");
};

export const prettyDate = (date: number | Date) => {
  return dayjs(date).format("M月 D，YYYY");
};

/* 根据当前时间显示不同的问候语 */
export const sayHi = () => {
  const hour = dayjs().hour();

  if (hour < 12) {
    return "Good Morning~";
  } else if (hour < 18) {
    return "Good Afternoon~";
  } else if (hour < 21) {
    return "Good Evening~";
  } else {
    return "Good Night~";
  }
};
