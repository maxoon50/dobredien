import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../../../services/server.service';
import {ChatService} from '../../../../services/chatService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  userList: User[] = [];

  constructor(private serverService: ServerService, private socket: ChatService) {
  }

  ngOnInit() {

    this.serverService.getUsers().subscribe((response: any[]) => {
      response.forEach((elt) => {
        this.userList.push(elt);
      });
    });

    this.socket.onEventWithData('userLogout').subscribe((result: any) => {
      for (let i = 0; i < this.userList.length; i++ ) {
        if (this.userList[i]['_id'] === result.user._id ) {
          this.userList[i]['_online'] = false;
        }
      }
    });

    this.socket.onEventWithData('userLogin').subscribe((result: any) => {
      for (let i = 0; i < this.userList.length; i++ ) {
        if (this.userList[i]['_id'] === result.user._id ) {
          this.userList[i]['_online'] = true;
        }
      }
    });
  }
}
