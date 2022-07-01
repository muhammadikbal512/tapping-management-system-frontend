import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Input,
  OnDestroy,
} from '@angular/core';
import { maskHPAN, TransactionTableService } from 'src/app/modules/services/module-services/transaction-table.service';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { TransactionService } from 'src/app/modules/services/module-services/transaction.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { NotificationTypeEnum } from 'src/app/enum/notification-type';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { TransactionMessageModel } from 'src/app/model/modules-model/transaction-message-model';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { HpanDialogComponent } from '../hpan-dialog/hpan-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() headerColHeight: any;
  @Input() paginationSize: any;
  @Input() defaultColDef: any;
  @Input() columnDefs: any;
  @Input() autoHeight: string = '';
  rowData: TransactionMessageInterface[] = [];
  frameworkComponents: any;

  overlayLoadingTemplate = '<span >Loading</span>';

  constructor(
    private transactionTableService: TransactionTableService,
    private transactionApiService: TransactionService,
    private notifierService: NotificationService
  ) {
  }

  ngOnInit(): void {
    this.frameworkComponents = {
      medalCellRenderer: HpanDialogComponent,
    };
  }

  onCellClicked(data: RowClickedEvent) {
    this.transactionTableService.additionalData = data.data;
  }

  onGridReady(params: GridReadyEvent) {
    this.transactionTableService.gridApi = params.api;
    this.transactionTableService.gridColumnApi = params.columnApi;
    this.transactionTableService.showTableLoading();

    if (this.rowData.length == 0) {
      setTimeout(() => {
        this.transactionApiService.getAllTransactionList().subscribe({
          next: this.responseHandler.bind(this),
          error: this.errorHandler.bind(this)
        });
      }, 500)
    }
  }

  //Api
  responseHandler(response: TransactionMessageModel[]) {
    const transactionTable = document.querySelector('.ag-theme-alpine') as HTMLElement;
    let responseData: TransactionMessageInterface[] = [];
    if (response.length == 0) {
      this.transactionTableService.showNoRowData();
    }
    response.forEach(x => {
      responseData.push({
        amount: x.amount,
        currencyCode: x.countryCode,
        location: x.location,
        messageAscii: x.messageAscii,
        messageHexa: x.messageHexa,
        posDataCode: x.posDataCode,
        sequenceNumber: x.sequenceNumber,
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
        transType: x.transType
      });
      this.rowData = responseData;
      transactionTable.style.height = 'auto';
      this.transactionTableService.setTableAutoHeight();
      this.transactionTableService.hideTableLoading();
    })
  }

  errorHandler(error: any) {
    this.transactionTableService.showNoRowData();
    this.notifierService.notify(NotificationTypeEnum.ERROR, 'status: ' + error.status + ' message: ' + error.statusText, error.status)
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.transactionTableService.destroyGrid();
  }
}

export let additionalData: TransactionMessageInterface;
