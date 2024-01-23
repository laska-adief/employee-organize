import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  http = inject(HttpClient);
  readonly url = 'http://localhost:3000/employees';
  constructor() {}

  getAllEmployee() {
    return this.http.get(this.url);
  }
}
