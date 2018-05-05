import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import * as socketIo from 'socket.io-client';
import {User} from '../bo/User';

const SERVER_URL = 'http://localhost:3000';

@Injectable()
export class ChatService {
  private _socket;

  public initSocket(): void {
    this._socket = socketIo(SERVER_URL);
  }

  public send(message: any): void {
    this._socket.emit('msg', message);
  }

  public onMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this._socket.on('msg', (data: any) => observer.next(data));
    });
  }

  public onEvent(event: any): Observable<any> {
    return new Observable<Event>(observer => {
      this._socket.on(event, () => observer.next());
    });
  }

  public onEventWithData(event: any): Observable<any> {
    return new Observable<Event>(observer => {
      this._socket.on(event, (data: any) => observer.next(data));
    });
  }

  public disconnect(user: User) {
    this._socket.emit('userLogout', user);
  }

  get socket() {
    return this._socket;
  }

  set socket(value) {
    this._socket = value;
  }
}
