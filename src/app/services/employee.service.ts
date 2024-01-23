import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface Employee {
  prefix: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  gender: string;
  birthDate: string;
  phone: string;
  avatar: string;
  street: string;
  city: string;
  country: string;
  jobTitle: string;
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
