import { Component, OnInit } from '@angular/core';
import { EventCollectorInterface } from 'src/app/interface/modules/event-collector';
import { TransactionService } from 'src/app/modules/services/module-services/transaction.service';
import { additionalData } from '../widget-transaction/table/table.component';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css'],
})
export class TransactionSummaryComponent implements OnInit {
  additionalData: EventCollectorInterface = additionalData;
  constructor(public transactionApiService: TransactionService) {}

  ngOnInit(): void {}
}
