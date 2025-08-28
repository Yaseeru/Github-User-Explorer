// Represents a GitHub user profile
export interface User {
  login: string;
  avatar_url: string;
  bio: string | null;
  followers: number;
  public_repos: number;
  html_url: string;
  name?: string;
  company?: string;
  location?: string;
}

// Represents a GitHub repository
export interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
  forks_count?: number;
}
