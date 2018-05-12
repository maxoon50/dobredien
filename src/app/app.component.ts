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
  nbreReload = 0;
  constructor(private socket: ChatService) {}

  ngOnInit() {
    this.socket.initSocket();
  }
/* check si c'est vraiment un tab ou browser close ou si juste reload
 */
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    if (this.nbreReload === 0 || performance.navigation.type === 1) {
      this.nbreReload++;
    } else {
      let user: any = JSON.parse(localStorage.getItem('currentUser'));
      if (user != null) {
        this.socket.disconnect(user.user);
      }
    }
  }


}
