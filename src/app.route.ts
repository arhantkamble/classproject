import { Routes } from '@angular/router';
import { AdminLogin } from './admin_login/admin_login_component';
import { AdminPanel } from './admin_panel/admin_panel_component';

export const routes: Routes = [
  { path: 'login', component: AdminLogin },
  // The string 'admin-panel' below is the path you navigate to:
  { path: 'admin-panel', component: AdminPanel },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];