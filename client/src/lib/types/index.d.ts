type Activity = {
  id: string;
  title: string;
  date: string; // ISO 8601 date-time string
  description: string;
  category: string;
  isCancelled: boolean;
  city: string;
  venue: string;
  latitude: number;
  longitude: number;
};
