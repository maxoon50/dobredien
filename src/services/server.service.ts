import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
const API_URL = 'http://localhost:3000/api';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) {}

  getUser(arg: any) {
    let url = API_URL+'/user/'+arg;
    return this.http.get(url);
  }

  getUsers() {
    let url = API_URL+'/user/';
    return this.http.get(url);
  }

  getUsersOnline() {
    let url = API_URL+'/user/onlines';
    return this.http.get(url);
  }

  authenticate(pseudo: string, password: string){
    let url = API_URL+'/user/authenticate';
    let data = {pseudo, password };
    return this.http.post(url,data);
  }

}
