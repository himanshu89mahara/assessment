import { Component, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';
import {StudentMark,loadStudentMarks} from './models/student-marks.model';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.scss'],
})
export class StudentMarksComponent{
  studentMarks:StudentMark[] = loadStudentMarks();
  sort:{
    name:string,
    direction:string
  } = {
    name:'',
    direction:''
  };

  //notes: pass dynamic values in filters

  constructor() { }
  
  sortData(column:string){
    if(this.sort.name==column){
      if(this.sort.direction=='asc'){
        this.sort.direction = 'desc';
      }else{
        this.sort.direction = 'asc';
      }
    }else{
      this.sort.direction = 'asc';
    }
    this.sort.name = column;
  }

  get getSort(){
    return {...this.sort};
  }

  updateSort(data:any){
    this.sort = data;
  }

  
}
