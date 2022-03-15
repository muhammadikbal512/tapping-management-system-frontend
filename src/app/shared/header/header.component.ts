import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSidebar = false;
  @Output() btnClick = new EventEmitter();
  @Output() mobileClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // console.log('header')
    this.btnClick.emit();
  }

  mobile() {
    this.btnClick.emit();
  }

}
