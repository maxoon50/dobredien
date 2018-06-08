import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {AuthService} from "./authService";

/**
 * If currentUser exists (after login) set header with token
 */
@Injectable()
export class InterceptorHttpService implements HttpInterceptor {

  constructor(private auth: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if ( this.auth.getToken() ) {
         const headers = new HttpHeaders({
            'x-access-token': this.auth.getToken()
         });
      req = req.clone({headers});
    }

    return next.handle(req);
  }
}
