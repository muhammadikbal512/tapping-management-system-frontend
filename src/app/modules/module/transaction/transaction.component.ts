import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Papa } from 'ngx-papaparse';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { TransactionMessageModel } from 'src/app/model/modules-model/transaction-message-model';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { TransactionTableService, maskHPAN } from '../../services/module-services/transaction-table.service';
import { additionalData } from './widget-transaction/table/table.component';
import { TransactionService } from '../../services/module-services/transaction.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsTransactionComponent } from './forms-transaction/forms-transaction.component';



@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  searchFilterForm!: FormGroup;
  columnOption!: FormGroup;
  columnOptionValue: string[] = [];
  rowData: TransactionMessageInterface[] = [];
  additionalData: TransactionMessageInterface = additionalData;

  constructor(
    private dataFb: FormBuilder,
    private papa: Papa,
    private auth: AuthenticationService,
    public transactionTableService: TransactionTableService,
    public transactionApiService: TransactionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.searchFilterForm = this.dataFb.group({
      dateFrom: [null],
      dateTo: [null],
      MTI: [null],
      HPAN: [null],
      terminalId: [null],
      merchantId: [null],
      merchantType: [null],
      currencyCode: [null],
      amount: [null],
      responseCode: [null],
      transactionId: [null],
      networkId: [null],
      RRN: [null],
      srcAccount: [null],
      destAccount: [null],
    });

    this.columnOption = this.dataFb.group({
      column: [this.columnOptionValue],
    });

    this.transactionTableService.columnLists.forEach((x) => {
      this.columnOptionValue.push(x.value);
    });
  }

  ngAfterViewInit(): void {
    this.stylingAgFooter();
    setTimeout(() => {
      this.transactionApiService.getAllTransactionList().subscribe({
        next: this.responseHandler.bind(this),
        error: this.errorHandler.bind(this)
      });
    }, 500)
  }

  stylingAgFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';
    ag?.appendChild(document.querySelector('.page-size-container') as Node);
  }

  //Api
  responseHandler(response: TransactionMessageModel[]) {
    let responseData: TransactionMessageInterface[] = [];
    if (response.length == 0) {
      this.transactionTableService.gridApi.showNoRowsOverlay();
    }
    response.forEach((x) => {
      responseData.push({
        amount: x.amount,
        currencyCode: x.countryCode,
        location: x.location,
        messageAscii: x.messageAscii,
        messageHexa: x.messageHexa,
        posDataCode: x.posDataCode,
        sequenceNumber: x.sequenceNumber,
        destAccount: '',
        HPAN: maskHPAN(x.hpan, '*', 6, 4),
        clearHPAN: x.hpan,
        merchantId: x.merchantId,
        merchantType: x.merchantType,
        MTI: x.mti,
        networkDate: x.TrxDate,
        networkId: x.networkID,
        responseCode: x.responseCode,
        RRN: x.rrn,
        srcAccount: '',
        terminalId: x.terminalId,
        transactionDate: x.TrxDate,
        transactionId: x.transactionId,
        transType: x.transType,
      });
      this.rowData = responseData;
      this.transactionTableService.gridApi.setRowData(responseData);
      this.transactionTableService.gridApi.hideOverlay();
    });
  }

  errorHandler(error: any) {
    console.log(error);
    this.transactionTableService.gridApi.showNoRowsOverlay();
  }

  openDialog(): void {
    this.dialog.open(FormsTransactionComponent, {
      width: '800px',
    });
  }


  //Export excel button
  onExport() {
    const stringCSV = this.transactionTableService.gridApi.getDataAsCsv()!;
    this.papa.parse(stringCSV, {
      header: true,
      complete: (results) => {
        this.exportJsonAsExcelFile(results.data, 'transactionTableExport');
      },
    });
  }

  exportJsonAsExcelFile(json: any[], excelFileName: string) {
    const workSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workBook: XLSX.WorkBook = {
      Sheets: { data: workSheet },
      SheetNames: ['data'],
    };
    const excelBuffer = XLSX.write(workBook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  saveAsExcelFile(excelBuffer: any, excelFileName: string) {
    const data: Blob = new Blob([excelBuffer], { type: '.xlsx' });
    FileSaver.saveAs(
      data,
      excelFileName + ' - ' + new Date().toLocaleString() + '.xlsx'
    );
  }

  //Option Listener
  selectChange($event: MatSelectChange) {
    this.columnOptionValue.forEach((x) => {
      if ($event.value.includes(x)) {
        this.transactionTableService.gridColumnApi.setColumnVisible(x, true);
      } else {
        this.transactionTableService.gridColumnApi.setColumnVisible(x, false);
      }
    });
  }

  onPageSizeChanged() {
    const value = (<HTMLInputElement>document.getElementById('page-size'))
      .value;
    this.transactionTableService.gridApi?.paginationSetPageSize(Number(value));
  }
}
