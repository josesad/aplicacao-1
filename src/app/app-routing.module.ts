import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaLogadoComponent } from './area-logado/area-logado.component';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { GuardService } from './guards/guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'area-logado',
    component: AreaLogadoComponent,
    canActivate: [GuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }
