import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User,UserAddress} from '../models/user.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers:[UserService]
})
export class UserListComponent implements OnInit {
  users!: Observable<User[]>;
  sort:{
    name:string,
    direction:string
  } = {
    name:'',
    direction:''
  };

  constructor(
    private userServ:UserService
  ) { }

  ngOnInit(): void {
    this.users = this.userServ.getUser();
  }

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
    console.log(data);
    this.sort = data;
  }

}
