import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PublicComponent } from './components/public/public.component';


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
