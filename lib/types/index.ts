// Page Types
export interface PageProps {
  params?: {
    slug?: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Layout Types
export interface LayoutProps {
  children: React.ReactNode;
}

// Navigation Types
export interface NavItem {
  href: string;
  label: string;
}

// Bio Types
export interface BioSection {
  title: string;
  items?: string[];
  description?: string;
}

// Blog Types
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// Research Paper Types
export interface ResearchPaper {
  slug: string;
  title: string;
  date: string;
  abstract: string;
  content: string;
}

// Project Types
export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

// Game Types
export interface GameProps {
  difficulty?: 'easy' | 'medium' | 'hard';
  onScore?: (score: number) => void;
} 