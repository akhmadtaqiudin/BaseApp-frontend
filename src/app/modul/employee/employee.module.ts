import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    DetailEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent 
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
