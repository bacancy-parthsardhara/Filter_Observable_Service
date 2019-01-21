import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { QaComponent } from './qa/qa.component';
import { FormsModule } from '@angular/forms';
import { DevComponent } from './dev/dev.component';
import { PmComponent } from './pm/pm.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    QaComponent,
    DevComponent,
    PmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
