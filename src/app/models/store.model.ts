import { User } from './user.model';

export interface AppStoreInterface {
  showEmails: boolean;
  masterUser?: User;
  users: User[];
  loadingUsers: boolean;
  usersLoadingFailedMessage?: any;
}

export const AppStoreName = 'store';
