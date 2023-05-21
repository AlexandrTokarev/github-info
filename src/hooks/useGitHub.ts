import { useContext } from 'react';

import { GitHubContext } from '@/context/AppContext';

export const useGitHub = () => {
  return useContext(GitHubContext);
};
