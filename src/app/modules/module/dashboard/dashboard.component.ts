import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.chevronAndChildPositioning();
  }

  chevronAndChildPositioning() {
    const data = document.querySelectorAll('.have-child');

    data.forEach(x => {
      const childrenChevron = x.children.item(0)?.children

      const chevronIconInvestigation = childrenChevron?.namedItem('chevron-icon-investigation') as HTMLElement

      if (chevronIconInvestigation) {
        chevronIconInvestigation.style.left = x.getBoundingClientRect().right - 165 + 'px';
      }

      
    })
  }

}
