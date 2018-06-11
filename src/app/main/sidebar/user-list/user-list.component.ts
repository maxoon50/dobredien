import { Component, OnInit } from '@angular/core';
import {User} from "../../../../bo/User";
import {ServerService} from '../../../../services/server.service';
import {ChatService} from '../../../../services/chatService';
import {UserListService} from '../../../../services/userListService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  public userList: User[] = [];

  constructor(private serverService: ServerService,
              private socket: ChatService,
              private userListService: UserListService) {
  }

  ngOnInit() {
      // jsubscription to the userListService

     this.userListService.getList().subscribe((userList:any) => {
      this.userList = userList;
      console.log(this.userList);
      console.log("yo");

    });

  }



}
