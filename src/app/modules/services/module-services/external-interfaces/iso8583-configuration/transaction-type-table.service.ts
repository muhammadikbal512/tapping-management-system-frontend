import { Injectable } from '@angular/core';
import { TransactionTypeModel } from 'src/app/model/modules-model/transaction-type.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionTypeTableService {
  loading: boolean = true;
  existingData: TransactionTypeModel = new TransactionTypeModel();
  transactionTypes!: TransactionTypeModel[];
  cols = [
    { field: 'transType', header: 'Transaction Type' },
    { field: 'description', header: 'Description' },
  ];
  constructor() {}

  setRowData(data: TransactionTypeModel[]) {
    this.transactionTypes = data;
  }

  set ExistingData(data: TransactionTypeModel) {
    this.existingData = data;
  }
}
