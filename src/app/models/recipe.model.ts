export interface Recipe {
  image: string;
  name: string;
  description: { [key: string]: string };
  ingredients: { [key: string]: string[] };
  preparation: { [key: string]: string[] };
  categories: string[];
}
