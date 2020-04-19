import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'] 
})

export class EmployeesComponent implements OnInit {

  employees: Observable<Employee[]>;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.employees = this.employeeService.getEmployeesList();
  }
  
  createEmployee(){
    this.router.navigate(['add-employee']);
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['detail-employee', id]);
  }

}