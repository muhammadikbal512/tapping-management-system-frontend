import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { Subscription } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UserModel } from 'src/app/model/user-model/user.model';
import { HeaderType } from 'src/app/enum/header-type';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  form!: FormGroup;
  public showLoading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    if (this.authenticationService.isLoggedIn()) {
      this.router.navigateByUrl('/TMS-Home/dashboard');
    } else {
    }
  }

  login(user: UserModel): void {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || 'TMS-Home/dashboard';
    this.showLoading = true;
    this.subscriptions.push(
      this.authenticationService.login(user).subscribe(
        (response: HttpResponse<UserModel> | any) => {
          const token = response.headers.get(HeaderType.JWT_TOKEN);
          if (token != null) {
            this.authenticationService.saveToken(token);
          }
          this.authenticationService.addUserToLocalCache(response.body);
          this.router.navigateByUrl(returnUrl);
          this.showLoading = false;
        },
        (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: 'error',
            title: errorResponse.error.message
          });
          this.showLoading = false;
        }
      )
    );
  }
}
