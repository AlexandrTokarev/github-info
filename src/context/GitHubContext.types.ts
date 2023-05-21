import { IRepo } from '@/types/repo';
import { IUser } from '@/types/user';

export interface IReposState {
  isLoading: boolean;
  list: Array<IRepo>;
}

export interface IGitHubContext {
  user: IUser | null;
  loadUser: (userName: string) => void;
  repos: IReposState;
}
