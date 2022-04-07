import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { Observable } from 'rxjs'; 
import { DashboardInterface } from './dashboard-interface/dashboard-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  myDate = new Date();
  posts = [] as any;
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.showData()
  }

  showData() {
    this.dashboardService.getData().subscribe((response) => {
      this.posts = response
    })
  }
  

  

}
