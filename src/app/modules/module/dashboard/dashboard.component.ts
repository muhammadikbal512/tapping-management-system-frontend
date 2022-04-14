import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/module-services/dashboard.service';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  myDate = new Date();
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
  }
  

  

}
