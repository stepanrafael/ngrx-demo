import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStoreInterface, AppStoreName } from '../models/store.model';

export const StoreSelectors = {
  ShowEmailsSelector: createSelector(
    createFeatureSelector<AppStoreInterface>(AppStoreName),
    (state) => state.showEmails
  ),
  MasterUserSelector: createSelector(
    createFeatureSelector<AppStoreInterface>(AppStoreName),
    (state) => state.masterUser
  ),
  UsersSelector: createSelector(
    createFeatureSelector<AppStoreInterface>(AppStoreName),
    (state) => state.users
  ),
  LoadingUsersSelector: createSelector(
    createFeatureSelector<AppStoreInterface>(AppStoreName),
    (state) => state.loadingUsers
  ),
  UsersLoadingFailed: createSelector(
    createFeatureSelector<AppStoreInterface>(AppStoreName),
    (state) => state.usersLoadingFailedMessage
  ),
};
