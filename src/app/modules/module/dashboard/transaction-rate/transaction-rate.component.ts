import { Component, OnInit } from '@angular/core';
import { TransactionRateChartService } from 'src/app/modules/services/chart-services/transaction-rate-chart.service';
import { WebsocketService } from 'src/app/modules/services/websocket-service/websocket-service.service';

@Component({
  selector: 'app-transaction-rate',
  templateUrl: './transaction-rate.component.html',
  styleUrls: ['./transaction-rate.component.css']
})
export class TransactionRateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
