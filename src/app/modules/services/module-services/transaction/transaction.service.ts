import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TransactionMessageModel } from 'src/app/model/modules-model/transaction-message-model';
import { map } from 'rxjs';
import { TransactionDispatch } from 'src/app/state-configuration/modules/transaction/transaction.dispatch';
import { TransactionTableService } from './transaction-table.service';
import { EventCollectorModel } from 'src/app/model/modules-model/event-collector.model';
import { EventCollectorInterface } from 'src/app/interface/modules/event-collector';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  apiUrl = environment.core236;
  additionalData!: any[];
  eventCollectorDispatch: any;

  constructor(
    private http: HttpClient,
    private transactionDispatch: TransactionDispatch,
    private transactionTableService: TransactionTableService
  ) {}

  getAllTransactionList() {
    return this.http.get<any[]>(
      `${this.apiUrl}/transactions/listFiveHundredTransactions`
    );
  }

  getTest(params?: any) {
    return this.http.get<any>(environment.test, { params: params }).toPromise();
}

  getAllEventCollector() {
    return this.http.get<EventCollectorModel[]>(
      `${this.apiUrl}/apps/listEventCollectors`
    );
  }

  onGetAllEventCollector() {
    this.transactionDispatch._EventCollectorsGetDispatch();
  }

  onGetAllTransactionList() {
    this.transactionDispatch._TransactionGetDispatch();
  }

  getAllTransactionListWithDelay() {
    setTimeout(() => {
      this.onGetAllTransactionList();
    }, 500);
  }

  getEventCollectorWithDelay() {
    setTimeout(() => {
      this.onGetAllEventCollector();
    }, 500);
  }
}
