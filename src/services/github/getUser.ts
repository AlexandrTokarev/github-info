import { GITHUB_API } from '@/constants/github';
import { IUser } from '@/types/user';
import { request } from '@/utils/request';

export const getUser = (userName: string) => {
  return request<IUser>({
    url: `${GITHUB_API}/users/${userName}`,
  });
};
