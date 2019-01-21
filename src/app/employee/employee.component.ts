import { Component, OnInit } from '@angular/core';
import { Position } from "../position.enum";
import { Emp } from "../emp";
import { EmpdataService } from "../empdata.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empData: Emp;
  employeeArray: Array<any>;
  obj1: Emp = {
    firstName: null,
    lastName: null,
    email: null,
    address: null,
    selectoption : null
  }

  constructor( private empdataService : EmpdataService) {
    this.employeeArray = [
      {
        "position": "QualityAnalyst"
      },
      {
        "position": "Devloper"
      },
      {
        "position": "ProjectManager"
      }
    ]
  }

  submitBtn(): void {
    this.empData = {
      firstName: this.obj1.firstName,
      lastName: this.obj1.lastName,
      email: this.obj1.email,
      address: this.obj1.address,
      selectoption :this.obj1.selectoption
        }
    // console.log("this is employee html",this.empData);
    this.empdataService.pushdata(this.empData);
  }

  ngOnInit() {
  }
}
