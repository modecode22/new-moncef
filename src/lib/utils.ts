import { parse, formatDistanceToNow } from "date-fns";


export const howManyDaysAgo = (date: string): string => {
      const parsedDate = parse(date, "dd-MM-yyyy", new Date());

      // Get the distance to now
      const distance = formatDistanceToNow(parsedDate);

      return `${distance} ago`;
};


