import { Component, OnInit } from '@angular/core';
import {User} from "../../../../bo/User";
import {ServerService} from '../../../../services/server.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  userList: User[] = [];

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
    this.serverService.getUsers().subscribe((response: any[]) => {
      response.forEach((elt) => {
        this.userList.push(elt);
      });
    });

  }
}
