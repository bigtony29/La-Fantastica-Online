export type CategoryId = 
  | 'cartagena'
  | 'bolivar'
  | 'colombia'
  | 'politica'
  | 'seguranca'
  | 'esportes'
  | 'entretenimento'
  | 'mundo';

export interface CategoryInfo {
  id: CategoryId;
  label: string;
  color: string; // Tailwind color class or hex
  bgBadge: string;
  textBadge: string;
  description: string;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface CommentItem {
  id: string;
  authorName: string;
  avatarUrl?: string;
  date: string;
  content: string;
  likes: number;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  content: string[];
  quote?: {
    text: string;
    author: string;
  };
  keyTakeaways?: string[];
  category: CategoryId;
  categoryLabel: string;
  badgeBg: string;
  badgeText: string;
  author: Author;
  date: string;
  formattedTime: string;
  imageUrl: string;
  imageCaption: string;
  readTime: string;
  views: number;
  comments: CommentItem[];
  isBreaking?: boolean;
  isHeroMain?: boolean;
  isHeroSecondary?: boolean;
  isRecentStrip?: boolean;
  isPopular?: boolean;
  tags: string[];
}

export interface WeatherData {
  city: string;
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}
