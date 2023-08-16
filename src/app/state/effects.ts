import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { StoreActions } from './actions';
import { ActionTypes } from './action-types';
import { of } from 'rxjs';

@Injectable()
export class Effects {
  constructor(private actions$: Actions, private api: ApiService) {}

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionTypes.LoadUsers),
      tap(() => StoreActions.LoadingUsers({ loading: true })),
      switchMap(() => {
        return this.api.getUsers().pipe(
          map((users) => StoreActions.LoadUsersSucceeded({ users })),
          catchError((err) =>
            of(StoreActions.LoadUsersFailed({ message: err.message }))
          )
        );
      })
    );
  });

  usersLoaded$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionTypes.LoadUsersSucceeded),
      switchMap(() => of(StoreActions.LoadingUsers({ loading: false })))
    );
  });

  usersLoadingFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionTypes.LoadUsersFailed),
      switchMap(() => of(StoreActions.LoadingUsers({ loading: false })))
    );
  });
}
