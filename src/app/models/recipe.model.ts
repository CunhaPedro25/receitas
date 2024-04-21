export interface Recipe {
  image: string;
  name: string;
  description: { [key: string]: string };
  ingredients: { name: string; quantity: string }[];
  preparation: { [key: string]: string };
  categories: string[];
}
