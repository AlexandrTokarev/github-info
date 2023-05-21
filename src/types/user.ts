export type UserType = 'User';

export interface IUser {
  id: number;
  avatar_url: string;
  name: string;
  type: UserType;
  site_admin: boolean;
  company: string;
  bio: string | null;
  blog: string;
  location: string;
  login: string;
  email: string;
  events_url: string;
  hireable: boolean;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  received_events_url: string;
  followers: number;
  following: number;
  created_at: string;
  subscriptions_url: string;
  updated_at: string;
  url: string;
}
