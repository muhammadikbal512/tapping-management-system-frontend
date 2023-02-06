import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/modules/services/module-services/transaction/transaction.service';
import { EventCollectorInterface } from 'src/app/interface/modules/event-collector';
import * as FileSaver from 'file-saver';
import { EventCollectorModel } from 'src/app/model/modules-model/event-collector.model';
import { Select } from '@ngxs/store';
import { TransactionState } from 'src/app/state-configuration/modules/transaction/transaction.state';
import { Observable } from 'rxjs';
import { TransactionTableService } from 'src/app/modules/services/module-services/transaction/transaction-table.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Select(TransactionState.EventCollectors)
  eventCollectors$!: Observable<EventCollectorModel[]>;
  transactions!: any[];
  filteredRows: any;
  test!: number;
  lazy!: boolean;

  constructor(
    private transactionApiService: TransactionService,
    private transactionTableService: TransactionTableService
  ) {}

  ngOnInit(): void {
    this.lazy = true;
    this.getTransactions();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredRows.filter = filterValue.trim().toLowerCase();
  }

  loadTransactions(event: LazyLoadEvent) {
    this.transactionTableService.loading = true;
    setTimeout(() => {
      this.filteredRows = this.datasourceTransactions.filter((row) =>
        this.filterField(row, event.globalFilter)
      );
      // sort data
      this.filteredRows.sort(
        (a: any, b: any) =>
          this.compareField(a, b, event.sortField!) * event.sortOrder!
      );
      this.transactions = this.filteredRows.slice(
        event.first,
        event.first! + event.rows!
      );

      this.transactionTableService.totalRecords = this.filteredRows.length;

      this.transactionTableService.loading = false;
    }, 1000);
  }

  compareField(rowA: any, rowB: any, field: string): number {
    if (rowA[field] == null) return 1; // on considère les éléments null les plus petits
    if (typeof rowA[field] === 'string') {
      return rowA[field].localeCompare(rowB[field]);
    }
    if (typeof rowA[field] === 'number') {
      if (rowA[field] > rowB[field]) return 1;
      else return -1;
    }

    return this.test;
  }

  filterField(row: any, filter: any) {
    let isInFilter = false;
    let noFilter = true;

    for (var columnName in filter) {
      if (row[columnName] == null) {
        return;
      }
      noFilter = false;
      let rowValue: String = row[columnName].toString().toLowerCase();
      let filterMatchMode: String = filter[columnName].matchMode;
      console.log(filter[columnName]);
      if (
        filterMatchMode.includes('contains') &&
        rowValue.includes(filter[columnName].value.toLowerCase())
      ) {
        isInFilter = true;
      } else if (
        filterMatchMode.includes('startsWith') &&
        rowValue.startsWith(filter[columnName].value.toLowerCase())
      ) {
        isInFilter = true;
      } else if (
        filterMatchMode.includes('in') &&
        filter[columnName].value.includes(rowValue)
      ) {
        isInFilter = true;
      }
    }

    if (noFilter) {
      isInFilter = true;
    }

    return isInFilter;
  }

  getTransactions() {
    this.transactionApiService.onGetAllTransactionList();
    // this.transactionApiService.getAllTransactionList().subscribe((response) => {
    //   this.transactionTableService.datasourceTransactions = response;
    // })
  }

  refreshTable() {
    this.getTransactions();
    this.transactionTableService.loading = true;
  }

  onRowSelect(event: any) {
    this.transactionApiService.additionalData = event.data;
    console.log(event.data);
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.datasourceTransactions);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'transaction');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  get datasourceTransactions() {
    return this.transactionTableService.datasourceTransactions;
  }

  get totalRecords() {
    return this.transactionTableService.totalRecords;
  }

  get eventCollectors() {
    return this.transactionTableService.eventCollectors;
  }

  get loading() {
    return this.transactionTableService.loading;
  }

  get cols() {
    return this.transactionTableService.cols;
  }
}

export let additionalData: EventCollectorInterface;
