import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentMarksComponent } from './student-marks.component';
import { StudentMarksRoutingModule } from './student-marks-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StudentMarksComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StudentMarksRoutingModule,
    SharedModule
  ]
})
export class StudentMarksModule { }
