import { Component } from '@angular/core';
import { AppRoutes } from 'src/app/models/routes.model';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent {
  readonly AppRoutes = AppRoutes;
}
