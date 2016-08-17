import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CatalogBackupComponent } from './backup/backup.component';
import { PoliciesDataProtection } from './policies/viewpolicie/viewpolicie.component';
import { newPoliciesDataProtection } from './policies/newpolicie/newpolicie.component';
import { CatalogDashboardComponent } from './catalog/dashboard/dashboard.component';
import { underConstructorComponent } from './under/under.component';
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
},{
    path: 'policies/data-protection',
    component: PoliciesDataProtection
  },{
    path: 'policies/data-protection/new',
    component: newPoliciesDataProtection
  },{
    path: 'catalog/dashboard',
    component: CatalogDashboardComponent
  },{
    path: 'under',
    component: underConstructorComponent
  }

];

export const appRouterProviders = [
  provideRouter(routes)
];


