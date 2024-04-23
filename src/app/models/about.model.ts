export interface About {
  name: string;
  image: string;
  quick_info: QuickInfo[];
  contacts: Contact[];
  links: Link[];
}

export interface QuickInfo {
  type: string;
  value: { [key: string]: string };
}

export interface Contact {
  type: { [key: string]: string };
  value: string;
}

export interface Link {
  icon: string;
  name: string;
  path: string;
}
