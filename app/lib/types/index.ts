// Blog Post Types
export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: Author;
  tags: string[];
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

// Research Paper Types
export interface Paper {
  id: string;
  title: string;
  slug: string;
  abstract: string;
  content: string;
  publishedAt: string;
  authors: Author[];
  tags: string[];
  citations: Citation[];
}

export interface Citation {
  id: string;
  title: string;
  authors: string[];
  year: number;
  journal?: string;
  url?: string;
}

// Game Types
export interface GameScore {
  id: string;
  playerName: string;
  score: number;
  gameId: string;
  createdAt: string;
}

export interface GameState {
  id: string;
  name: string;
  isPlaying: boolean;
  score: number;
  timeLeft: number;
  highScores: GameScore[];
} 