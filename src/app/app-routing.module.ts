import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublicComponent } from './public/public.component';


const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: 'profile' , component: ProfileComponent },
  { path: 'dashboard' , component: DashboardComponent },
  { path: 'public' , component: PublicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
