import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserModel } from 'src/app/model/user-model/user.model';
import { Router } from '@angular/router';
import { NotificationService } from '../notification-service/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public host: string = environment.core236;
  private token: string = '';
  private loggedInUsername: string = '';
  private jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  public login(
    user: UserModel
  ): Observable<HttpResponse<any> | HttpErrorResponse> {
    return this.http.post<HttpResponse<any> | HttpErrorResponse>(
      `${this.host}/user/login`,
      user,
      { observe: `response` }
    );
  }

  public logout(): void {
    this.token = '';
    this.loggedInUsername = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }

  public saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  public addUserToLocalCache(user: UserModel): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromLocalCache(): UserModel {
    return JSON.parse(localStorage.getItem('user') || '');
  }

  public loadToken(): void {
    this.token = localStorage.getItem('token') || '';
  }

  public getToken(): string {
    return this.token;
  }

  public isLoggedIn(): boolean {
    let status = false;
    this.loadToken();
    if (this.token != null && this.token != '') {
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (this.jwtHelper.isTokenExpired(this.token)) {
          this.logout();
          this.router.navigate(['/login']);
          window.location.reload();
          // this.notificationService.errorNotification('Your session time was expired, Please try to login again.', 0);
        } else {
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
          status = true;
        }
      }
    } else {
      this.logout();
      status = false;
    }
    return status;
  }
}
