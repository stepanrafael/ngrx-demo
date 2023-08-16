import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';
import { ActionTypes } from './action-types';

export const StoreActions = {
  LoadUsers: createAction(ActionTypes.LoadUsers),
  LoadUsersSucceeded: createAction(
    ActionTypes.LoadUsersSucceeded,
    props<{ users: User[] }>()
  ),
  LoadUsersFailed: createAction(
    ActionTypes.LoadUsersFailed,
    props<{ message: any }>()
  ),
  LoadingUsers: createAction(
    ActionTypes.LoadingUsers,
    props<{ loading: boolean }>()
  ),
  ToggleEmails: createAction(ActionTypes.ToggleEmails),
  SetMasterUser: createAction(
    ActionTypes.SetMasterUser,
    props<{ user: User }>()
  ),
};
