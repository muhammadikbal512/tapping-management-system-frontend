import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Papa } from 'ngx-papaparse';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { TransactionTableService } from '../../services/module-services/transaction-table.service';
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
  additionalData: TransactionMessageInterface = additionalData;
  rangeDates!: Date[];
  constructor(
    private papa: Papa,
    public transactionTableService: TransactionTableService,
    public transactionApiService: TransactionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.stylingAgFooter();
  }

  onFilterTextBoxChange() {
    this.transactionTableService.onFilter('search-filter');
  }

  refreshTable() {
    this.transactionApiService.getAllTransactionListWithDelay();
  }

  stylingAgFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';
    ag?.appendChild(document.querySelector('.page-size-container') as Node);
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

  onPageSizeChanged() {
    const value = (<HTMLInputElement>document.getElementById('page-size'))
      .value;
    this.transactionTableService.gridApi?.paginationSetPageSize(Number(value));
  }
}
