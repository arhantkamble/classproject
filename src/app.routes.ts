import { Routes } from '@angular/router';
import { AdminLogin } from './admin_login/admin_login_component';
import { AdminPanel } from './admin_panel/admin_panel_component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AdminLogin },
  { path: 'admin-panel', component: AdminPanel },
  
  { path: '**', redirectTo: 'login' }
];