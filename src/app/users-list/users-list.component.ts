import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {

  userList: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userList = [];

    this.getAllUsers();

  }

  getAllUsers() {
    this.userService.getAll()
      .subscribe((res: User[]) => {
        this.userList = res;
      });
  }

}
