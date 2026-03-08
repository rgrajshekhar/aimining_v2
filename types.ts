export type ViewState = 
  | 'dashboard' 
  | 'library' 
  | 'notes' 
  | 'royalty' 
  | 'ratings' 
  | 'consultancy' 
  | 'profile' 
  | 'returns'
  | 'star'
  | 'admin'
  | 'minerals';

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  cover: string;
  progress: number;
}

export interface Ebook {
  id: string;
  title: string;
  category: string;
  description: string;
  author: string;
  fileUrl: string;
  coverUrl?: string;
  requiresSubscription: boolean;
  requiredPlan: string;
  hasAccess?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
}

export interface ReturnData {
  month: string;
  revenue: number;
  expenses: number;
  royalty: number;
}

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar: string;
  bio: string;
}