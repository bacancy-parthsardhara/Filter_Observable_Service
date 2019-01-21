import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs'
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  constructor() {}

  employee: Subject<Emp> = new Subject<Emp>();

  // allData = [];

  pushdata(instance) : void{
    // this.allData.push(instance);
    this.employee.next(instance);

    // console.log(this.allData);
  }

  getdata(): Subject<Emp> {
    return this.employee;
  }
}
