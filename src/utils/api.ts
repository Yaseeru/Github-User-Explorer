// src/utils/api.ts
import axios from 'axios';
import type { User, Repo } from '../types';


const API_BASE = 'https://api.github.com';

// Fetch user profile
export const getUser = async (username: string): Promise<User> => {
  try {
    const { data } = await axios.get<User>(`${API_BASE}/users/${username}`);
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('API request failed');
  }
};

// Fetch user's repos (limit 5, sort by updated)
export const getRepos = async (username: string): Promise<Repo[]> => {
  try {
    const { data } = await axios.get<Repo[]>(
      `${API_BASE}/users/${username}/repos?per_page=5&sort=updated`
    );
    return data;
  } catch {
    throw new Error('Failed to fetch repositories');
  }
};
