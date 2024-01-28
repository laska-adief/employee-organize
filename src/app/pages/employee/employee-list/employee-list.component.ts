import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent implements OnInit {
  employeeService = inject(EmployeeService);
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'jobtitle'];
  dataSource!: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.employeeService.getAllEmployee().subscribe({
      next: (resp) => {
        if (resp) {
          this.dataSource = new MatTableDataSource<Employee>(resp);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
