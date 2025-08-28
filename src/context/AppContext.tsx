import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User, Repo } from '../types';

interface AppState {
  cachedUsers: Record<string, { user: User; repos: Repo[] }>;
  addToCache: (username: string, data: { user: User; repos: Repo[] }) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cachedUsers, setCachedUsers] = useState<
    Record<string, { user: User; repos: Repo[] }>
  >({});

  const addToCache = (username: string, data: { user: User; repos: Repo[] }) => {
    setCachedUsers((prev) => ({
      ...prev,
      [username.toLowerCase()]: data,
    }));
  };

  return (
    <AppContext.Provider value={{ cachedUsers, addToCache }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
