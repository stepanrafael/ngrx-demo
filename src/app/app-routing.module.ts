import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { AppRoutes } from './models/routes.model';

const routes: Routes = [
  {
    path: AppRoutes.Dashboard,
    component: DashboardComponent,
  },
  {
    path: AppRoutes.Users,
    component: UsersComponent,
  },
  {
    path: AppRoutes.Workflow,
    component: WorkflowComponent,
  },
  { path: '**', redirectTo: `/${AppRoutes.Dashboard}`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
