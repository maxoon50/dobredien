import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

/**
 * If currentUser exists (after login) set header with token
 */
@Injectable()
export class InterceptorHttpService implements HttpInterceptor {
  constructor(){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(localStorage.getItem('currentUser') !== null){
         let storage = JSON.parse(localStorage.getItem('currentUser'));
         let token = storage.token;
         const headers = new HttpHeaders({
            'x-access-token': token
         });
      req = req.clone({ headers });
    }

    return next.handle(req);
  }
}
