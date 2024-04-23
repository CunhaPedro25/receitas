export interface Restaurant {
  image: string;
  name: string;
  description: { [key: string]: string };
  address: string;
  latitude: number;
  longitude: number;
  categories: string[];
}
