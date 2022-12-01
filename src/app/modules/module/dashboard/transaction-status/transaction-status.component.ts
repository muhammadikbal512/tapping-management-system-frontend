import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionStatusChartService } from 'src/app/modules/services/chart-services/transaction-status-chart.service';

@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.css'],
})
export class TransactionStatusComponent implements OnInit, OnDestroy {
  success:any;
  declined: any;
  abnormal: any;
  constructor(public transactionStatusChart: TransactionStatusChartService) {}

  ngOnInit(): void {
    this.transactionStatusChart.chartRateTimer();
    this.randomNumber();
  }

  ngOnDestroy(): void {
    clearInterval(this.transactionStatusChart.interval);
  }

  randomNumber() {
     setInterval(() => {
      this.success = Math.round(Math.random() * 100);
      this.declined = Math.round(Math.random() * 100);
      this.abnormal = Math.round(Math.random() * 100);
    }, 1000);
  }
}
