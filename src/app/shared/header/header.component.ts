import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { HeaderService } from 'src/app/modules/services/shared-service/header.service';
import { RoleUser } from 'src/app/enum/role-user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/services/authentication-service/authentication.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSidebar = false;
  @Output() btnClick = new EventEmitter();
  @Output() mobileClick = new EventEmitter();
  dataUser: any;


  constructor(
    private _er: ElementRef,
    private router: Router,
    private headerService: HeaderService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }

  onClick() {
    // console.log('header')
    this.btnClick.emit();
  }

  mobile() {
    this.btnClick.emit();
  }

  logout() {

  }

  getUserData() {
    const UserDataFromLocalStorage = this.headerService.loadDataUserFromLocalStorage() || '';
    this.dataUser = JSON.parse(UserDataFromLocalStorage);
    this.dataUser.profileImageUrl = this.dataUser.profileImageUrl.replace('localhost', '192.168.1.236');
    if (this.dataUser.roles == "ROLE_USER") {
      this.dataUser.roles = RoleUser.ROLE_USER;
    }
  }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    alert(`You've been successfully logged out`);
  }

}
