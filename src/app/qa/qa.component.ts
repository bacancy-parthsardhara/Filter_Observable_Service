import { Component, OnInit } from '@angular/core';
import { Emp } from "../emp";
import { EmpdataService } from "../empdata.service";
import { filter } from 'rxjs/operators';
import { Position } from '../position.enum';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  employeeQaData: Emp[] = [];

  constructor(private empdataService: EmpdataService) { }

  ngOnInit() {
    this.empdataService.getdata()
      .pipe
      (
        filter(r => r.selectoption.toString() == Position[0])
      )
      .subscribe(r => this.employeeQaData.push(r));
    console.log("this is ", this.employeeQaData);
   }

  // QualityAnalyst() {
  //   console.log("indasndasjkndajdalda");
  // }
}
