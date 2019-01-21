import { Component, OnInit } from '@angular/core';
import { Emp } from "../emp";
import { EmpdataService } from "../empdata.service";
import { filter } from 'rxjs/operators';
import { Position } from '../position.enum';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.css']
})
export class PmComponent implements OnInit {

  employeePmData: Emp[] = [];

  constructor(private empdataService: EmpdataService) { }

  ngOnInit() {
    this.empdataService.getdata()
      .pipe
      (
        filter(r => r.selectoption.toString() == Position[2])
      )
      .subscribe(r => this.employeePmData.push(r));
    console.log("this is ", this.employeePmData);
  }

  // ProjectManager(){}
  // }
}
