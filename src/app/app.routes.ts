import { Routes } from '@angular/router';
import { LoginComponent } from './features/authentication/login/login.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AuthGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]}
];
