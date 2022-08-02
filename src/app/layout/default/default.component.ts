import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent implements OnInit, DoCheck {
  url: string[] = [];
  public urlParams1: string = '';
  public urlParams2: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
   
  }

  ngDoCheck(): void {
    this.url = this.router.url.split('/')
    this.urlParams1 = this.url[2];
    this.urlParams2 = this.url[3];
  }
}
