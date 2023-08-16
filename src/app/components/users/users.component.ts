import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreActions } from 'src/app/state/actions';
import { ApiService } from 'src/app/services/api.service';
import { StoreSelectors } from '../../state/selectors';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  users$ = this.store.select(StoreSelectors.UsersSelector);
  showEmails$ = this.store.select(StoreSelectors.ShowEmailsSelector);
  loadingUsers$ = this.store.select(StoreSelectors.LoadingUsersSelector);
  usersLoadingFailed$ = this.store.select(StoreSelectors.UsersLoadingFailed);
  masterUser?: User;

  constructor(public api: ApiService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(StoreActions.LoadUsers());

    this.subscriptions.push(
      this.store
        .select(StoreSelectors.MasterUserSelector)
        .subscribe((user) => (this.masterUser = user))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

  setMasterUser(user: User): void {
    this.store.dispatch(StoreActions.SetMasterUser({ user }));
  }
}
