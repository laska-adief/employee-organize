import { Component, OnInit, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Employee, EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent implements OnInit {
  employeeService = inject(EmployeeService);
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'jobtitle'];
  dataSource!: MatTableDataSource<Employee>;

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.employeeService.getAllEmployee().subscribe({
      next: (resp) => {
        if (resp) {
          this.dataSource = new MatTableDataSource<Employee>(resp);
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
