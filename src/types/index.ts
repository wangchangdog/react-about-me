// 共通型定義

export interface BaseComponent {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

// ナビゲーション関連
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

// プロジェクト関連
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'design' | 'other';
  featured: boolean;
  createdAt: Date;
}

// ブログ関連
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  imageAlt?: string;
  tags: string[];
  publishedAt: Date;
  updatedAt: Date;
  slug: string;
  featured: boolean;
}

// スキル関連
export interface Skill {
  id: string;
  name: string;
  level: 1 | 2 | 3 | 4 | 5; // 1: 初級, 5: 上級
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'other';
  icon?: string;
}

// 経歴関連
export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  description: string;
  startDate: Date;
  endDate?: Date; // 現在の場合はundefined
  type: 'work' | 'education' | 'project';
}

// コンタクトフォーム関連
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select';
  required: boolean;
  placeholder?: string;
  options?: string[]; // select用
}

export interface FormErrors {
  [key: string]: string | undefined;
}

// ソーシャルリンク関連
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color?: string;
}

// UI関連
export interface ButtonProps extends BaseComponent {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps extends BaseComponent {
  name: string;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  onChange?: (value: string) => void;
}

export interface CardProps extends BaseComponent {
  title?: string;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  hoverable?: boolean;
}

export interface ModalProps extends BaseComponent {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// ページ関連
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

// API関連
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// フィルター関連
export interface ProjectFilter {
  category?: Project['category'];
  featured?: boolean;
  technologies?: string[];
}

export interface BlogFilter {
  tags?: string[];
  featured?: boolean;
  dateRange?: {
    from: Date;
    to: Date;
  };
}

// レスポンシブ関連
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ResponsiveValue<T> {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}
