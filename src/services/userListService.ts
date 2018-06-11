import {Injectable} from "@angular/core";
import {User} from '../bo/User';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import {ServerService} from './server.service';
import {ChatService} from './chatService';

@Injectable()
export class UserListService {

  public static userList: User[] = [];

  /**listeUsers est l'observable, il référence la userList*/
  public static listeUsers;

  constructor(private serverService: ServerService, private socket: ChatService) {

    UserListService.listeUsers = Observable.from(UserListService.userList);

    ////// SOCKETS /////////
    this.socket.onEventWithData('userLogout').subscribe((result: any) => {
      console.log('logout==> ' + UserListService.userList);
      this.removeUser(result.user);
    });

    this.socket.onEventWithData('userLogin').subscribe((result: any) => {
      console.log('login ==> ' + UserListService.userList);
      this.addUser(result.user);
    });
    
    ////------------------////

  }

  public getList () {
    return Observable.of(UserListService.userList);
  }

  public addUser (pUser: User) {
    UserListService.userList.push(pUser);
  }

  public removeUser (pUser: User) {
    for (let i = 0; i < UserListService.userList.length; i++ ) {
      if (UserListService.userList[i]['_id'] === pUser.id ) {
        UserListService.userList.splice(0, 1);
        UserListService.userList[i]['_online'] = false;
      }
    }
  }

  public init (userList : User[]) {
    for (let i = 0; i < userList.length; i++ ) {
      UserListService.userList.push(userList[i]);
    }
  }

  public refreshList() {
   this.serverService.getUsersOnline().subscribe((response: any[]) => {
       response.forEach((elt) => {
       UserListService.userList.push(elt);
    });
   });
  }


}
