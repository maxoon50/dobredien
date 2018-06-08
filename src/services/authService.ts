import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();


@Injectable()
export class AuthService {

  public getToken(): string {
    let storage = JSON.parse(localStorage.getItem('currentUser'));
    if ( storage != null ) {
      let token = storage.token;
      return token;
    }
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      return !helper.isTokenExpired(token);
    }
    return false;
  }


}
