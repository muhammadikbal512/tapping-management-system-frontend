import { Component, OnInit } from '@angular/core';
import { TransactionParametersService } from 'src/app/modules/services/module-services/transaction-parameters.service';
import { TransactionParametersTableService } from 'src/app/modules/services/module-services/transaction-parameters-table.service';

@Component({
  selector: 'app-transaction-param-table',
  templateUrl: './transaction-param-table.component.html',
  styleUrls: ['./transaction-param-table.component.css'],
})
export class TransactionParamTableComponent implements OnInit {
  constructor(
    private transactionParametersService: TransactionParametersService,
    private transactionParamsTable: TransactionParametersTableService
  ) {}

  ngOnInit(): void {
    this.getTransactionParam();
  }

  getTransactionParam() {
    this.transactionParametersService.onGetAllTransactionParameters();
  }

  showDialog() {
    this.transactionParametersService.openDialog();
    this.transactionParametersService.buttonStatus = 'create';
  }

  onRowSelect(event: any) {
    this.transactionParametersService.ExistingData = event.data;
  }

  get cols() {
    return this.transactionParamsTable.cols;
  }

  get loading() {
    return this.transactionParamsTable.loading;
  }

  get transactionParams() {
    return this.transactionParamsTable.transactionParams;
  }
}
