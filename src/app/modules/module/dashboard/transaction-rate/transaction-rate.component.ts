import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransactionRateChartService } from '../../../services/chart-services/transaction-rate-chart.service';
import { WebsocketService } from '../../../services/websocket-service/websocket-service.service';

@Component({
  selector: 'app-transaction-rate',
  templateUrl: './transaction-rate.component.html',
  styleUrls: ['./transaction-rate.component.css'],
})
export class TransactionRateComponent implements OnInit {
  constructor(
    // public transactionRateService: TransactionRateChartService,
    // public webSocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    // this.transactionRateService.chartRateTimer();
    // this.webSocketService.openSocket();
  }

  ngOnDestroy() {
    // clearInterval(this.transactionRateService.interval);
  }
}
