import { Component, OnInit } from '@angular/core';
import { TransactionTypeTableService } from 'src/app/modules/services/module-services/external-interfaces/transaction-type-table.service';
import { TransactionTypeService } from 'src/app/modules/services/module-services/external-interfaces/transaction-type.service';

@Component({
  selector: 'app-transaction-type-table',
  templateUrl: './transaction-type-table.component.html',
  styleUrls: ['./transaction-type-table.component.css'],
})
export class TransactionTypeTableComponent implements OnInit {
  constructor(
    private transactionTypesService: TransactionTypeService,
    private transactionTypesTableService: TransactionTypeTableService
  ) {}

  ngOnInit(): void {
    this.getAllTransTypeMapping();
  }

  onRowSelect(event: any) {
    this.transactionTypesService.ExistingData = event.data;
  }

  refreshTable() {}

  getAllTransTypeMapping() {
    this.transactionTypesService.onGetAllTransactionType();
  }

  showDialog() {
    this.transactionTypesService.buttonStatus = 'create';
    this.transactionTypesService.openDialog();
  }

  get cols() {
    return this.transactionTypesTableService.cols;
  }

  get loading() {
    return this.transactionTypesTableService.loading;
  }

  get transactionTypes() {
    return this.transactionTypesTableService.transactionTypes;
  }
}