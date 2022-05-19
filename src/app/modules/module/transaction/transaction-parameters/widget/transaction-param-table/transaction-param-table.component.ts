import { Component, OnInit } from '@angular/core';
import { TransactionParametersService } from 'src/app/modules/services/module-services/transaction-parameters.service';
import { TransactionParametersTableService } from 'src/app/modules/services/module-services/transaction-parameters-table.service';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { ColumnListTransactionInterface } from 'src/app/interface/modules/column-list-transaction';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-transaction-param-table',
  templateUrl: './transaction-param-table.component.html',
  styleUrls: ['./transaction-param-table.component.css'],
})
export class TransactionParamTableComponent implements OnInit {
  
  constructor(
    private transactionParametersService: TransactionParametersService,
    private transactionParametersTableService: TransactionParametersTableService
  ) {}

  ngOnInit(): void {
    
  }

  

  onGridReady(params: GridReadyEvent) {
    this.transactionParametersTableService.GridApi = params;
    this.transactionParametersTableService.GridColumnApi = params;
    this.runService();
  }

  onCellClicked(data: RowClickedEvent) {
    this.transactionParametersService.ExistingData = data;
  }

  private runService() {
    this.transactionParametersTableService.showTableLoading();
    this.transactionParametersService.getAllTransactionParametersWithDelay();
  }

  get animateRow() {
    return this.transactionParametersTableService.animateRow;
  }

  get columnDefs() {
    return this.transactionParametersTableService.columnDefs;
  }

  get defaultColDef() {
    return this.transactionParametersTableService.defaultColDef;
  }

  get rowHeight() {
    return this.transactionParametersTableService.rowHeight;
  }

  get headerHeight() {
    return this.transactionParametersTableService.headerHeight;
  }

  get overlayLoadingTemplate() {
    return this.transactionParametersTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.transactionParametersTableService.frameworkComponents;
  }
}
