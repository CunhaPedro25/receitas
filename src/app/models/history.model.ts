export interface History {
  image: string;
  title: string;
  paragraphs: { [key: string]: string[] };
  sources: Source[];
}

export interface Source {
  title: string;
  path: string;
}
