import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { Store } from './state/store';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './state/effects';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    WorkflowComponent,
    SidemenuComponent,
    TopbarComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(Store),
    EffectsModule.forRoot([Effects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
