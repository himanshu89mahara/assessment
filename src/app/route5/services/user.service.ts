import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser():Observable<Array<User>>{
    return this.http.get<Array<User>>('https://jsonplaceholder.typicode.com/users');
  }


}
