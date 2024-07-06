import type { FC } from 'react';

import type { RepositoryInfoProps } from './RepositoryInfo.types';

const RepositoryInfo: FC<RepositoryInfoProps> = ({ repo }) => {
  return <div>{repo.name}</div>
};

export { RepositoryInfo };
