import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
// import { Response, HttpModule } from "@angular/http";
// import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  // url: string = 'http://localhost:3000/employees';

  url: string = 'https://jsonplaceholder.typicode.com/users?_sort=name&_order=asc';

  constructor(
    private http: HttpClient
  ) { }

  // getAll() {
  //   return this.http.get<User[]>(this.url)
  //     .map((data: User[]) => {
  //       return data;
  //     })


  // }

  getAll() {
    return this.http.get<User[]>(this.url)
      .map((data: User[]) => {
        return data as User[];
      })
  }

}
