import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  OnDestroy,
} from '@angular/core';
import { TransactionTableService } from 'src/app/modules/services/module-services/transaction-table.service';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { TransactionService } from 'src/app/modules/services/module-services/transaction.service';
import {
  GridReadyEvent,
  RowClassRules,
  RowClickedEvent,
} from 'ag-grid-community';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, AfterViewInit {
  constructor(
    private transactionTableService: TransactionTableService,
    private transactionApiService: TransactionService,
    private notifierService: NotificationService
  ) {}

  ngOnInit(): void {}

  onCellClicked(data: RowClickedEvent) {
    this.transactionTableService.additionalData = data.data;
  }

  onGridReady(params: GridReadyEvent) {
    this.transactionTableService.GridApi = params;
    this.transactionTableService.GridColumnApi = params;
    this.runService();
  }

  runService() {
    this.transactionTableService.showTableLoading();
    this.transactionApiService.getAllTransactionListWithDelay();
  }

  ngAfterViewInit(): void {}

  public rowClassRules: RowClassRules = {
    // row style function
    'ag-bg-red': (params) => {
      return params.data.responseCode === '06';
    },
    // row style expression

    'ag-bg-yellow': 'data.responseCode === "09"',
  };

  get animateRow() {
    return this.transactionTableService.animateRow;
  }

  get headerHeight() {
    return this.transactionTableService.headerHeight;
  }

  get rowHeight() {
    return this.transactionTableService.rowHeight;
  }

  get overlayLoadingTemplate() {
    return this.transactionTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.transactionTableService.frameworkComponents;
  }

  get defaultColDef() {
    return this.transactionTableService.defaultColDef;
  }

  get columnDefs() {
    return this.transactionTableService.columnDefs;
  }

  get paginationSize() {
    return this.transactionTableService.paginationSize;
  }

  get rowData() {
    return this.transactionTableService.rowData;
  }
}

export let additionalData: TransactionMessageInterface;
