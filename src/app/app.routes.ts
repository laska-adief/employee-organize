import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { authGuard, authLoginGuard } from './guards/auth.guard';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './pages/employee/employee-form/employee-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
    canActivate: [authLoginGuard],
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    title: 'Employee',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: EmployeeListComponent,
        title: 'Employee List',
      },
      {
        path: 'form',
        component: EmployeeFormComponent,
        title: 'Employee Form',
      },
      { path: '**', redirectTo: 'employee' },
    ],
  },
  { path: '**', redirectTo: 'employee' },
];
