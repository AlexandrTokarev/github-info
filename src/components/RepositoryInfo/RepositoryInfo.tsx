import type { FC } from 'react';

import { formatDate } from '@/utils/formatDate';

import type { RepositoryInfoProps } from './RepositoryInfo.types';

const RepositoryInfo: FC<RepositoryInfoProps> = ({ repo }) => {
  const { created_at, updated_at } = repo;

  return (
    <div>
      <h4>{repo.name}</h4>
      <p>Created: {formatDate(created_at)}</p>
      <p>Last updated: {formatDate(updated_at)}</p>
    </div>
  );
};

export { RepositoryInfo };
