import { createContext, FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { GitHubApi } from '@/services/github';
import { IUser } from '@/types/user';

interface IGitHubContext {
  user: IUser | null;
  loadUser: (userName: string) => void;
}

export const GitHubContext = createContext<IGitHubContext>({} as IGitHubContext);

export const GitHubProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const loadUser = useCallback(async (userName: string) => {
    const { status, error, data } = await GitHubApi.getUser(userName);

    if (status === 200) {
      setUser(data);
    } else {
      // TODO: Show notify
      console.error(error);
    }
  }, []);

  const value = useMemo<IGitHubContext>(
    () => ({
      user,
      loadUser,
    }),
    [loadUser, user]
  );

  return <GitHubContext.Provider value={value}>{children}</GitHubContext.Provider>;
};
