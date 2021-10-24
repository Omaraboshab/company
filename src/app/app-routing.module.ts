import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { HomeComponent } from './home/home.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {path:"home" , component:HomeComponent },
  {path:"" , component:HomeComponent },
  {path:"AddEmp" , component:AddEmployeesComponent },
  {path:"ListEmp" , component:ListEmployeesComponent },
  {path:"updateEmp/:id" , component:UpdateEmployeeComponent },
  {path:"**" , component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
