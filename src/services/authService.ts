import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();


@Injectable()
export class AuthService {

  public getToken(): string {
    let storage = JSON.parse(localStorage.getItem('currentUser'));
    let token = storage.token;
    return token;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    console.log(helper.getTokenExpirationDate(token));
    return helper.isTokenExpired(token);
  }


}
