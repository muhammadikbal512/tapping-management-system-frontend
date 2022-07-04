import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TransactionMessageModel } from 'src/app/model/modules-model/transaction-message-model';
import { map } from 'rxjs';
import { TransactionDispatch } from 'src/app/state-configuration/modules/transaction/transaction.dispatch';
import { TransactionTableService } from './transaction-table.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  apiUrl = environment.core236;

  constructor(
    private http: HttpClient,
    private transactionDispatch: TransactionDispatch,
    private transactionTableService: TransactionTableService
  ) {}

  getAllTransactionList() {
    return this.http.get<TransactionMessageModel[]>(
      `${this.apiUrl}/Transaction/list`
    );
  }

  onGetAllTransactionList() {
    this.transactionTableService.showTableLoading();
    this.transactionDispatch._TransactionGetDispatch();
  }

  getAllTransactionListWithDelay() {
    setTimeout(() => {
      this.onGetAllTransactionList();
    }, 500);
  }
}
