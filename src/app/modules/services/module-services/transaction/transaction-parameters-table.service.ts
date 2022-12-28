import { Injectable } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { TransactionParametersModel } from 'src/app/model/modules-model/transaction-parameters';
import { OverlayLoadingComponent } from '../../../global-widget/overlay-loading/overlay-loading.component';
import { TransactionParamActionButtonComponent } from '../../../module/transaction/transaction-parameters/widget/transaction-param-action-button/transaction-param-action-button.component';

@Injectable({
  providedIn: 'root',
})
export class TransactionParametersTableService {
  loading: boolean = true;
  transactionParams!: TransactionParametersModel[]
  cols = [
    { field: 'attributeName', header: 'Attribute Name'},
    { field: 'description', header: 'Description' },
  ];

  constructor() {}

  setRowData(data: TransactionParametersModel[]) {
    this.transactionParams = data;
  }
}
