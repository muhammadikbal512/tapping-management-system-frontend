import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { RowClickedEvent } from 'ag-grid-community';
import {
  maskHPAN,
  TransactionTableService,
} from 'src/app/modules/services/module-services/transaction-table.service';
import { TransactionMessageModel } from 'src/app/model/modules-model/transaction-message-model';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { TransactionService } from 'src/app/modules/services/module-services/transaction.service';
import { HpanDialogComponent } from '../hpan-dialog/hpan-dialog.component';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { NotificationTypeEnum } from 'src/app/enum/notification-type';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() headerColHeight: any;
  @Input() paginationSize: any;
  @Input() defaultColDef: any;
  @Input() masterDetail: any;
  @Input() columnDefs: any;
  @Input() autoHeight: string = '';

  date = new Date();
  resultsLength = 0;
  isLoading = true;
  rowData: TransactionMessageInterface[] = [];
  frameworkComponents: any;
  clickedRows = new Set<TransactionMessageInterface>();
  overlayLoadingTemplate =
    '<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>';

  constructor(
    private transactionTableService: TransactionTableService,
    private transactionService: TransactionService,
    private notifierService: NotificationService
  ) {}

  ngOnInit(): void {
    this.frameworkComponents = {
      medalCellRenderer: HpanDialogComponent,
    };
    this.allTransaction();
  }

  ELEMENT_DATA: TransactionMessageInterface[] = [];
  columnsToDisplay = [
    'action',
    'amount',
    'currencyCode',
    'destAccount',
    'HPAN',
    'clearHPAN',
    'merchantId',
    'merchantType',
    'MTI',
    'networkDate',
    'networkId',
    'responseCode',
    'RRN',
    'srcAccount',
    'terminalId',
    'transactionDate',
    'transactionId',
    'transType',
  ];
  expandedElement = [];
  dataSource = new MatTableDataSource<TransactionMessageInterface>(
    this.ELEMENT_DATA
  );

  allTransaction() {
    this.transactionService.getAllTransactionList().subscribe((response) => {
      this.dataSource.data = response as any;
      this.isLoading = false;
      this.resultsLength = response.length;
      console.log('table', this.dataSource.data);
    });
  }

  onCellClicked(data: RowClickedEvent) {
    this.transactionTableService.additionalData = data.data;
  }

  onGridReady(params: any) {
    this.transactionTableService.gridApi = params.api;
    this.transactionTableService.gridColumnApi = params.columnApi;
    this.transactionTableService.gridApi.showLoadingOverlay();

    if (this.rowData.length == 0) {
      setTimeout(() => {
        this.transactionService.getAllTransactionList().subscribe({
          next: this.responseHandler.bind(this),
          error: this.errorHandler.bind(this),
        });
      }, 500);
    }
  }

  //Api
  responseHandler(response: TransactionMessageModel[]) {
    const transactionTable = document.querySelector(
      '.ag-theme-alpine'
    ) as HTMLElement;
    let responseData: TransactionMessageInterface[] = [];
    if (response.length == 0) {
      this.transactionTableService.gridApi.showNoRowsOverlay();
    }
    response.forEach((x) => {
      responseData.push({
        amount: x.amount,
        currencyCode: x.countryCode,
        destAccount: x.destAccount,
        HPAN: maskHPAN(x.hpan, '*', 6, 4),
        clearHPAN: x.hpan,
        merchantId: x.merchantId,
        merchantType: x.merchantType,
        MTI: x.mti,
        networkDate: x.TrxDate,
        networkId: x.networkID,
        responseCode: x.responseCode,
        RRN: x.rrn,
        srcAccount: x.sourceAccount,
        terminalId: x.terminalId,
        transactionDate: x.TrxDate,
        transactionId: x.transactionId,
        transType: x.transType,
      });
      this.rowData = responseData;
      transactionTable.style.height = 'auto';
      this.transactionTableService.gridApi.setDomLayout('autoHeight');
      this.transactionTableService.gridApi.hideOverlay();
    });
  }

  errorHandler(error: any) {
    this.transactionTableService.gridApi.showNoRowsOverlay();
    this.notifierService.notify(
      NotificationTypeEnum.ERROR,
      'status: ' + error.status + ' message: ' + error.statusText,
      error.status
    );
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.transactionTableService.gridApi.destroy();
  }
}

export let additionalData: TransactionMessageInterface;
