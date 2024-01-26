import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface Employee {
  prefix: string;
  firstname: string;
  lastname: string;
  fullname: string;
  email: string;
  gender: string;
  birthdate: string;
  phone: string;
  avatar: string;
  street: string;
  city: string;
  country: string;
  jobtitle: string;
  id: string;
}
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  http = inject(HttpClient);
  readonly url = 'http://localhost:3000/employees';
  constructor() {}

  getAllEmployee() {
    return this.http.get<Employee[]>(this.url);
  }
}
