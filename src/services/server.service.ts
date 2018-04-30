import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
const API_URL = 'http://localhost:3000/api';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) {}

  getUser(arg: any) {
    let url = API_URL+'/user/'+arg;
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let options =  {
      headers: headers
    };
    return this.http.get(url, options);
  }

  authenticate(pseudo: string, password: string){
    let url = API_URL+'/user/authenticate';
    let data = {pseudo, password };
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let options =  {
      headers: headers
    };
    return this.http.post(url,data, options);
  }

}
