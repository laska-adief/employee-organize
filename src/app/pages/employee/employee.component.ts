import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  imports: [RouterOutlet, NavbarComponent],
})
export class EmployeeComponent {}
