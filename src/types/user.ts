export type UserType = 'User';

export interface IUser {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
  type: UserType;
  site_admin: boolean;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
