import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { authGuard } from './guards/auth.guard';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  {
    path: 'employee',
    component: EmployeeComponent,
    title: 'Employee',
    canActivate: [authGuard],
    children: [
      {
        path: 'list',
        component: EmployeeListComponent,
        title: 'Employee List',
      },
    ],
  },
  { path: '**', redirectTo: 'employee' },
];
