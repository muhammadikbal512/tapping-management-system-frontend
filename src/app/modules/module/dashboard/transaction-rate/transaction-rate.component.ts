import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransactionRateChartService } from '../../../services/chart-services/transaction-rate-chart.service';
import { WebsocketService } from '../../../services/websocket-service/websocket-service.service';
import { DashboardService } from 'src/app/modules/services/module-services/dashboard.service';

@Component({
  selector: 'app-transaction-rate',
  templateUrl: './transaction-rate.component.html',
  styleUrls: ['./transaction-rate.component.css'],
})
export class TransactionRateComponent implements OnInit, OnDestroy {
  address: string = '192.168.0.113'
  constructor(
    public transactionRateService: TransactionRateChartService,
    public dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.transactionRateService.chartRateTimer();
    // this.webSocketService.openSocket();
    
  }

  

  ngOnDestroy() {
    clearInterval(this.transactionRateService.interval);
  }

  
}
