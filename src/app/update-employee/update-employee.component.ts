import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFunctionService } from '../api-function.service';
import { employees } from '../model/employees';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id;
  object=new employees;
  constructor(private serv :ApiFunctionService,private router:Router,private activerouter:ActivatedRoute) {
   this.id= this.activerouter.snapshot.paramMap.get('id');
   this.serv.getId(this.id).subscribe((data:any)=>{
     this.object=data;
     console.log(this.object);
     
   })
    
   }

  ngOnInit(): void {
  }

  update(){
    this.serv.put(this.object,this.id).subscribe(data =>{
      this.router.navigateByUrl("/ListEmp");
    })
  }

}
