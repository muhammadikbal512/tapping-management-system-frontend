import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  showSidebar = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  getOnClick() {
    // console.log(evt);
    // console.log('default');
    this.showSidebar = !this.showSidebar
  }
  

}
