import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../modules/services/authentication-service/authentication.service'
import { catchError } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  
  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    // if (httpRequest.url.includes(`${this.authenticationService.host}/dialectMsgTemplate/list`)) {
    //   return httpHandler.handle(httpRequest);
    // }
    this.authenticationService.loadToken();
    const token = this.authenticationService.getToken();
    const request = httpRequest.clone({setHeaders: {Authorization: `Bearer ${token}`}})
    return httpHandler.handle(request).pipe(catchError((err: any) => {
      this.authenticationService.isLoggedIn();
      return throwError(err)
    }));
  }
}
