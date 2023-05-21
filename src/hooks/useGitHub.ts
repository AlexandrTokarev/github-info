import { useContext } from 'react';

import { GitHubContext } from '@/context/GitHubContext';

export const useGitHub = () => {
  return useContext(GitHubContext);
};
