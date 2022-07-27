import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/module-services/dashboard.service';
import { Observable } from 'rxjs';
import { DeviceConnectedChartService } from '../../services/chart-services/device-connected-chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  myDate = new Date();
  constructor(
    private dashboardService: DashboardService,
    public deviceChart: DeviceConnectedChartService
    
  ) {}

  ngOnInit(): void {}
}
