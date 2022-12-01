import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClassRules } from 'ag-grid-community';
import { EventCollectorInterface } from 'src/app/interface/modules/event-collector';
import { TransactionNetworkTableService } from 'src/app/modules/services/module-services/transaction-network-table.service';
import { TransactionTableService } from 'src/app/modules/services/module-services/transaction-table.service';
import { TransactionService } from 'src/app/modules/services/module-services/transaction.service';

@Component({
  selector: 'app-transaction-network',
  templateUrl: './transaction-network.component.html',
  styleUrls: ['./transaction-network.component.css'],
})
export class TransactionNetworkComponent implements OnInit {
  constructor(public transactionNetwork: TransactionNetworkTableService) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.transactionNetwork.GridApi = params;
    this.transactionNetwork.GridColumnApi = params;
    this.runService();
  }

  runService() {
    this.transactionNetwork.showTableLoading();
    // this.transactionNetwork.setRowData(
    //   this.transactionNetwork.additionalEventCollector
    // );
  }

  public rowClassRules: RowClassRules = {
    // row style function
    'ag-bg-rowIndex': (params) => {
      return params.rowIndex % 2 == 0;
    },
  };

  get columnDefs() {
    return this.transactionNetwork.columnDefs;
  }

  get defaultColDef() {
    return this.transactionNetwork.defaultColDef;
  }

  get rowHeight() {
    return this.transactionNetwork.rowHeight;
  }

  get animateRow() {
    return this.transactionNetwork.animateRow;
  }

  get frameworkComponents() {
    return this.transactionNetwork.frameworkComponents;
  }

  get overlayLoadingTemplate() {
    return this.transactionNetwork.overlayLoadingTemplate;
  }
}
