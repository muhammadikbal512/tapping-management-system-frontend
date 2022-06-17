import { Injectable } from '@angular/core';
import { $sidebarMenu } from 'src/app/constant/sidebar.constant';
import { sidebarMenuItem } from 'src/app/interface/shared/sidebar.interface';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  sidebarMenu: sidebarMenuItem[] = $sidebarMenu;
  constructor() { }

  loadDataUserFromLocalStorage() {
    return localStorage.getItem('user');
  }
}
