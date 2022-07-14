import { Component, OnInit } from '@angular/core';
import { RowClassRules, RowStyle } from 'ag-grid-community';
import { TransactionFlowService } from 'src/app/modules/services/module-services/transaction-flow.service';

@Component({
  selector: 'app-transaction-flow-table',
  templateUrl: './transaction-flow-table.component.html',
  styleUrls: ['./transaction-flow-table.component.css'],
})
export class TransactionFlowTableComponent implements OnInit {
  constructor(private flowTable: TransactionFlowService) {
  }

  ngOnInit(): void {}

  public rowClassRules: RowClassRules = {
    // row style function
    'ag-bg-red': (params) => {
      return params.data.description === 'TCP Disconnect - FIN'
    },
    // row style expression
    'sick-days-breach': 'data.sickDays == 2',
  };

  get animateRow() {
    return this.flowTable.animateRow;
  }

  get rowHeight() {
    return this.flowTable.rowHeight;
  }

  get headerHeight() {
    return this.flowTable.headerHeight;
  }

  get frameworkComponents() {
    return this.flowTable.frameworkComponents;
  }

  get overlayLoadingTemplate() {
    return this.flowTable.overlayLoadingTemplate;
  }

  get defaultColDef() {
    return this.flowTable.defaultColDef;
  }

  get columnDefs() {
    return this.flowTable.columnDefs;
  }

  get rowData() {
    return this.flowTable.rowData;
  }
}
