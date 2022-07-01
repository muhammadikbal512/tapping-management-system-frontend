import { Injectable } from '@angular/core';
import {
  ColDef,
  ColumnApi,
  GridApi,
  GridReadyEvent,
  IDetailCellRendererParams,
} from 'ag-grid-community';
import { ColumnListTransactionInterface } from 'src/app/interface/modules/column-list-transaction';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';

@Injectable({
  providedIn: 'root',
})
export class TransactionTableService {
  constructor() {}

  additionalData: TransactionMessageInterface | undefined;
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  headerColHeight: number = 30;
  paginationSize = 5;
  masterDetail: boolean = true;
  overlayLoadingTemplate = 'overlayLoading';
  frameworkComponents = {
    overlayLoading: OverlayLoadingComponent,
  };
  defaultColDef: ColDef = {
    flex: 1,
    maxWidth: 110,
    editable: false,
    resizable: true,
    filter: true
  };
  columnDefs: ColDef[] = [
    {
      field: 'transactionDate',
      sortable: true,
      sort: 'desc',
      minWidth: 200,
      maxWidth: 300,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'networkDate',
      sortable: true,
      minWidth: 200,
      maxWidth: 300,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'MTI',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'HPAN',
      sortable: true,
      minWidth: 180,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      cellRenderer: 'medalCellRenderer',
    },
    {
      field: 'terminalId',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      filter: true
    },
    {
      field: 'merchantId',
      cellRenderer: 'agGroupCellRenderer',
      sortable: true,
      minWidth: 200,
      maxWidth: 230,
      headerClass: 'transaction-header-color',
      filter: true
    },
    {
      field: 'merchantType',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      filter: true
    },
    {
      field: 'currencyCode',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      filter: true
    },
    {
      field: 'amount',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'responseCode',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      valueParser: numberParser,
      headerClass: 'transaction-header-color',
      cellClassRules: {
        'rag-red': 'x != 00',
      },
      filter: true
    },
    {
      field: 'transactionId',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      filter: true
    },
    {
      field: 'networkId',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      filter: true
    },
    {
      field: 'RRN',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'location',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'messageAscii',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'messageHexa',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'posDataCode',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'sequenceNumber',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'srcAccount',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'destAccount',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
  ];
  columnLists: ColumnListTransactionInterface[] = [
    { value: 'transactionDate', viewValue: 'Transaction Date' },
    { value: 'networkDate', viewValue: 'Network Date' },
    { value: 'networkDate', viewValue: 'Network Date' },
    { value: 'MTI', viewValue: 'MTI' },
    { value: 'HPAN', viewValue: 'HPAN' },
    { value: 'terminalId', viewValue: 'Terminal Id' },
    { value: 'merchantId', viewValue: 'Merchant Id' },
    { value: 'merchantType', viewValue: 'Merchant Type' },
    { value: 'currencyCode', viewValue: 'Currency Code' },
    { value: 'amount', viewValue: 'Amount' },
    { value: 'responseCode', viewValue: 'Response Code' },
    { value: 'transactionId', viewValue: 'Transaction Id' },
    { value: 'networkId', viewValue: 'Network Id' },
    { value: 'RRN', viewValue: 'RRN' },
    { value: 'srcAccount', viewValue: 'Src Account' },
    { value: 'destAccount', viewValue: 'Dest Account' },
  ];
  sortColumnList = this.columnLists.sort((a, b) =>
    a.value.localeCompare(b.value)
  );

  showTableLoading() {
    this.gridApi.showLoadingOverlay();
  }

  hideTableLoading() {
    this.gridApi.hideOverlay();
  }

  setTableAutoHeight() {
    this.gridApi.setDomLayout('autoHeight');
  }

  setRowData(data: any[]) {
    this.gridApi.setRowData(data);
  }

  showNoRowData() {
    this.gridApi.showNoRowsOverlay();
  }

  destroyGrid() {
    this.gridApi.destroy();
  }

  set GridApi(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  set GridColumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}

export function numberParser(params: any) {
  const newValue = params.newValue;
  let valueAsNumber;
  if (newValue === null || newValue === undefined || newValue === '') {
    valueAsNumber = null;
  } else {
    valueAsNumber = parseFloat(params.newValue);
  }
  return valueAsNumber;
}

//Masking HPAN
export function maskHPAN(
  HPAN: string,
  mask: string,
  start: number,
  end: number
) {
  return (
    ('' + HPAN).slice(0, start) +
    ('' + HPAN).slice(start, -end).replace(/./g, mask) +
    ('' + HPAN).slice(-end)
  );
}
