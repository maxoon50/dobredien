import { Injectable } from '@angular/core';
import { SocketIo } from 'ng-io';

@Injectable()
export class ChatService {

  constructor(private socket: SocketIo) { }

  sendMessage(msg: string){
    this.socket.emit("msg", msg);
  }

  connect(){
    this.socket.connect();
  }

  getMessage() {
    return this.socket
      .fromEvent("msg")
      .map( data => data);
  }
}
