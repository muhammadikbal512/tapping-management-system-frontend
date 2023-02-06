import { Component, OnInit } from '@angular/core';
import { TransactionTypeTableService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/transaction-type-table.service';
import { TransactionTypeService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/transaction-type.service';

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
    this.transactionTypesService.existingData = event.data;
  }

  refreshTable() {
    this.transactionTypesTableService.loading = true;
    this.getAllTransTypeMapping();
  }

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
