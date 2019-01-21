import { Component, OnInit } from '@angular/core';
import { EmpdataService } from "../empdata.service";
import { Emp } from "../emp";
import { filter } from 'rxjs/operators';
import { Position } from '../position.enum';



@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {

  employeeDevData : Array<Emp> = [];

  constructor(private empdataService : EmpdataService) { }

  // dev(){
  //   this.empdataService.getdata().subscribe(response => this.employeeDevData = response);
  //   console.log("in qa ", this.employeeDevData);
  // }

  ngOnInit() {
    this.empdataService.getdata()
    .pipe
    (
      filter(r => r.selectoption.toString() == Position[1])
    )
    .subscribe(r => this.employeeDevData.push(r));
  console.log("this is ", this.employeeDevData);
  }

  // Devloper(){
  // }
}
