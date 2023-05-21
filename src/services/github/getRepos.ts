import { IRepo } from '@/types/repo';
import { request } from '@/utils/request';

export const getRepos = (url: string) => {
  return request<Array<IRepo>>({
    url,
  });
};
