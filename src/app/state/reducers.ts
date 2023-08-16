import { createAction, createReducer, on } from '@ngrx/store';
import { ActionTypes } from './action-types';
import { AppStoreInterface } from '../models/store.model';

const InitialAppState: AppStoreInterface = {
  showEmails: true,
  loadingUsers: true,
  users: [],
};

export const AppReducers = createReducer(
  InitialAppState,
  on(
    createAction(ActionTypes.ToggleEmails),
    (state): AppStoreInterface => ({
      ...state,
      showEmails: !state.showEmails,
    })
  ),
  on(
    createAction(ActionTypes.SetMasterUser),
    (state, action): AppStoreInterface => {
      return {
        ...state,
        masterUser: (action as any).user,
      };
    }
  ),
  on(
    createAction(ActionTypes.LoadingUsers),
    (state, action): AppStoreInterface => {
      return {
        ...state,
        loadingUsers: (action as any).loading,
      };
    }
  ),
  on(
    createAction(ActionTypes.LoadUsersSucceeded),
    (state, action): AppStoreInterface => {
      return {
        ...state,
        users: (action as any).users,
      };
    }
  ),
  on(
    createAction(ActionTypes.LoadUsersFailed),
    (state, action): AppStoreInterface => {
      return {
        ...state,
        usersLoadingFailedMessage: (action as any).message,
      };
    }
  )
);
