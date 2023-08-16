import { Component } from '@angular/core';
import { AppRoutes } from './models/routes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly AppRoutes = AppRoutes;
}
