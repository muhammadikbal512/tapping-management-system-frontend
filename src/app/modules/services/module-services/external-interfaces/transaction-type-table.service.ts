import { Injectable } from '@angular/core';
import { TransactionTypeModel } from 'src/app/model/modules-model/transaction-type.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionTypeTableService {
  loading: boolean = true;
  transactionTypes!: TransactionTypeModel[];
  cols = [
    { field: 'transType', header: 'Transaction Type' },
    { field: 'description', header: 'Description' },
    { field: 'configId', header: 'Config ID' },
  ];
  constructor() {}

  setRowData(data: TransactionTypeModel[]) {
    this.transactionTypes = data;
  }
}
