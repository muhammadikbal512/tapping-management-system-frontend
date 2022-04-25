import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionStatusChartService } from 'src/app/modules/services/chart-services/transaction-status-chart.service';

@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.css'],
})
export class TransactionStatusComponent implements OnInit, OnDestroy {
  constructor(public transactionStatusChart: TransactionStatusChartService) {}

  ngOnInit(): void {
    this.transactionStatusChart.chartRateTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.transactionStatusChart.interval);
  }
}
