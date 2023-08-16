import { ActionReducerMap } from '@ngrx/store';
import { AppStoreInterface, AppStoreName } from '../models/store.model';
import { AppReducers } from './reducers';

export const Store: ActionReducerMap<{
  [AppStoreName]: AppStoreInterface;
}> = {
  [AppStoreName]: AppReducers,
};
