import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './template/main/main.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { EmployeeService } from './modul/employees/employee.service';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeesComponent } from './modul/employee/employees/employees.component';
import { CreateEmployeeComponent } from './modul/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './modul/employee/update-employee/update-employee.component';
import { DetailEmployeeComponent } from './modul/employee/detail-employee/detail-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    EmployeesComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    DetailEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
