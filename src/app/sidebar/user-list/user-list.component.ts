import { Component, OnInit } from '@angular/core';
import {User} from "../../../bo/User";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [new User('Toto')];

  constructor() { }

  ngOnInit() {
  }

}
