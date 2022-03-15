import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  

  expandSidebar() {
    const className = document.querySelector('.sidebar-container');
    const headerLogo = document.querySelector('.header-logo-text');

    if (!className?.classList.contains('collapsed')) {
      className?.classList.add('collapsed');
      if (!headerLogo?.classList.contains('show-logo')) {
        headerLogo?.classList.add('show-logo');
      }
    } else {
      className?.classList.remove('collapsed');
      if (headerLogo?.classList.contains('show-logo')) {
        headerLogo?.classList.remove('show-logo');
      }
    }
  }

}
