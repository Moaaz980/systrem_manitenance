import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { LoginComponent } from '../shared/login/login.component';
import { RegisterComponent } from '../shared/register/register.component';

export const routes: Routes = [
  {path: '' , component: HomeComponent} ,
  {path: 'login' , component: LoginComponent} ,
  {path: 'register' , component: RegisterComponent} ,
];
