import { createContext, FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { GitHubApi } from '@/services/github';
import { IUser } from '@/types/user';

import { IGitHubContext, IReposState } from './GitHubContext.types';

export const GitHubContext = createContext<IGitHubContext>({} as IGitHubContext);

export const GitHubProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const [repos, setRepos] = useState<IReposState>({ isLoading: false, list: [] });

  const loadUserRepos = useCallback(async (user: IUser) => {
    setRepos({ isLoading: true, list: [] });

    const { data, status, error } = await GitHubApi.getRepos(user.repos_url);

    if (status === 200 && data) {
      setRepos({ isLoading: false, list: data });
    } else {
      toast.error(error);
    }
  }, []);

  const loadUser = useCallback(
    async (userName: string) => {
      const { status, error, data } = await GitHubApi.getUser(userName);

      if (status === 200 && data) {
        setUser(data);
        loadUserRepos(data);
      } else {
        toast.error(error);
      }
    },
    [loadUserRepos]
  );

  const value = useMemo<IGitHubContext>(
    () => ({
      user,
      loadUser,
      repos,
    }),
    [loadUser, repos, user]
  );

  return <GitHubContext.Provider value={value}>{children}</GitHubContext.Provider>;
};
