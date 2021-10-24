import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFunctionService } from '../api-function.service';
import { employees } from '../model/employees';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  object = new employees;
  constructor(private serv:ApiFunctionService,private router :Router) {

   }

   save(){
    this.serv.post(this.object).subscribe(data =>{
      this.router.navigateByUrl('ListEmp')
    })
   }


  ngOnInit(): void {
  }

}
