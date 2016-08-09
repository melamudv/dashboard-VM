import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CatalogBackupComponent } from './backup/backup.component';


const routes: RouterConfig = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
{
  path: 'catalog/backup',
  component: CatalogBackupComponent
}

];

export const appRouterProviders = [
  provideRouter(routes)
];


