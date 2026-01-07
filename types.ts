
export enum PageType {
  HOME = 'home',
  PROJECTS = 'projects',
  TUTORIALS = 'tutorials',
  ABOUT = 'about'
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  challenges: string[];
  features: string[];
  isHero?: boolean;
}

export interface Tutorial {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}
