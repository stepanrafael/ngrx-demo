import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreActions } from 'src/app/state/actions';
import { StoreSelectors } from 'src/app/state/selectors';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  masterUser$ = this.store.select(StoreSelectors.MasterUserSelector);
  showEmails$ = this.store.select(StoreSelectors.ShowEmailsSelector);

  constructor(private store: Store) {}

  toggleEmails(): void {
    this.store.dispatch(StoreActions.ToggleEmails());
  }
}
