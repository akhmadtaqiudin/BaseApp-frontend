import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './template/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:MainComponent },
  { path: 'employees', loadChildren: () => import(`../app/modul/employee/employee.module`).then(m => m.EmployeeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
