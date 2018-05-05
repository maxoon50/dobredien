import {Component, HostListener} from '@angular/core';
import {ChatService} from '../services/chatService';
import {User} from '../bo/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private socket: ChatService) {}

  ngOnInit() {
    this.socket.initSocket();
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    let user: any = JSON.parse(localStorage.getItem('currentUser'));
    if (user != null) {
      this.socket.disconnect(user.user);
    }
  }




}
